import React from 'react';
import Item from './Item';
import './ItemPage.css';

function ItemPage({ items, onAddToCart }) {
  return (
    <ul className="ItemPage-items ">
      {items.map((item) => (
        <li key={item.id}>
          <Item item={item} addToCart={onAddToCart}>
            <button 
              className="Item-addToCart"
              onClick={() => onAddToCart(item)}>
              Add To Cart
            </button>
          </Item>
        </li>
      ))}
    </ul>
  );
}

export default ItemPage;
