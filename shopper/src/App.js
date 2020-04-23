import React, { useState } from 'react';
import Nav from './Nav';
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
      return <span>the Items</span>;
    case 'cart':
      return <span>the Cart</span>;
    default:
      return <span>No Content</span>;
  }
};

export default App;
