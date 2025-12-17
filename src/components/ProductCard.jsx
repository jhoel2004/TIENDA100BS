import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{
                height: '200px',
                backgroundColor: '#f7f7f7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
            }}>
                <img
                    src={product.image}
                    alt={product.name}
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/200?text=No+Image'; }}
                />
            </div>
            <div style={{ padding: '1rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Link to={`/product/${product.id}`} style={{ fontSize: '1rem', fontWeight: 500, marginBottom: '0.5rem', color: '#007185' }}>
                    {product.name}
                </Link>

                {/* Rating stars (fake) */}
                <div style={{ color: '#ffa41c', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                    ★★★★☆ <span style={{ color: '#007185', marginLeft: '0.25rem' }}>120</span>
                </div>

                <div style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.8rem', position: 'relative', top: '-0.3em' }}>Bs</span>
                    {product.price}
                    <span style={{ fontSize: '0.8rem' }}>.00</span>
                </div>

                <div style={{ fontSize: '0.85rem', color: '#565959', marginBottom: '1rem' }}>
                    Entrega GRATIS por <span style={{ fontWeight: 'bold', color: '#333' }}>Tienda100Bs</span>
                </div>

                <div style={{ marginTop: 'auto' }}>
                    <Link to={`/product/${product.id}`} className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                        Ver Detalles
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
