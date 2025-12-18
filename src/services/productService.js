// Initial Mock Data
const INITIAL_PRODUCTS = [
    // Uploaded / Specific Products
    {
        "id": "1",
        "name": "Redmi Note 8 (Cámara 48MP)",
        "price": 100,
        "category": "Celulares",
        "description": "Funciona todo bien, solo tiene desgaste de bolsillo en la tapa trasera. Batería dura todo el día.",
        "features": ["4GB RAM", "64GB Almacenamiento", "Huella digital", "Detalle estético atrás"],
        "image": "/images/productos/redmi_back.jpg"
    },
    {
        "id": "2",
        "name": "Samsung Galaxy S10 Lite",
        "price": 100,
        "category": "Celulares",
        "description": "Pantalla original, prende y funciona. Tiene una línea rosa en la pantalla pero el táctil está al 100%.",
        "features": ["Snapdragon 855", "128GB", "Carga rápida", "Línea en pantalla"],
        "image": "/images/productos/s10_lite.jpg"
    },
    {
        "id": "3",
        "name": "Celular Android (Pantalla trizada)",
        "price": 100,
        "category": "Celulares",
        "description": "El celular prende y se escuchan llamadas, pero el vidrio está roto. Para repuesto o cambiar vidrio.",
        "features": ["Android 10", "Doble SIM", "Para arreglar", "Vidrio roto"],
        "image": "/images/productos/cracked_screen.jpg"
    },
    {
        "id": "4",
        "name": "Samsung A10s (Demo)",
        "price": 100,
        "category": "Celulares",
        "description": "Equipo modo demo, solo funciona con WiFi. No levanta señal. Pantalla impecable, solo pequeño clisado en borde.",
        "features": ["Solo WiFi", "Doble Cámara", "Pantalla HD", "Sin señal"],
        "image": "/images/productos/s22_ultra_screen.jpg"
    },
    {
        "id": "5",
        "name": "Samsung J2 Core (3.2GB Libre)",
        "price": 100,
        "category": "Celulares",
        "description": "Funciona perfecto pero tiene poco espacio libre. Ideal para uso básico. Desgaste normal por uso.",
        "features": ["4G LTE", "Cámara 8MP", "Detalles de uso", "Batería nueva"],
        "image": "/images/productos/s21_storage.jpg"
    },
    // Filler Products (Phones)
    {
        "id": "6",
        "name": "iPhone 7 32GB (Sin Huella)",
        "price": 100,
        "category": "Celulares",
        "description": "Botón home duro, no lee huella. Lo demás funciona excelente. iCloud libre. Pequeños rasguños en pantalla.",
        "features": ["iOS 15", "Cámara 12MP", "Sin TouchID", "Libre"],
        "image": "/images/productos/celular1.jpg"
    },
    {
        "id": "7",
        "name": "Samsung J7 Prime",
        "price": 100,
        "category": "Celulares",
        "description": "Un clásico guerrero. Pantalla cambiada (genérica), brillo bajo. Funciona WhatsApp y Face. Carcasa gastada.",
        "features": ["3GB RAM", "Metal", "Pantalla genérica", "Doble Chip"],
        "image": "https://via.placeholder.com/400x400?text=Samsung+J7"
    },
    {
        "id": "8",
        "name": "Huawei P20 Lite (Tapa rota)",
        "price": 100,
        "category": "Celulares",
        "description": "Vidrio de atrás quebrado. Pantalla intacta. Cámara saca fotos borrosas. Ideal para reparar.",
        "features": ["4GB RAM", "Carga Tipo C", "Tapa rota", "Lector huella"],
        "image": "https://via.placeholder.com/400x400?text=Huawei+P20"
    },
    {
        "id": "9",
        "name": "Motorola G6 Play",
        "price": 100,
        "category": "Celulares",
        "description": "Pin de carga mañoso, hay que mover el cable. Batería dura bien. Estética 8/10.",
        "features": ["Batería 4000mAh", "Android 9", "Pin carga falso", "Funda incluida"],
        "image": "https://via.placeholder.com/400x400?text=Moto+G6"
    },
    {
        "id": "10",
        "name": "LG K40 (Solo Movil)",
        "price": 100,
        "category": "Celulares",
        "description": "Solo levanta señal Tigo. Pantalla con fantasmas (quemada) pero se ve. Desgaste en esquinas.",
        "features": ["Resistente", "Sonido DTS", "Pantalla fantasma", "Solo Tigo"],
        "image": "https://via.placeholder.com/400x400?text=LG+K40"
    },
    {
        "id": "11",
        "name": "Xiaomi Redmi 9A (Lento)",
        "price": 100,
        "category": "Celulares",
        "description": "Funciona pero es lento. Tiene la pantalla astillada en una esquina. Batería dura mucho.",
        "features": ["Batería 5000mAh", "Pantalla grande", "Astillado", "Caja original"],
        "image": "https://via.placeholder.com/400x400?text=Redmi+9A"
    },
    {
        "id": "12",
        "name": "Samsung A10s (Sin botones)",
        "price": 100,
        "category": "Celulares",
        "description": "Faltan los botones de volumen (se usan con uña). Prende y carga bien. Pantalla con rayas de uso.",
        "features": ["Doble Cámara", "Huella", "Faltan botones", "Económico"],
        "image": "https://via.placeholder.com/400x400?text=Samsung+A10s"
    },
    {
        "id": "13",
        "name": "Nokia 1100 (Colección)",
        "price": 100,
        "category": "Celulares",
        "description": "Para coleccionistas. Funciona, tiene linterna y viborita. Batería eterna. Teclado un poco borrado.",
        "features": ["Indestructible", "Linterna", "Juego Snake", "Original"],
        "image": "https://via.placeholder.com/400x400?text=Nokia+1100"
    },
    {
        "id": "14",
        "name": "Sony Xperia Z3 (Calienta)",
        "price": 100,
        "category": "Celulares",
        "description": "Se calienta si usas mucho la cámara. Tapa de puertos suelta. Pantalla sin rayones.",
        "features": ["Cámara 20MP", "Resistente agua (ya no)", "Calienta", "Audio Hi-Res"],
        "image": "https://via.placeholder.com/400x400?text=Sony+Xperia"
    },
    {
        "id": "15",
        "name": "iPhone 6 (Batería 70%)",
        "price": 100,
        "category": "Celulares",
        "description": "Batería dura poco. Ideal para repuestos o usar enchufado. Carcasa con golpes.",
        "features": ["iOS 12", "Pantalla bien", "Batería mala", "Cámara buena"],
        "image": "https://via.placeholder.com/400x400?text=iPhone+6"
    },
    // Other Categories
    {
        "id": "16",
        "name": "TV Sony 32\" (Sin control)",
        "price": 100,
        "category": "TV",
        "description": "Imagen excelente, pero perdí el control remoto. Se usa con los botones del costado. Pequeño rayón en base.",
        "features": ["LCD", "HDMI", "Sin control", "Marca Sony"],
        "image": "/images/productos/tv_sony.jpg"
    },
    {
        "id": "17",
        "name": "Monitor LG 19\" (VGA)",
        "price": 100,
        "category": "TV",
        "description": "Monitor antiguo entrada VGA. Funciona, tiene un pixel muerto. Plástico amarillento.",
        "features": ["VGA", "19 pulgadas", "Pixel muerto", "Cable incluido"],
        "image": "https://via.placeholder.com/400x400?text=Monitor+LG"
    },
    {
        "id": "18",
        "name": "Licuadora Oster (Vaso plástico)",
        "price": 100,
        "category": "Electrodomésticos",
        "description": "Motor fuerte, vaso de plástico un poco opaco por el uso. Funciona en todas las velocidades.",
        "features": ["Motor 400W", "Vaso plástico", "Usada", "Funciona"],
        "image": "/images/productos/licuadora.jpg"
    },
    {
        "id": "19",
        "name": "Audífonos Gamer (Cable pelado)",
        "price": 100,
        "category": "Otros",
        "description": "Suenan fortísimo, luces LED. El cable está pegado con cinta pero no afecta. Almohadillas gastadas.",
        "features": ["Luces LED", "Micrófono", "Cable reparado", "USB"],
        "image": "/images/productos/audifonos.jpg"
    },
    {
        "id": "20",
        "name": "Teclado Mecánico (Falta tecla)",
        "price": 100,
        "category": "Otros",
        "description": "Teclado mecánico luces RGB. Le falta la tecla 'Esc' pero el switch funciona. Necesita limpieza.",
        "features": ["Blue Switch", "RGB", "Falta tecla", "Ruidoso"],
        "image": "https://via.placeholder.com/400x400?text=Teclado"
    }
];

const STORAGE_KEY = 'tienda_products_v3';

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

export const uploadImage = async (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
};
