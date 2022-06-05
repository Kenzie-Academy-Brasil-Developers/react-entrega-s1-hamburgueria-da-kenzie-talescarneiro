import './App.css';
import Header from './components/Header';
import HeaderLogo from './components/HeaderLogo';
import HeaderInputSearch from './components/HeaderInputSearch';
import ProductList from './components/ProductList';
import Product from './components/Product'
import CartEmpty from './components/CartEmpty';
import Container from './components/Container';
import Cart from './components/Cart';
import { api } from './data/api';
import { useEffect, useState } from 'react';
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App() {
  const [productList, setProductList] = useState([])
  const [cartList, setCartList] = useState([])
  const [filterList, setFilterList] = useState([])

  const notify = () => toast('Wow so easy!')
  
  useEffect(() => {
    api.get()
    .then(response => setProductList(response.data))
    .catch(error => console.log(error))
  }, [])

  const addToCart = (newItem) => {
    const prod = cartList.findIndex(item => item.id === newItem.id)
    if(prod === -1) {
      setCartList([...cartList, newItem])
    } else {
      toast.error('Produto já existe no carrinho.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
  }

  const removeFromCart = (cartItem) => {
    setCartList(cartList.filter(item => item !== cartItem))
  }

  return (
    <main className="App">
      <Header>
        <HeaderLogo />
        <HeaderInputSearch/>
      </Header>

      <Container>
        <ProductList>
          {productList.map(product => (
            <Product key={product.id} product={product} addToCart={addToCart}/>
          ))}
        </ProductList>
        {cartList.length > 0 ? (<Cart cartList={cartList} removeFromCart={removeFromCart} setCartList={setCartList} />) : (<CartEmpty />)}
      </Container>

      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
{/* Same as */}
<ToastContainer />
    </main>
  );
}

export default App;
