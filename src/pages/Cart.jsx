// src/pages/Cart.js
import React from 'react';
import CartItem from '../components/CartItem';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

function Cart({ cart, onUpdateQuantity, onRemove }) {
    const navigate = useNavigate();
    const calculateSubtotal = () => {
        return cart.reduce((sum, product) => sum + product.price * product.quantity, 0).toFixed(2);
    };

    const handleCheckout = () => {
       
        navigate('/thank-you');
    };

    return (
        <div className="cart">
            <h1>Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    <ul>
                        {cart.map((product, index) => (
                            <CartItem key={index} product={product} onUpdateQuantity={onUpdateQuantity} onRemove={onRemove} />
                        ))}
                    </ul>
                    <div className="cart-summary">
                        <h3>Subtotal: {calculateSubtotal()} USD</h3>
                        <button className="checkout-button" onClick={handleCheckout}>
                    Checkout
                </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
