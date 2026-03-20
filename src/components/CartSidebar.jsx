import React from 'react';
import '../styles/CartSidebar.css';

function CartSidebar({ isOpen, onClose, cart, onUpdateQuantity, onRemoveItem }) {

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
      
      {/* Header */}
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button onClick={onClose} className="close-btn">✕</button>
      </div>

      {/* Items */}
      <div className="cart-items">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map(item => (
            <div key={item.id} className="cart-item">

              <img src={item.image} alt={item.name} width="60" />

              <div>
                <h4>{item.name}</h4>
                <p>${item.price}</p>
              </div>

              <div>
                <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>−</button>
                <span>{item.quantity}</span>
                <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>

              <button onClick={() => onRemoveItem(item.id)}>X</button>

            </div>
          ))
        )}
      </div>

      {/* Footer */}
      {cart.length > 0 && (
        <div className="cart-footer">
          <h3>Total: ${calculateTotal().toFixed(2)}</h3>
        </div>
      )}

    </div>
  );
}

export default CartSidebar;