import React, { useState } from 'react';
import { MapPin, CheckCircle, Loader, Phone, ShieldCheck, CreditCard } from 'lucide-react';

const Checkout = () => {
    const [step, setStep] = useState(1); // 1: Phone, 2: Location, 3: Payment/QR, 4: Success
    const [location, setLocation] = useState(null);
    const [loading, setLoading] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [manualAddress, setManualAddress] = useState('');
    const [showManualInput, setShowManualInput] = useState(false);

    const handlePhoneSubmit = (e) => {
        e.preventDefault();
        if (phoneNumber.length >= 8) {
            setStep(2);
        } else {
            alert("Por favor ingresa un número de teléfono válido.");
        }
    };

    const handleGetLocation = () => {
        setLoading(true);
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                    setLoading(false);
                    setStep(3); // Move to Payment
                },
                (error) => {
                    alert("No pudimos obtener tu ubicación automáticamente. Por favor ingrésala manualmente.");
                    setLoading(false);
                    setShowManualInput(true);
                }
            );
        } else {
            alert("Geolocalización no soportada. Por favor ingresa tu dirección manualmente.");
            setLoading(false);
            setShowManualInput(true);
        }
    };

    const handleManualSubmit = (e) => {
        e.preventDefault();
        if (manualAddress.trim().length > 5) {
            setStep(3);
        } else {
            alert("Por favor ingresa una dirección válida.");
        }
    };

    const handlePayment = () => {
        setLoading(true);
        // Simulate "Sending to Gemini"
        setTimeout(() => {
            setLoading(false);
            setStep(4);
        }, 3000);
    };

    return (
        <div className="container" style={{ maxWidth: '600px', marginTop: '2rem', paddingBottom: '2rem' }}>
            <div className="card" style={{ padding: '2rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#232f3e' }}>Finalizar Compra</h1>

                {/* Progress Steps */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', color: '#ccc', fontSize: '0.9rem' }}>
                    <div style={{ color: step >= 1 ? '#ff9900' : 'inherit', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: step >= 1 ? '#ff9900' : '#ccc', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>1</div>
                        <span>Teléfono</span>
                    </div>
                    <div style={{ color: step >= 2 ? '#ff9900' : 'inherit', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: step >= 2 ? '#ff9900' : '#ccc', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>2</div>
                        <span>Ubicación</span>
                    </div>
                    <div style={{ color: step >= 3 ? '#ff9900' : 'inherit', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: step >= 3 ? '#ff9900' : '#ccc', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>3</div>
                        <span>Pago</span>
                    </div>
                </div>

                {step === 1 && (
                    <div style={{ textAlign: 'center' }}>
                        <Phone size={48} color="#ff9900" style={{ marginBottom: '1rem' }} />
                        <h2 style={{ marginBottom: '1rem' }}>Contacto</h2>
                        <p style={{ marginBottom: '1.5rem', color: '#565959' }}>
                            Para coordinar la entrega, necesitamos tu número de celular.
                        </p>
                        <form onSubmit={handlePhoneSubmit}>
                            <div className="form-group">
                                <input
                                    type="tel"
                                    className="form-control"
                                    placeholder="Número de celular (ej. 77712345)"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    style={{ fontSize: '1.2rem', padding: '0.75rem', textAlign: 'center', letterSpacing: '1px' }}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%', fontSize: '1.1rem', padding: '0.75rem' }}>
                                Continuar
                            </button>
                        </form>
                    </div>
                )}

                {step === 2 && (
                    <div style={{ textAlign: 'center' }}>
                        <MapPin size={48} color="#ff9900" style={{ marginBottom: '1rem' }} />
                        <h2 style={{ marginBottom: '1rem' }}>Ubicación de Entrega</h2>

                        {!showManualInput ? (
                            <>
                                <p style={{ marginBottom: '1.5rem', color: '#565959' }}>
                                    Usamos <strong>YANGO</strong> para asegurar que tu pedido llegue rápido y seguro.
                                </p>
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <img src="/images/yango_logo.png" alt="Yango Delivery" style={{ height: '40px', objectFit: 'contain' }} />
                                </div>
                                <button
                                    className="btn btn-primary"
                                    onClick={handleGetLocation}
                                    style={{ width: '100%', fontSize: '1.1rem', padding: '0.75rem', marginBottom: '1rem' }}
                                    disabled={loading}
                                >
                                    {loading ? 'Obteniendo ubicación...' : 'Compartir mi ubicación actual'}
                                </button>
                                <button
                                    onClick={() => setShowManualInput(true)}
                                    style={{ background: 'none', border: 'none', color: '#007185', cursor: 'pointer', textDecoration: 'underline', fontSize: '0.9rem' }}
                                >
                                    ¿No funciona? Ingresar dirección manualmente
                                </button>
                            </>
                        ) : (
                            <form onSubmit={handleManualSubmit}>
                                <p style={{ marginBottom: '1rem', color: '#565959' }}>
                                    Escribe tu dirección detallada o pega un enlace de Google Maps.
                                </p>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    placeholder="Ej. Calle 123, Zona Sur, Casa #45 (o link de Maps)"
                                    value={manualAddress}
                                    onChange={(e) => setManualAddress(e.target.value)}
                                    style={{ marginBottom: '1rem', width: '100%', resize: 'none' }}
                                    required
                                />
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    style={{ width: '100%', fontSize: '1.1rem', padding: '0.75rem', marginBottom: '1rem' }}
                                >
                                    Confirmar Dirección
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setShowManualInput(false)}
                                    style={{ background: 'none', border: 'none', color: '#007185', cursor: 'pointer', textDecoration: 'underline', fontSize: '0.9rem' }}
                                >
                                    Intentar usar GPS
                                </button>
                            </form>
                        )}
                    </div>
                )}

                {step === 3 && (
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                            <ShieldCheck size={24} color="#007600" />
                            <span style={{ color: '#007600', fontWeight: 'bold' }}>Pago Seguro</span>
                        </div>

                        <h2 style={{ marginBottom: '0.5rem' }}>Escanea el QR</h2>
                        <p style={{ color: '#565959', marginBottom: '1.5rem' }}>Realiza el pago para confirmar tu pedido.</p>

                        <div style={{
                            background: '#f8f9fa',
                            padding: '1.5rem',
                            borderRadius: '12px',
                            display: 'inline-block',
                            boxShadow: 'inset 0 0 10px rgba(0,0,0,0.05)',
                            marginBottom: '1.5rem',
                            border: '1px solid #eee'
                        }}>
                            <img
                                src="/qr.jpg"
                                alt="QR de Pago"
                                style={{ width: '220px', height: '220px', display: 'block' }}
                                onError={(e) => { e.target.src = 'https://via.placeholder.com/220?text=QR+CODE'; }}
                            />
                            <div style={{ marginTop: '1rem', fontWeight: 'bold', fontSize: '1.2rem', color: '#333' }}>
                                Total: 100.00 Bs
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '2rem', padding: '1rem', background: '#fff3cd', borderRadius: '8px' }}>
                            <img src="/images/yango_logo.png" alt="Yango" style={{ height: '30px' }} />
                            <span style={{ fontSize: '0.9rem', color: '#856404' }}>Entrega gestionada por Yango</span>
                        </div>

                        {loading ? (
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                                <Loader className="spin" size={32} color="#ff9900" />
                                <p>Verificando pago...</p>
                            </div>
                        ) : (
                            <button
                                className="btn btn-primary"
                                onClick={handlePayment}
                                style={{ width: '100%', fontSize: '1.1rem', padding: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                            >
                                <CheckCircle size={20} />
                                Confirmar Pago Realizado
                            </button>
                        )}
                    </div>
                )}

                {step === 4 && (
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <CheckCircle size={80} color="#007600" />
                        </div>
                        <h2 style={{ color: '#007600', marginBottom: '1rem', fontSize: '2rem' }}>¡Pago Exitoso!</h2>
                        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                            Tu pedido ha sido confirmado y está siendo procesado.
                        </p>

                        <div style={{ background: '#f0fdf4', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem', border: '1px solid #bbf7d0' }}>
                            <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#166534' }}>Detalles de Entrega</h3>
                            <p style={{ marginBottom: '0.5rem' }}><strong>Teléfono:</strong> {phoneNumber}</p>
                            {location ? (
                                <p style={{ fontSize: '0.9rem', color: '#565959' }}>
                                    <strong>Ubicación:</strong> {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
                                </p>
                            ) : manualAddress ? (
                                <p style={{ fontSize: '0.9rem', color: '#565959' }}>
                                    <strong>Dirección:</strong> {manualAddress}
                                </p>
                            ) : null}
                            <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                <span style={{ fontSize: '0.9rem', color: '#166534' }}>Enviado con</span>
                                <img src="/images/yango_logo.png" alt="Yango" style={{ height: '20px' }} />
                            </div>
                        </div>

                        <button
                            className="btn btn-secondary"
                            onClick={() => window.location.href = '/'}
                            style={{ width: '100%', padding: '0.75rem' }}
                        >
                            Volver a la tienda
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Checkout;
