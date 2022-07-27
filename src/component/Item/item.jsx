import "./item.css";

import React from 'react';

const item = ({info}) => {
  return (
    <a href="" className="cds">
        <img src={info.image} alt="" />
        <p>{info.title}</p>
    </a>
  )
}

export default item
