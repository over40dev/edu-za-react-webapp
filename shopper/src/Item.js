import React from 'react';
import './Item.css';

const Item = ({ item, addToCart }) => (
  <div className="Item">
    <div className="Item-left">
      <div className="Item-title">{item.name}</div>
      <div className="Item-description">{item.description}</div>
    </div>
    <div className="Item-right">
      <div className="Item-price">${item.price}</div>
      <button className="Item-addToCart" onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  </div>
);

export default Item;
