import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_PATH = path.join(__dirname, '../models/products.json');

// Helper to read DB
const readDB = async () => {
    try {
        const data = await fs.readFile(DB_PATH, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        // If file doesn't exist, return empty array
        return [];
    }
};

// Helper to write DB
const writeDB = async (data) => {
    await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2));
};

export const getAllProducts = async (req, res) => {
    try {
        const products = await readDB();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error reading products' });
    }
};

export const createProduct = async (req, res) => {
    try {
        const products = await readDB();
        const newProduct = {
            id: Date.now().toString(),
            ...req.body,
            price: 100 // Enforce 100 Bs price
        };

        // Ensure features is an array if sent as string
        if (typeof newProduct.features === 'string') {
            try {
                newProduct.features = JSON.parse(newProduct.features);
            } catch (e) {
                newProduct.features = newProduct.features.split(',').map(f => f.trim());
            }
        }

        products.push(newProduct);
        await writeDB(products);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error creating product' });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const products = await readDB();
        const index = products.findIndex(p => p.id === id);

        if (index === -1) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const updatedProduct = {
            ...products[index],
            ...req.body,
            price: 100 // Ensure price stays 100
        };

        // Ensure features is an array if sent as string
        if (typeof updatedProduct.features === 'string') {
            try {
                updatedProduct.features = JSON.parse(updatedProduct.features);
            } catch (e) {
                updatedProduct.features = updatedProduct.features.split(',').map(f => f.trim());
            }
        }

        products[index] = updatedProduct;
        await writeDB(products);
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error updating product' });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const products = await readDB();
        const filteredProducts = products.filter(p => p.id !== id);

        if (products.length === filteredProducts.length) {
            return res.status(404).json({ message: 'Product not found' });
        }

        await writeDB(filteredProducts);
        res.json({ message: 'Product deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting product' });
    }
};

export const uploadImage = (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }
    // Return the path relative to the public folder, accessible via /images/productos/...
    // The server mounts /images to public/images
    // So if file is saved in public/images/productos/file.jpg, url is /images/productos/file.jpg
    const imageUrl = `/images/productos/${req.file.filename}`;
    res.json({ imageUrl });
};
