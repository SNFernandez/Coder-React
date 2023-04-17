import './App.css';
import NavE from './components/NavE/NavE';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContiner/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavE />
        <Routes>

          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/categoria/:marca' element={<ItemListContainer/>} />
          <Route path='/item/:Id' element={<ItemDetailContainer/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;