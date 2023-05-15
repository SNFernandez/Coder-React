import './App.css';
import NavE from './components/NavE/NavE';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContiner/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import CartItem from './components/Cart/CartItem';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
        <NavE />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/marca/:marca' element={<ItemListContainer />} />
          <Route path='/item/:Id' element={<ItemDetailContainer />}/>
          <Route path='/cart' element={<CartItem/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='*' element={<h2>Estado en construccion</h2>} />
        </Routes>
        <Footer/>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;