import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    return (
        <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
            {/* Image Container */}
            <div style={{
                height: '200px',
                backgroundColor: '#f7f7f7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                padding: '1rem',
                cursor: 'pointer'
            }} onClick={() => navigate(`/product/${product.id}`)}>
                <img
                    src={product.image}
                    alt={product.name}
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/200?text=No+Image'; }}
                />
            </div>

            {/* Content Container */}
            <div style={{ padding: '1rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Title */}
                <Link to={`/product/${product.id}`} style={{
                    fontSize: '1rem',
                    fontWeight: 500,
                    marginBottom: '0.5rem',
                    color: '#0f1111',
                    textDecoration: 'none',
                    lineHeight: '1.4em',
                    height: '2.8em',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: '2',
                    WebkitBoxOrient: 'vertical'
                }}>
                    {product.name}
                </Link>

                {/* Rating */}
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#ffa41c', fontSize: '0.9rem' }}>★★★★☆</span>
                    <span style={{ fontSize: '0.8rem', color: '#007185', marginLeft: '0.5rem' }}>12</span>
                </div>

                {/* Price */}
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '0.8rem', marginTop: '0.3em' }}>Bs</span>
                    <span>{product.price}</span>
                    <span style={{ fontSize: '0.8rem', marginTop: '0.3em' }}>00</span>
                </div>

                {/* Delivery Info */}
                <div style={{ fontSize: '0.9rem', color: '#565959', marginBottom: '0.5rem' }}>
                    Entrega GRATIS mañana
                </div>

                {/* Description / Warning */}
                {product.description && (
                    <div style={{ fontSize: '0.8rem', color: '#cc0c39', fontStyle: 'italic', marginBottom: '1rem' }}>
                        ⚠ {product.description.substring(0, 45)}...
                    </div>
                )}

                {/* Button */}
                <button
                    onClick={() => navigate(`/product/${product.id}`)}
                    style={{
                        marginTop: 'auto',
                        backgroundColor: '#ffd814',
                        border: 'none',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        cursor: 'pointer',
                        width: '100%',
                        fontWeight: 'bold',
                        fontSize: '0.9rem'
                    }}
                >
                    Ver detalles
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
