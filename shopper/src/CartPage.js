import React from 'react';
import Item from './Item';
import './CartPage.css';

function CartPage({ cart, items, addToCart, removeFromCart }) {
  const cartIds = Object.keys(cart);

  const formatCurrency = (amount) => {
    return (amount.toLocaleString('en-us', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }));
  };

  const renderTotalAmount = () => {
    const cartTotal = cartIds.reduce((total, key) => {
      const count = cart[key],
        item = items.find((item) => item.id === parseInt(key)),
        cost = item && item.price * count;
      return total + cost;
    }, 0);
    return (
      <div className="Item-title">
        Total:
        <strong>{formatCurrency(cartTotal)}</strong>
      </div>
    );
  };

  const renderCartItem = (key) => {
    const count = cart[key],
      item = items.find((item) => item.id === parseInt(key)),
      cost = item && item.price * count;

    return (
      <li key={key} className="CartPage-item">
        <Item item={item}>
          <div className="Item-price">{formatCurrency(cost)}</div>
          <div className="CartItem-controls">
            <button
              className="button CartItem-removeOne"
              onClick={() => removeFromCart(item)}
            >
              -
            </button>
            <span className="CartItem-count">{count}</span>
            <button
              className="button CartItem-addOne"
              onClick={() => addToCart(item)}
            >
              +
            </button>
          </div>
        </Item>
      </li>
    );
  };

  return (
    <>
      <ul className="CartPage-items">
        {cartIds.map((key) => renderCartItem(key))}
      </ul>
      {renderTotalAmount()}
    </>
  );
}

export default CartPage;
