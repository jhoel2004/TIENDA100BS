import React, { useState, useEffect } from 'react';

const AdminDashboard = () => {
    const [products, setProducts] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        category: 'Celulares',
        description: '',
        features: '',
        image: null
    });
    const [loading, setLoading] = useState(false);

    const fetchProducts = () => {
        fetch('/api/products')
            .then(res => res.json())
            .then(setProducts);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({ ...prev, image: e.target.files[0] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // 1. Upload Image
            const imageFormData = new FormData();
            imageFormData.append('image', formData.image);

            const uploadRes = await fetch('/api/products/upload', {
                method: 'POST',
                body: imageFormData
            });

            if (!uploadRes.ok) throw new Error('Error subiendo imagen');
            const { imageUrl } = await uploadRes.json();

            // 2. Create Product
            const productData = {
                name: formData.name,
                category: formData.category,
                description: formData.description,
                features: formData.features.split(',').map(f => f.trim()), // Split by comma
                image: imageUrl
            };

            const createRes = await fetch('/api/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(productData)
            });

            if (!createRes.ok) throw new Error('Error creando producto');

            // Reset form and refresh list
            setFormData({
                name: '',
                category: 'Celulares',
                description: '',
                features: '',
                image: null
            });
            // Reset file input manually
            document.getElementById('fileInput').value = '';

            fetchProducts();
            alert('Producto agregado correctamente');

        } catch (error) {
            console.error(error);
            alert('Error: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('¿Estás seguro de eliminar este producto?')) return;

        try {
            await fetch(`/api/products/${id}`, { method: 'DELETE' });
            fetchProducts();
        } catch (error) {
            alert('Error eliminando producto');
        }
    };

    return (
        <div className="container">
            <h1 style={{ marginBottom: '2rem' }}>Panel de Administración</h1>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
                {/* Form */}
                <div className="card" style={{ padding: '1.5rem', height: 'fit-content' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Agregar Producto</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label">Nombre del Producto</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Categoría</label>
                            <select
                                name="category"
                                className="form-control"
                                value={formData.category}
                                onChange={handleInputChange}
                            >
                                <option value="Celulares">Celulares</option>
                                <option value="Electrodomésticos">Electrodomésticos</option>
                                <option value="TV">TV</option>
                                <option value="Otros">Otros</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Descripción</label>
                            <textarea
                                name="description"
                                className="form-control"
                                rows="3"
                                value={formData.description}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Características (separadas por coma)</label>
                            <input
                                type="text"
                                name="features"
                                className="form-control"
                                placeholder="Ej: 32GB, 2GB RAM, Cámara 8MP"
                                value={formData.features}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Imagen (Foto Real)</label>
                            <input
                                type="file"
                                id="fileInput"
                                className="form-control"
                                accept="image/*"
                                onChange={handleFileChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Precio</label>
                            <input
                                type="text"
                                className="form-control"
                                value="100 Bs"
                                disabled
                                style={{ backgroundColor: '#eee' }}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={loading}>
                            {loading ? 'Guardando...' : 'Agregar Producto'}
                        </button>
                    </form>
                </div>

                {/* List */}
                <div>
                    <h2 style={{ marginBottom: '1rem' }}>Inventario Actual</h2>
                    <div style={{ display: 'grid', gap: '1rem' }}>
                        {products.map(product => (
                            <div key={product.id} className="card" style={{ display: 'flex', padding: '1rem', alignItems: 'center', gap: '1rem' }}>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '4px' }}
                                    onError={(e) => { e.target.src = 'https://via.placeholder.com/80?text=No+Image'; }}
                                />
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ fontSize: '1.1rem' }}>{product.name}</h3>
                                    <span style={{
                                        display: 'inline-block',
                                        padding: '0.2rem 0.5rem',
                                        backgroundColor: '#eee',
                                        borderRadius: '4px',
                                        fontSize: '0.8rem',
                                        marginTop: '0.25rem'
                                    }}>
                                        {product.category}
                                    </span>
                                </div>
                                <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                                    100 Bs
                                </div>
                                <button
                                    onClick={() => handleDelete(product.id)}
                                    className="btn btn-danger"
                                >
                                    Eliminar
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
