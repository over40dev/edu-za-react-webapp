import React from 'react';
import Item from './Item';
import './CartPage.css';

function CartPage({ items }) {
  return (
    <ul className="CartPage-items">
      {items.map((item) => (
        <li key={item.id} className="CartPage-item">
          <Item item={item}>
            <p>
              whatever is in between the Item tags gets passed 
              as a prop called children to the Item component
            </p>
          </Item>
        </li>
      ))}
    </ul>
  );
}

export default CartPage;
