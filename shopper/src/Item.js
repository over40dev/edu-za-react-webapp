import React from 'react';
import './Item.css';

const Item = ({ item }) => (
  <div className="Item">
    <div className="Item-left">
      <div className="Item-title">{item.name}</div>
      <div className="Item-description">{item.description}</div>
    </div>
    <div className="Item-right">
      <div className="Item-price">${item.price}</div>
      <button className="Item-addToCart">Add to Cart</button>
    </div>
  </div>
);

export default Item;
