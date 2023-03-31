import './App.css';
import NavE from './components/NavE/NavE';
import ItemListE from './components/ItemsList/ItemList';

function App() {
  return (
    <div className="App">
<NavE/>
<ItemListE greeting={'Bienvenidos a la 1era pre entrega'}/>
    </div>
  );
}

export default App;
