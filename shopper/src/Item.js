import React from 'react';
import './Item.css';

const Item = ({ item, children }) => (
  <div className="Item">
    <div className="Item-left">
      <div className="Item-title">{item.name}</div>
      <div className="Item-description">{item.description}</div>
    </div>
    <div className="Item-right">
      { children }
    </div>
  </div>
);

export default Item;
