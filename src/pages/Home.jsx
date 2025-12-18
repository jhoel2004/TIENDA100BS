import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../services/productService';
import './Home.css';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState('Todos');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate async fetch for consistency
        const data = getProducts();
        setProducts(data);
        setLoading(false);
    }, []);

    const categories = ['Todos', 'Celulares', 'Electrodomésticos', 'TV', 'Otros'];

    const filteredProducts = filter === 'Todos'
        ? products
        : products.filter(p => p.category === filter);

    if (loading) return <div className="container">Cargando productos...</div>;

    return (
        <div>
            {/* Banner */}
            <div className="home-banner">
                <h1>Todo a 100 Bs</h1>
                <p>La mejor calidad al mejor precio único.</p>
            </div>

            <div className="home-content">
                {/* Sidebar Filters */}
                <aside className="sidebar">
                    <h3>Categorías</h3>
                    <ul className="category-list">
                        {categories.map(cat => (
                            <li key={cat}>
                                <button
                                    onClick={() => setFilter(cat)}
                                    className={`category-btn ${filter === cat ? 'active' : ''}`}
                                    style={{
                                        fontWeight: filter === cat ? 'bold' : 'normal',
                                        color: filter === cat ? '#ff9900' : '#333',
                                    }}
                                >
                                    {cat}
                                </button>
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Product Grid */}
                <div className="product-section">
                    <h2>Resultados para "{filter}"</h2>
                    <div className="product-grid">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                        {filteredProducts.length === 0 && (
                            <p>No hay productos en esta categoría.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
