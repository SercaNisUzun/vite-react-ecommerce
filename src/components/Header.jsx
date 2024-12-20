import React, { useState } from 'react'
import { MdSearch } from "react-icons/md";
import { FaBasketShopping } from "react-icons/fa6";
import { BsLightbulbOffFill, BsFillLightbulbFill } from "react-icons/bs";
import '../Css/Main.scss'
import { useNavigate } from 'react-router-dom';
import CustomButton from '../components/CustomButton'
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../Redux/slice/ProductSlice'
import Badge from '@mui/material/Badge';
import { setDrawer } from '../Redux/slice/BasketSlice';


function Header({ setSearchTerm }) {

    const { products } = useSelector((store) => store.basket);

    const [searchTermInput, setSearchTermInput] = useState('');

    const Woman = [
        { label: "Woman's Dresses", onClick: () => handleClick("womens-dresses") },
        { label: "Woman's Bags", onClick: () => handleClick("womens-bags") },
        { label: "Woman's Watches", onClick: () => handleClick("womens-watches") },
        { label: "Woman's Jewellery", onClick: () => handleClick("womens-jewellery") },
        { label: "Woman's Shoes", onClick: () => handleClick("womens-shoes") },
        { label: "Tops", onClick: () => handleClick("tops") }
    ];

    const Men = [
        { label: "Men's Shirt", onClick: () => handleClick("mens-shirts") },
        { label: "Men's Shoes", onClick: () => handleClick("mens-shoes") },
        { label: "Men's Watches", onClick: () => handleClick("mens-watches") }
    ];

    const HomeDesign = [
        { label: "Furniture", onClick: () => handleClick("furniture") },
        { label: "Home Decoration", onClick: () => handleClick("home-decoration") },
        { label: "Kitchen Accessories", onClick: () => handleClick("kitchen-accessories") }
    ];

    const Tecnologies = [
        { label: "Laptops", onClick: () => handleClick("laptops") },
        { label: "Smartphones", onClick: () => handleClick("smartphones") },
        { label: "Tablets", onClick: () => handleClick("tablets") },
        { label: "Mobile Accessories ", onClick: () => handleClick("mobile-accessories") }
    ];

    const Cosmetics = [
        { label: "Beauty", onClick: () => handleClick("beauty") },
        { label: "Fragrances", onClick: () => handleClick("fragrances") },
        { label: "Skin Care", onClick: () => handleClick("skin-care") }
    ];

    const SportAccessories = [
        { label: "Sport Accessories", onClick: () => handleClick("sports-accessories") },
        { label: "Sunglasses", onClick: () => handleClick("sunglasses") }
    ];

    const Vehicles = [
        { label: "Vehicle", onClick: () => handleClick("vehicle") },
        { label: "Motorcyle", onClick: () => handleClick("motorcycle") }
    ];

    const Food = [
        { label: "Groceries", onClick: () => handleClick("groceries") }
    ];


    const handleSearch = () => {
        setSearchTerm(searchTermInput);
        navigate('/search')
    }


    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = (param) => {
        navigate('/catalogue');
        dispatch(setCategory(param))
    }

    const [theme, setTheme] = useState(false);

    const changeTheme = () => {
        const root = document.getElementById("root");
        if (theme) {
            root.style.backgroundColor = "black";
            root.style.color = "antiquewhite";
        } else {
            root.style.backgroundColor = "antiquewhite";
            root.style.color = "black";
        }
        setTheme(!theme);
    };

    return (
        <div>
            <div className='mainNav'>

                <div>
                    <h2 className='logo' onClick={() => navigate("/")}>Sercan UZUN</h2>
                </div>

                <div className='searchCard' style={{ display: "flex", alignItems: "center" }}>
                    <input className='searchInput'
                        onChange={(e) => setSearchTermInput(e.target.value)}
                        placeholder='Search...'
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                        type="text" />
                    <MdSearch className='headerIcons' onClick={handleSearch} />
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>

                    <Badge onClick={() => dispatch(setDrawer())} badgeContent={products.length} color='error'>
                        <FaBasketShopping className='headerIcons' />
                    </Badge>
                    {theme ?
                        <BsLightbulbOffFill className='headerIcons' onClick={changeTheme} /> :
                        <BsFillLightbulbFill className='headerIcons' onClick={changeTheme} />
                    }
                </div>
            </div>

            <div>
                <hr />
            </div>

            <div className='navLinks'>
                <Button variant="contained" color="info" onClick={() => handleClick('')}>All Products</Button>
                <CustomButton className="navButtons"
                    label="Woman"
                    menuItems={Woman}
                    color="info"
                />
                <CustomButton className="navButtons"
                    label="Men"
                    menuItems={Men}
                    color="info"
                />
                <CustomButton
                    label="Home Design"
                    menuItems={HomeDesign}
                    color="info"
                />
                <CustomButton
                    label="Tecnologies"
                    menuItems={Tecnologies}
                    color="info"
                />
                <CustomButton
                    label="Cosmetics"
                    menuItems={Cosmetics}
                    color="info"
                />
                <CustomButton
                    label="Sport & Accessories"
                    menuItems={SportAccessories}
                    color="info"
                />
                <CustomButton
                    label="Vehicles"
                    menuItems={Vehicles}
                    color="info"
                />
                <CustomButton
                    label="Food"
                    menuItems={Food}
                    color="info"
                />
            </div>

        </div>
    )
}

export default Header
