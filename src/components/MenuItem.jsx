import React from "react";
import '../styles/menuItem.css';

const MenuItem = ({ id,image,name, price }) =>{
   
  return (
    <div className="menuItem">
        <div style={{ backgroundImage: `url(${image})`}}> </div>
        <h3> {name} </h3>
        <p> {price} DH</p>
    </div>
  );
}

export default MenuItem;
