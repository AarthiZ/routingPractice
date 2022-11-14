import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <div>
            <section>
                <ul>
                    <li><Link to="/products/p1">Car</Link></li>
                    <li><Link to="/products/p2">Book</Link></li>
                    <li><Link to="/products/p3">Bike</Link></li>
                </ul>
            </section>
        </div>
    )
}
export default Products;
