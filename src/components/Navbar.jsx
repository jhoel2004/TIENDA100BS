import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, Search, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useAuth();

    return (
        <nav style={{ backgroundColor: '#131921', color: 'white', padding: '0.5rem 0' }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                {/* Logo */}
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <img
                        src="/images/logo/logo.jpg"
                        alt="Tienda 100Bs"
                        style={{ height: '50px', objectFit: 'contain' }}
                    />
                </Link>

                {/* Search Bar (Visual only) */}
                <div style={{ flex: 1, margin: '0 2rem', display: 'flex' }}>
                    <input
                        type="text"
                        placeholder="Buscar productos..."
                        style={{
                            width: '100%',
                            padding: '0.5rem',
                            borderRadius: '4px 0 0 4px',
                            border: 'none',
                            outline: 'none'
                        }}
                    />
                    <button style={{
                        backgroundColor: '#ff9900',
                        border: 'none',
                        padding: '0.5rem 1rem',
                        borderRadius: '0 4px 4px 0',
                        cursor: 'pointer'
                    }}>
                        <Search size={20} color="#131921" />
                    </button>
                </div>

                {/* Links */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    {user ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <Link to="/admin" style={{ fontSize: '0.9rem' }}>
                                <div>Hola, Admin</div>
                                <div style={{ fontWeight: 'bold' }}>Panel</div>
                            </Link>
                            <button
                                onClick={logout}
                                style={{
                                    background: 'none',
                                    border: '1px solid #fff',
                                    color: '#fff',
                                    padding: '0.2rem 0.5rem',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    fontSize: '0.8rem'
                                }}
                            >
                                Salir
                            </button>
                        </div>
                    ) : (
                        <Link to="/login" style={{ fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <User size={20} />
                            <div>
                                <div>Hola, identifícate</div>
                                <div style={{ fontWeight: 'bold' }}>Cuenta</div>
                            </div>
                        </Link>
                    )}

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                        <ShoppingCart size={28} />
                        <span style={{ fontWeight: 'bold', color: '#ff9900' }}>0</span>
                    </div>
                </div>
            </div>

            {/* Sub-nav for categories */}
            <div style={{ backgroundColor: '#232f3e', padding: '0.5rem 0', fontSize: '0.9rem' }}>
                <div className="container" style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: 'bold' }}>
                        <Menu size={18} /> Todo
                    </div>
                    <span>Celulares</span>
                    <span>Electrodomésticos</span>
                    <span>TV</span>
                    <span>Ofertas del Día</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
