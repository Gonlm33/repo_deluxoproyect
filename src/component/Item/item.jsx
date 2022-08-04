import "./item.css";
import { Link } from 'react-router-dom';
import React from 'react';

const item = ({info}) => {
  return (
    <Link to={`/detalle/${info.id}`} className="cds">
        <img src={info.image} alt="" />
        <p>{info.title}</p>
    </Link>
  )
}

export default item
