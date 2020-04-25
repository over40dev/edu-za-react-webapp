import React, { useState } from 'react';
import Nav from './Nav';
import ItemPage from './ItemPage';
import { items } from './static-data';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('items');

  return (
    <div className="App">
      <Nav activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="App-content">
        <span>
          <Content tab={activeTab} />
        </span>
      </main>
    </div>
  );
};

const Content = ({ tab }) => {
  switch (tab) {
    case 'items':
      return (
        <>
          <h2>the Items</h2>
          <ItemPage items={items} />
        </>
      );
    case 'cart':
      return <h2>the Cart</h2>;
    default:
      return <h2>No Content</h2>;
  }
};

export default App;
