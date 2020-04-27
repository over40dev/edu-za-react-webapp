import React from 'react';

const Nav = ({ activeTab, tabChange }) => {
  const itemClass = (tabNum) =>
  `
  App-nav-item ${activeTab === tabNum ? 'selected' : ''}
  `;

  return (
    <nav className="App-nav">
      <ul>
        <li className={itemClass(0)}>
          <a onClick={() => tabChange(0)}>Items</a>
        </li>
        <li className={itemClass(1)}>
          <a onClick={() => tabChange(1)}>Cart</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
