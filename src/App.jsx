import './App.css';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import NavBar from "./component/navbar/NavBar";
import ItemDetailContainer from './component/ItemDetailContainer/itemDetailContainer';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer texto="Deluxo Disqueria Multiversal" />
      <ItemDetailContainer />
    </>
  );
}

export default App
