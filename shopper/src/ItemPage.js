import React from 'react';
import Item from './Item';
import './ItemPage.css';

function ItemPage({ items, addToCart }) {
  const formatCurrency = (amount) => {
    return (amount.toLocaleString('en-us', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }));
  }

  return (
    <ul className="ItemPage-items ">
      {items.map((item) => (
        <li key={item.id}>
          <Item item={item}>
            <div className="Item-price">{formatCurrency(item.price)}</div>
            <button className="Item-addToCart" onClick={() => addToCart(item)}>
              Add To Cart
            </button>
          </Item>
        </li>
      ))}
    </ul>
  );
}

export default ItemPage;
