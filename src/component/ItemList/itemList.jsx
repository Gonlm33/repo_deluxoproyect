import Item from "../Item/item";
import React from 'react'

const itemList = ({data =[]}) => {
  return (
    data.map(cd => <Item key={cd.id} info={cd} />)
  );
}

export default itemList;