
import React from 'react';
import { Link } from 'react-router-dom';
import './ThankYou.css';

function ThankYou() {
    return (
        <div className="thank-you-container">
            <div className="thank-you-card">
                <h1>Thank You for Your Purchase!</h1>
                <p>Your order has been placed successfully. We appreciate your business!</p>
                <p>We hope to see you again soon.</p>
                <Link to="/" className="back-to-home">
                    Back to Home
                </Link>
            </div>
        </div>
    );
}

export default ThankYou;
