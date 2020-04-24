import React from 'react';
import Item from './Item';
import './ItemPage.css';

function ItemPage({ items }) {
  return (
    <ul className="ItemPage-items ">
      {items.map((item) => (
        <li key={item.id}>
          <Item item={item} />
        </li>
      ))}
    </ul>
  );
}

export default ItemPage;
