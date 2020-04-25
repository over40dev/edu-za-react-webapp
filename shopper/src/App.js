import React, { useState } from 'react';
import Nav from './Nav';
import ItemPage from './ItemPage';
import CartPage from './CartPage';
import { items } from './static-data';
import './App.css';

class App extends React.Component {

  state = {
    activeTab: 0,
    cart: [],
  }

  handleTabChange = (index) => {
    this.setState({
      activeTab: index,
    });
  }
  
  handleAddToCart = (item) => {
    this.setState({
      cart: [...this.state.cart, item.id],
    });
  }
  
  handleRemoveOne = (item) => {
    const index = this.state.cart.indexOf(item.id);
    this.setState({
      ...this.state.cart.slice(0, index),
      ...this.state.cart.slice(index + 1),
    });
  }
  
  render() {
    <div className="App">
    <Nav activeTab={activeTab} onTabChange={this.handleTabChange} />
    <main className="App-content">
      <span>
        <Content tab={activeTab} onAddToCart={this.handleAddToCart} />
      </span>
    </main>
  </div>
  }
}

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
