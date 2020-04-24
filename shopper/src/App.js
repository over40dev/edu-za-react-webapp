import React, { useState } from 'react';
import Nav from './Nav';
import ItemPage from './ItemPage';
import CartPage from './CartPage';
import { items } from './static-data';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('items');
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const prevCart = [...cart];
    setCart([...prevCart, item]);
  };

  return (
    <div className="App">
      <Nav activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="App-content">
        <span>
          <Content tab={activeTab} handleAddToCart={addToCart} />
        </span>
      </main>
    </div>
  );
};

const Content = ({ tab, handleAddToCart }) => {
  switch (tab) {
    case 'items':
      return (
        <>
          <h2>Items</h2>
          <ItemPage items={items} onAddToCart={handleAddToCart} />
        </>
      );
    case 'cart':
      return (
        <>
          <h2>Cart</h2>
          {/* <CartPage items={cart} /> */}
        </>
      );
    default:
      return <h2>No Content</h2>;
  }
};

const summarizeCart = () => {
  const groupedItems = cart.reduce((summary, item) => {
    summary[item.id] = summary[item.id] || {
      ...item,
      count: 0
    };
    summary[item.id].count++;
    return summary;
  }, {});

  return Object.values(groupedItems);

}

export default App;
