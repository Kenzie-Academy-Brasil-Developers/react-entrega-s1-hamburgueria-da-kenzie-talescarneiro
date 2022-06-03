import './App.css';
import Header from './components/Header';
import HeaderLogo from './components/HeaderLogo';
import HeaderInputSearch from './components/HeaderInputSearch';
import ProductList from './components/ProductList';
import Product from './components/Product'
import CartEmpty from './components/CartEmpty';
import Container from './components/Container';

function App() {
  return (
    <main className="App">
      <Header>
        <HeaderLogo />
        <HeaderInputSearch />
      </Header>

      <Container>
        <ProductList>
          <Product />
          <Product />
          <Product />
          <Product />
        </ProductList>
        <CartEmpty />
      </Container>
    </main>
  );
}

export default App;
