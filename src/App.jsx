import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import AdminDashboard from './admin/AdminDashboard';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import RequireAuth from './components/RequireAuth';

function App() {
    return (
        <AuthProvider>
            <Router>
                <div className="app-container">
                    <Navbar />
                    <main className="container" style={{ padding: '2rem 0' }}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/product/:id" element={<ProductDetail />} />
                            <Route path="/login" element={<Login />} />
                            <Route
                                path="/admin"
                                element={
                                    <RequireAuth>
                                        <AdminDashboard />
                                    </RequireAuth>
                                }
                            />
                            <Route path="/checkout" element={<Checkout />} />
                        </Routes>
                    </main>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
