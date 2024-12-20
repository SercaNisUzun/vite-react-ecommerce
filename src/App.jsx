import { useEffect, useState } from 'react'
import '../src/Css/Main.scss'
import PageContainer from './Page Conteiner/PageContainer'
import Header from './components/Header'
import Footer from './components/Footer'
import RouterConfig from './config/RouterConfig'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { calculateBasket, deleteFromBasket, setDrawer, setMinus, setPlus } from './Redux/slice/BasketSlice'
import Drawer from '@mui/material/Drawer'
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { getAllProducts } from './Redux/slice/ProductSlice'
import Loading from './components/Loading'
import Button from '@mui/material/Button';

function App() {

  const { products, drawer } = useSelector((store) => store.basket)
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  useEffect(() => {
    dispatch(calculateBasket())
  }, [])

  const deleteItem = (productId) => {
    dispatch(deleteFromBasket({ id: productId }))
  }

  const decrement = (productId) => {
    dispatch(setMinus({ id: productId }))
  }

  const increment = (productId) => {
    dispatch(setPlus({ id: productId }))
  }

  return (
    <>
      <PageContainer>
        <Header setSearchTerm={setSearchTerm} />
        <RouterConfig searchTerm={searchTerm} />
        <Drawer anchor='right' open={drawer} onClose={() => dispatch(setDrawer())}>
          {products.length === 0 ? (
            <h2 style={{ margin: '20px' }}>Your Basket is empty..</h2>
          ) : (
            products && products.map((product) => {
              return (

                <div key={product.id} className='basketCard' style={{ padding: '20px' }}>

                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <img style={{ marginRight: '5px' }} src={product.thumbnail} width={50} height={50} alt={product.title} />
                    <p style={{ width: '320px', marginRight: '5px' }}>{product.title} </p>
                  </div>

                  <div className='basketInfo'>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px', alignItems: 'center' }}>
                      <p style={{ fontWeight: 'bold', fontSize: '17px' }}>{product.price} $</p>
                      <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
                        <CiCirclePlus onClick={() => increment(product.id)} style={{ fontSize: '20px' }} />
                        <p style={{ margin: '0 5px' }}><strong>{product.count}</strong> PCS</p>
                        <CiCircleMinus onClick={() => decrement(product.id)} style={{ fontSize: '20px' }} />
                      </div>
                      <p style={{ fontWeight: 'bold', fontSize: '17px' }}><strong>Total : {(product.price * product.count).toFixed(2)} $</strong></p>
                      <MdDeleteForever style={{ fontSize: '25px' }} id={product.id} onClick={() => deleteItem(product.id)} />
                    </div>
                  </div>

                  <hr />
                </div>
              )
            }))
          }

          <div style={{ alignSelf: 'center' }}>
            <Button variant="contained" color="info" onClick={() => { navigate('/basket'); dispatch(setDrawer()) }}>Go Basket</Button>
          </div>


        </Drawer>
        <Footer />
        <Loading />
      </PageContainer>

    </>
  )
}

export default App
