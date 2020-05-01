import React from 'react';
import Nav from './Nav';
import ItemPage from './ItemPage';
import { items } from './static-data';
import './App.css';

class App extends React.Component {
  state = {
    activeTab: 0,
    items: [...items],
    cart: {},
  };

  tabChange = (index) => {
    this.setState({
      activeTab: index,
    });
  };

  addToCart = (item) => {
    // 1. take copy of initial state
    const cart = { ...this.state.cart };
    // 2. if item exists in cart then increase count by 1;
    //    otherwise add item and initialize count to 1
    cart[item.id] = cart[item.id] + 1 || 1;
    // 3. use React State API to update state
    this.setState({
      cart,
    });
  };

  removeFromCart = (item) => {
    // 1. take copy of initial state
    const cart = { ...this.state.cart };
    // 2. if item exists in cart then decrease count by 1;
    //    if count gets to 0 then remove from cart
    cart[item.id] = cart[item.id] - 1 || 0;
    if (cart[item.id] <= 0) {
      delete cart[item.id];
    }
    // 3. use React State API to update state
    this.setState({
      cart,
    });
  };

  renderCartPage() {
    // create an array of cart items including count
    // const cartItems = cartIds.map((itemId) => {
    //   const count = this.state.cart[itemId];
    //   const item = this.state.items.find(item => item.id === parseInt(itemId));
    //   return {
    //     ...item,
    //     count,
    //   }
    // });
  }

  renderContent() {
    // renderContent determines which page should be rendered based on the tab selected
    switch (this.state.activeTab) {
      default:
      case 0: // ItemPage
        return <ItemPage items={this.state.items} addToCart={this.addToCart} />;
      case 1: // CartPage
        return (
          <CartPage
            cart={this.state.cart}
            items={this.state.items}
            addToCart={this.addToCart}
            removeFromCart={this.removeFromCart}
          />
        );
    }
  }

  render() {
    return (
      <div className="App">
        <Nav activeTab={this.state.activeTab} tabChange={this.tabChange} />
        <main className="App-content">{this.renderContent()}</main>
      </div>
    );
  }
}

// const summarizeCart = (cart) => {
//   const groupedItems = cart.reduce((summary, item) => {
//     summary[item.id] = summary[item.id] || {
//       ...item,
//       count: 0,
//     };
//     summary[item.id].count++;
//     return summary;
//   }, {});

//   return Object.values(groupedItems);
// };

export default App;
