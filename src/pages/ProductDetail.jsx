import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ShieldCheck, Truck, MapPin } from 'lucide-react';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/products')
            .then(res => res.json())
            .then(data => {
                const found = data.find(p => p.id === id);
                setProduct(found);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className="container">Cargando...</div>;
    if (!product) return <div className="container">Producto no encontrado</div>;

    return (
        <div className="container">
            <Link to="/" style={{ display: 'inline-block', marginBottom: '1rem', color: '#565959' }}>
                &larr; Volver a resultados
            </Link>

            <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
                {/* Image Section */}
                <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
                    <img
                        src={product.image}
                        alt={product.name}
                        style={{ maxWidth: '100%', maxHeight: '500px', objectFit: 'contain' }}
                        onError={(e) => { e.target.src = 'https://via.placeholder.com/400?text=No+Image'; }}
                    />
                </div>

                {/* Info Section */}
                <div style={{ flex: '1 1 400px' }}>
                    <h1 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{product.name}</h1>

                    <div style={{ color: '#007185', marginBottom: '1rem' }}>
                        Visita la tienda de {product.category}
                    </div>

                    <div style={{ borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd', padding: '1rem 0', marginBottom: '1rem' }}>
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#B12704' }}>
                            Bs {product.price}.00
                        </div>
                        <div style={{ color: '#565959', fontSize: '0.9rem' }}>
                            Precio final. Sin tasas de importación.
                        </div>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                            <Truck size={20} color="#565959" />
                            <span style={{ fontWeight: 'bold' }}>Delivery Incluido</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                            <MapPin size={20} color="#565959" />
                            <span>Envío vía <span style={{ fontWeight: 'bold', color: '#cc0c39' }}>YANGO</span></span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <ShieldCheck size={20} color="#565959" />
                            <span>Garantía de funcionamiento al entregar</span>
                        </div>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Sobre este artículo</h3>
                        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem' }}>
                            {product.features && product.features.map((feature, idx) => (
                                <li key={idx} style={{ marginBottom: '0.25rem' }}>{feature}</li>
                            ))}
                        </ul>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <p>{product.description}</p>
                    </div>

                    <button
                        onClick={() => navigate('/checkout')}
                        className="btn btn-primary"
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            fontSize: '1.1rem',
                            borderRadius: '20px'
                        }}
                    >
                        Comprar ahora
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
