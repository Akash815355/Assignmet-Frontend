
import React from 'react';
import './CartItem.css';

function CartItem({ product, onUpdateQuantity, onRemove }) {
    return (
        <li className="cart-item">
            <img src={product.image} alt={product.name} />
            <div className="cart-item-details">
                <h2>{product.name}</h2>
                <p>{product.price.toFixed(2)} USD</p>
                <div className="quantity-control">
                    <button onClick={() => onUpdateQuantity(product, product.quantity - 1)}>-</button>
                    <span>{product.quantity}</span>
                    <button onClick={() => onUpdateQuantity(product, product.quantity + 1)}>+</button>
                </div>
            </div>
            <button className="remove-item" onClick={() => onRemove(product)}>Remove</button>
        </li>
    );
}

export default CartItem;
