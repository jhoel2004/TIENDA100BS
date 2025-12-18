// Initial Mock Data
const INITIAL_PRODUCTS = [
    {
        "name": "XIAOMI REDMI 9",
        "category": "Celulares",
        "description": "no tiene nungun detalle, solo degaste de volcillo\nquierpo venderla ya nomas por temas de salud",
        "features": [
            "ram 4 GB",
            "memoria",
            "64 GB",
            "48 MP"
        ],
        "image": "/images/uploads/product_1766016032258_1766019921543.jpg",
        "id": "1766016032258",
        "price": 100
    },
    {
        "name": "SAMSUMG S10 (solo wifi)",
        "category": "Celulares",
        "description": "solo funciona el con wifi, lo demas esta bloqueado",
        "features": [
            "128GB",
            "4RAM",
            ""
        ],
        "image": "/images/uploads/product_1766016163828_1766019921544.jpg",
        "id": "1766016163828",
        "price": 100
    },
    {
        "name": "J2 CORE",
        "category": "Celulares",
        "description": "no tiene detalles, solo desgaste de bolcillo",
        "features": [
            "8GB",
            "2RAM"
        ],
        "image": "/images/uploads/product_1766016215297_1766019921544.jpg",
        "id": "1766016215297",
        "price": 100
    },
    {
        "name": "REDMI 10 C",
        "category": "Celulares",
        "description": "solo esta clidado en la esquina,(no afecta en nada)",
        "features": [
            "ram 4 GB",
            "memoria",
            "64 GB",
            "50 MP"
        ],
        "image": "/images/uploads/product_1766016308146_1766019921544.jpg",
        "id": "1766016308146",
        "price": 100
    },
    {
        "name": "SAMSUMG A10S (clisadito)",
        "category": "Celulares",
        "description": "un pequenio detalle en la esquina, 100bs de una ",
        "features": [
            "32 GG",
            "2GB RAM",
            "8MP"
        ],
        "image": "/images/uploads/product_1766016391551_1766019921545.jpg",
        "id": "1766016391551",
        "price": 100
    },
    {
        "name": "huawei P Smart",
        "category": "Celulares",
        "description": "nungun detallem funciona las 3 lineas",
        "features": [
            "3gb ra",
            "32 gm",
            "13 mp"
        ],
        "image": "/images/uploads/product_1766016567395_1766019921545.jpg",
        "id": "1766016567395",
        "price": 100
    },
    {
        "name": "tecno camón 19neo",
        "category": "Celulares",
        "description": "esta clisado como se ve",
        "features": [
            "128 gb",
            "6+6 ram"
        ],
        "image": "/images/uploads/product_1766016690947_1766019921546.jpg",
        "id": "1766016690947",
        "price": 100
    },
    {
        "name": "32gb tecno spark 6go(solo wifi)",
        "category": "Celulares",
        "description": "solo funciona wifi, londemas perfecto",
        "features": [
            "32gb",
            "4 ram"
        ],
        "image": "/images/uploads/product_1766016782573_1766019921546.jpg",
        "id": "1766016782573",
        "price": 100
    },
    {
        "name": "tecno canon",
        "category": "Celulares",
        "description": "esta clisado como se ve\n100 bs",
        "features": [
            "64gb",
            "4ram"
        ],
        "image": "/images/uploads/product_1766016860162_1766019921546.jpg",
        "id": "1766016860162",
        "price": 100
    },
    {
        "name": "Samsung a20s solo WiFi",
        "category": "Celulares",
        "description": "todo perfecto, luego solo wifi funciona",
        "features": [
            "32 GB",
            "3 RAM"
        ],
        "image": "/images/uploads/product_1766016927406_1766019921547.jpg",
        "id": "1766016927406",
        "price": 100
    },
    {
        "name": "Tv Samsung 40 pulgadas",
        "category": "TV",
        "description": "Tv Samsung de 40 pulgadas rudo funcional placas leds en perfecto estado ",
        "features": [
            "100BS",
            ""
        ],
        "image": "/images/uploads/product_1766017014462_1766019921547.jpg",
        "id": "1766017014462",
        "price": 100
    },
    {
        "name": "Vendo Tv Sony 21 pulgadas",
        "category": "TV",
        "description": "Tv Sony 21 pulgadas... CON control .. precio 100BS\n",
        "features": [
            "21 PULGADAS",
            "CON CONTROL"
        ],
        "image": "/images/uploads/product_1766017083622_1766019921547.jpg",
        "id": "1766017083622",
        "price": 100
    },
    {
        "name": "TV 22 pulgadas LG ",
        "category": "Celulares",
        "description": "PARA COMPUTADORA, NUNGUN DETALLE",
        "features": [
            "PARA PC",
            "SIN DETALLES"
        ],
        "image": "/images/uploads/product_1766017153616_1766019921548.jpg",
        "id": "1766017153616",
        "price": 100
    },
    {
        "name": "Licuadora",
        "category": "Celulares",
        "description": "Se vende linda licuadora de la marca visionner entrega inmediata cel 60428504",
        "features": [
            "NUEVA"
        ],
        "image": "/images/uploads/product_1766017215612_1766019921548.jpg",
        "id": "1766017215612",
        "price": 100
    },
    {
        "name": "Licuadora Oster",
        "category": "Electrodomésticos",
        "description": "Licuadora Oster, NUEVA",
        "features": [
            "NADA DE DETALLES",
            "NUEVA"
        ],
        "image": "/images/uploads/product_1766017258640_1766019921549.jpg",
        "id": "1766017258640",
        "price": 100
    },
    {
        "name": "CHAVOS zapatos para hombre",
        "category": "Celulares",
        "description": "🥳 llegaron lindos zapatos casuales modelo \"chavo\" de cuero revolcado color verde.\n para el hombre que le gusta vestir bien!! 💯 por ciento calidad\n\n🎄Un lindo regalo de navidad 🎁",
        "features": [
            "NUEVOS",
            "TALLA 41",
            ""
        ],
        "image": "/images/uploads/product_1766017308520_1766019921549.jpg",
        "id": "1766017308520",
        "price": 100
    }
];

const STORAGE_KEY = 'tienda_products_v3';

export const getProducts = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_PRODUCTS));
        return INITIAL_PRODUCTS;
    }
    // Merge stored with initial to ensure new hardcoded products appear if local storage is stale
    // simple strategy: if stored has fewer items than initial, or we want to force update...
    // For now, let's just return stored if exists, BUT the user wants these new products to be permanent.
    // So we should probably prefer INITIAL_PRODUCTS if they are "new".
    // A better strategy for a static site update is to just use INITIAL_PRODUCTS as the source of truth
    // and only use localStorage for *new* additions by the user in that specific session.
    // However, the current logic was: check local, if not, use initial.
    // If I update initial, the user won't see it if they already have local storage.
    // I will modify the logic to ALWAYS merge or prefer INITIAL for this deployment.
    
    // FORCE UPDATE for this step:
    // We will assume the code is the source of truth for now.
    return INITIAL_PRODUCTS; 
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
