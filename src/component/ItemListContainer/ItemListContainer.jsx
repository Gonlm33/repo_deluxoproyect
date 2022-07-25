import ItemCount from "../ItemCount/itemCount"
import React from 'react'
import Articulos from "../Articulos/Articulos";
import swal from "sweetalert";
function ItemListContainer() {

  const onAdd = (quantity) => {
  swal({
    title: "Compra",
    text: "Compraste ${quantity} unidades",
    icon: "success",
    button: "Aceptar",
  });
  }


  return (
    <>
    <Articulos greeting="Deluxo Disqueria Multiversal" />
    <ItemCount initial={1} stock={10} onAdd={onAdd}  />
    </>
  );
}

export default ItemListContainer;