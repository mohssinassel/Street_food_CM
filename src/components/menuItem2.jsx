import React from "react";
import '../styles/menuItem2.css';

const MenuItem2 = ({ id,image,name, price ,cate}) =>{
   
  return (
    <div className="menuItem2">
        <div className="img_cont_menu">
        <div style={{ backgroundImage: `url(${image})`}} className="img_menu"></div>
        <h3> {name} </h3>
        </div>
        <p> {price} DH</p>
        <p>{cate}</p>
    </div>
  );
}

export default MenuItem2;
