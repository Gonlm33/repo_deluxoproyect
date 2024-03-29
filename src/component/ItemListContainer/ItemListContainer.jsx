import React, {useState, useEffect} from 'react';
import ItemCount from "../ItemCount/itemCount"
import ItemList from "../ItemList/itemList";
import Articulos from "../Articulos/Articulos";
import swal from "sweetalert";

const cds = [
  { id: 1, image: "../src/img/emilia-tu-crees-en-mi.png", title: "Emilia- Tu crees en mi" },
  { id: 2, image: "../src/img/Karina-sin-verguenza.png", title: "Karina- Sin verguenza" },
  { id: 3, image: "../src/img/Gardel-inigualable.png", title: "Gardel- Inigualable" },
  { id: 4, image: "../src/img/Leo-Mattioli-Esto...-Es-romantico.png", title: "Leo Mattioli- Esto... Es romantico" },
  { id: 5, image: "../src/img/Rodrigo-la-mano-de-dios.png", title: "Rodrigo- La mano de Dios" },
];

export const ItemListContainer = ({ texto }) => {
  const [data, setData] = useState ([]);

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(cds);
      }, 1000);
    });
    getData.then(res => setData(res));

  }, [])

  const onAdd = (quantity) => {
  swal({
    title: "Compra",
    text: `Compraste ${quantity} unidades`,
    icon: "success",
    button: "Aceptar",
  });
  }

  return (
    <>
    <Articulos greeting={texto} />
    <ItemCount initial={1} stock={10} onAdd={onAdd}  />
    <ItemList data={data} />
    </>
  );
}

export default ItemListContainer;