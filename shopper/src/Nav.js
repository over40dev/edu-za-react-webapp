import React from 'react';

const Nav = ({ activeTab, onTabChange }) => {
  const itemClass = (tabName) =>
  `
  App-nav-item ${activeTab === tabName ? 'selected' : ''}
  `;

  return (
    <nav className="App-nav">
      <ul>
        <li className={itemClass('items')}>
          <a onClick={() => onTabChange('items')}>Items</a>
        </li>
        <li className={itemClass('cart')}>
          <a onClick={() => onTabChange('cart')}>Cart</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
