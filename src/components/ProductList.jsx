import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../Redux/slice/ProductSlice';
import Product from '../components/Product';
import '../Css/Main.scss'

function ProductList() {

    const { products, category } = useSelector((store) => store.product);

    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);  // Başlangıçta loading true


    // Filtreleme işlemi category veya products değiştiğinde yapılacak
    useEffect(() => {
        // Eğer products yüklendiyse ve category boşsa, tüm ürünleri göster
        if (products.length > 0) {
            if (category) {
                setFilteredProducts(products.filter(product => product.category === category));  // Kategoriye göre filtreleme
            } else {
                setFilteredProducts(products);  // Kategori yoksa tüm ürünleri göster
            }
            setLoading(false);  // Yükleme tamamlandı
        }
    }, [category, products]);  // 'category' veya 'products' değiştiğinde çalışacak

    // Eğer ürünler yükleniyorsa, "loading..." mesajı göster
    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="mainCard">
            {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                    <Product key={product.id} product={product} />
                ))
            ) : (
                <p>No products found for this category</p>
            )}
        </div>
    );
}

export default ProductList;
