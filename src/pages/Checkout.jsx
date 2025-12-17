import React, { useState } from 'react';
import { MapPin, CheckCircle, Loader } from 'lucide-react';

const Checkout = () => {
    const [step, setStep] = useState(1); // 1: Confirm, 2: Location, 3: Payment/QR, 4: Success
    const [location, setLocation] = useState(null);
    const [loading, setLoading] = useState(false);

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
                    alert("Error obteniendo ubicación: " + error.message);
                    setLoading(false);
                    // Allow proceed anyway for demo purposes
                    setStep(3);
                }
            );
        } else {
            alert("Geolocalización no soportada");
            setLoading(false);
            setStep(3);
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
        <div className="container" style={{ maxWidth: '600px', marginTop: '2rem' }}>
            <div className="card" style={{ padding: '2rem' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Finalizar Compra</h1>

                {/* Progress Steps */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', color: '#ccc' }}>
                    <div style={{ color: step >= 1 ? '#ff9900' : 'inherit', fontWeight: 'bold' }}>1. Confirmar</div>
                    <div style={{ color: step >= 2 ? '#ff9900' : 'inherit', fontWeight: 'bold' }}>2. Ubicación</div>
                    <div style={{ color: step >= 3 ? '#ff9900' : 'inherit', fontWeight: 'bold' }}>3. Pago QR</div>
                </div>

                {step === 1 && (
                    <div style={{ textAlign: 'center' }}>
                        <p style={{ marginBottom: '1.5rem' }}>Estás a punto de comprar un producto por <strong>100 Bs</strong>.</p>
                        <button className="btn btn-primary" onClick={() => setStep(2)} style={{ width: '100%' }}>
                            Continuar
                        </button>
                    </div>
                )}

                {step === 2 && (
                    <div style={{ textAlign: 'center' }}>
                        <MapPin size={48} color="#ff9900" style={{ marginBottom: '1rem' }} />
                        <h2 style={{ marginBottom: '1rem' }}>Necesitamos tu ubicación</h2>
                        <p style={{ marginBottom: '1.5rem', color: '#565959' }}>
                            Para asegurar la entrega correcta con YANGO, por favor comparte tu ubicación actual.
                        </p>
                        <button
                            className="btn btn-primary"
                            onClick={handleGetLocation}
                            style={{ width: '100%' }}
                            disabled={loading}
                        >
                            {loading ? 'Obteniendo ubicación...' : 'Compartir Ubicación'}
                        </button>
                    </div>
                )}

                {step === 3 && (
                    <div style={{ textAlign: 'center' }}>
                        <h2 style={{ marginBottom: '1rem' }}>Escanea el QR para pagar</h2>
                        <div style={{
                            border: '2px dashed #ccc',
                            padding: '1rem',
                            borderRadius: '8px',
                            marginBottom: '1.5rem',
                            display: 'inline-block'
                        }}>
                            <img
                                src="/qr.jpg"
                                alt="QR de Pago"
                                style={{ width: '250px', height: '250px' }}
                                onError={(e) => { e.target.src = 'https://via.placeholder.com/250?text=QR+CODE'; }}
                            />
                        </div>
                        <p style={{ marginBottom: '1.5rem', fontSize: '0.9rem', color: '#565959' }}>
                            Monto a pagar: <strong>100.00 Bs</strong>
                        </p>

                        {loading ? (
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                                <Loader className="spin" size={32} color="#ff9900" />
                                <p>Enviando comprobante a Gemini...</p>
                            </div>
                        ) : (
                            <button
                                className="btn btn-primary"
                                onClick={handlePayment}
                                style={{ width: '100%' }}
                            >
                                He realizado el pago
                            </button>
                        )}
                    </div>
                )}

                {step === 4 && (
                    <div style={{ textAlign: 'center' }}>
                        <CheckCircle size={64} color="#007600" style={{ marginBottom: '1rem' }} />
                        <h2 style={{ color: '#007600', marginBottom: '1rem' }}>¡Pago Exitoso!</h2>
                        <p style={{ marginBottom: '1rem' }}>
                            Tu pedido ha sido confirmado.
                        </p>
                        {location && (
                            <p style={{ fontSize: '0.9rem', color: '#565959', marginBottom: '2rem' }}>
                                Ubicación de entrega: {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
                            </p>
                        )}
                        <button
                            className="btn btn-secondary"
                            onClick={() => window.location.href = '/'}
                            style={{ width: '100%' }}
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
