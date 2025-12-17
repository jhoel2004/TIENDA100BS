import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../services/productService';

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
            <div style={{
                background: 'linear-gradient(to right, #232f3e, #37475a)',
                color: 'white',
                padding: '2rem',
                borderRadius: '8px',
                marginBottom: '2rem',
                textAlign: 'center'
            }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Todo a 100 Bs</h1>
                <p style={{ fontSize: '1.2rem' }}>La mejor calidad al mejor precio único.</p>
            </div>

            <div style={{ display: 'flex', gap: '2rem' }}>
                {/* Sidebar Filters */}
                <aside style={{ width: '250px', flexShrink: 0 }}>
                    <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Categorías</h3>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {categories.map(cat => (
                            <li key={cat}>
                                <button
                                    onClick={() => setFilter(cat)}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        fontWeight: filter === cat ? 'bold' : 'normal',
                                        color: filter === cat ? '#ff9900' : '#333',
                                        textAlign: 'left',
                                        padding: 0,
                                        fontSize: '1rem'
                                    }}
                                >
                                    {cat}
                                </button>
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Product Grid */}
                <div style={{ flex: 1 }}>
                    <h2 style={{ marginBottom: '1rem' }}>Resultados para "{filter}"</h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                        gap: '1.5rem'
                    }}>
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
