import './App.css';
import NavE from './components/NavE/NavE';
import ButtonCart from './components/Cart/ButtonCart/ButtonCart';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContiner/ItemDetailContainer';
function App() {
  return (
    <div className="App">
<NavE/>
<ButtonCart/>
<ItemListContainer/>
<ItemDetailContainer/>
    </div>
  );
}

export default App;