import './App.css';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import NavBar from "./component/navbar/NavBar";

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer texto="Deluxo Disqueria Multiversal" />
    </>
  );
}

export default App
