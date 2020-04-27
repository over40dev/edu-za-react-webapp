import React from 'react';
import Nav from './Nav';
// import ItemPage from './ItemPage';
// import CartPage from './CartPage';
// import { items } from './static-data';
import './App.css';

class App extends React.Component {
  state = {
    activeTab: 0,
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

  render() {
    return (
      <div className="App">
        <Nav activeTab={this.state.activeTab} tabChange={this.tabChange} />
        <main className="App-content">
          <span>render Content here!</span>
        </main>
      </div>
    );
  }
}

// const Content = ({ tab, addToCart }) => {
//   switch (tab) {
//     case 0:
//       return (
//         <>
//           <h2>Items</h2>
//           <ItemPage items={items} addToCart={addToCart} />
//         </>
//       );
//     case 1:
//       return (
//         <>
//           <h2>Cart</h2>
//         </>
//       );
//     default:
//       return <h2>No Content</h2>;
//   }
// };

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
