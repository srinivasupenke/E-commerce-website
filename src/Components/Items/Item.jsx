import React from "react";
import "./Item.css";

const Item = (props) => (
  <div className="item">
    <img src={props.image} alt={props.name} />
    <p>{props.name}</p>
    <div className="item-price-details">
      <div className="item-new-price-details">${props.new_price}</div>
      <div className="item-old-price-details">${props.old_price}</div>
    </div>
  </div>
);

export default Item;
