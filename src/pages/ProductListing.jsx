
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import './ProductListing.css';

function ProductListing({ products, onAddToCart }) {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9; 

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(products.length / productsPerPage);

    const handleClick = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="product-listing">
            <h1>Product Listing</h1>
            <div className="product-grid">
                {currentProducts.map(product => (
                    <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                ))}
            </div>
            <div className="pagination">
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handleClick(index + 1)}
                        className={currentPage === index + 1 ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default ProductListing;
