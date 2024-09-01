
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProductListing from "./pages/ProductListing";
import Cart from "./pages/Cart";
import ThankYou from './pages/ThankYou';
import "./App.css";



function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('/products.json')
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error('Error fetching products:', error));
}, []);

  const addToCart = (product) => {
    const productInCart = cart.find((item) => item.id === product.id);
    if (productInCart) {
      productInCart.quantity += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (product, quantity) => {
    if (quantity <= 0) {
      removeFromCart(product);
    } else {
      const productInCart = cart.find((item) => item.id === product.id);
      if (productInCart) {
        productInCart.quantity = quantity;
        setCart([...cart]);
      }
    }
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Products</Link>
          <Link to="/cart">Cart ({cart.length})</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <ProductListing products={products} onAddToCart={addToCart} />
            }
          />
          <Route
            path="cart"
            element={
              <Cart
                cart={cart}
                onUpdateQuantity={updateQuantity}
                onRemove={removeFromCart}
              />
            }
          />
          <Route path="thank-you" element={<ThankYou/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
