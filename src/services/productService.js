// Initial Mock Data
const INITIAL_PRODUCTS = [
    {
        "id": "1",
        "name": "Samsung Galaxy A03 Core",
        "price": 100,
        "category": "Celulares",
        "description": "Celular básico funcional, pantalla intacta. Ideal para uso diario o segundo teléfono.",
        "features": ["32GB Almacenamiento", "2GB RAM", "Cámara 8MP", "Batería 5000mAh"],
        "image": "/images/productos/celular1.jpg"
    },
    {
        "id": "2",
        "name": "Licuadora Oster Clásica",
        "price": 100,
        "category": "Electrodomésticos",
        "description": "Licuadora resistente, motor potente. Usada pero en perfecto estado de funcionamiento.",
        "features": ["3 Velocidades", "Vaso de vidrio", "Cuchilla de acero", "Motor 600W"],
        "image": "/images/productos/licuadora.jpg"
    },
    {
        "id": "3",
        "name": "TV Sony 32 Pulgadas (Antigua)",
        "price": 100,
        "category": "TV",
        "description": "Televisor LCD Sony Bravia. No es Smart, pero tiene excelente imagen y sonido.",
        "features": ["LCD 32\"", "Entrada HDMI", "Control remoto original", "Salida de audio"],
        "image": "/images/productos/tv_sony.jpg"
    },
    {
        "id": "4",
        "name": "Audífonos Bluetooth JBL",
        "price": 100,
        "category": "Otros",
        "description": "Audífonos inalámbricos con buena cancelación de ruido. Poco uso.",
        "features": ["Bluetooth 5.0", "Batería 20h", "Micrófono integrado", "Graves potentes"],
        "image": "/images/productos/audifonos.jpg"
    }
];

const STORAGE_KEY = 'tienda_products';

export const getProducts = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_PRODUCTS));
        return INITIAL_PRODUCTS;
    }
    return JSON.parse(stored);
};

export const getProductById = (id) => {
    const products = getProducts();
    return products.find(p => p.id === id);
};

export const createProduct = (product) => {
    const products = getProducts();
    const newProduct = {
        ...product,
        id: Date.now().toString(),
        price: 100
    };
    products.push(newProduct);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    return newProduct;
};

export const deleteProduct = (id) => {
    const products = getProducts();
    const filtered = products.filter(p => p.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
};

// Mock image upload (since we can't upload to server in static site)
// We will use a placeholder or the uploaded file as a Data URL (base64)
export const uploadImage = async (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
};
