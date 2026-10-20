const Product = require('../model/product');
const imagekit = require('../config/imagekit');
const fs = require('fs');

const getproducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    }
    catch (error) {
        res.status(500).json({ message: 'server error' });
    }
};

const getproductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'server error' });
    }
};

const createproduct = async (req, res) => {
    try {
        const { name, description, price, category, stock } = req.body;
        let imageUrl = '';
        if (req.file) {
            const fileBuffer = fs.readFileSync(req.file.path);
            const base64File = fileBuffer.toString('base64');
            const result = await imagekit.files.upload({
                file: base64File,
                fileName: req.file.originalname || 'product_image',
                folder: '/ecommerce_products'
            });
            console.log(result);
            imageUrl = result.url;
        }
        const product = new Product({
            name,
            description,
            price,
            category,
            stock,
            imageUrl
        });
        const saveproduct = await product.save();
        res.status(201).json(saveproduct);
    }
    catch (error) {
        console.error("Create Product Error:", error);
        res.status(500).json({ message: 'Server error', error: error.message || error });
    }

};

const updateproduct = async (req, res) => {
    try {
        const { name, description, price, category, stock } = req.body;
        const product = await Product.findById(req.params.id);
        if (product) {
            product.name = name || product.name;
            product.description = description || product.description;
            product.price = price || product.price;
            product.category = category || product.category;
            product.stock = stock || product.stock;

            if (req.file) {
                const fileBuffer = fs.readFileSync(req.file.path);
                const base64File = fileBuffer.toString('base64');
                const result = await imagekit.files.upload({
                    file: base64File,
                    fileName: req.file.originalname || 'product_image',
                    folder: '/ecommerce_products'
                });
                console.log(result);
                product.imageUrl = result.url;
            }
            const updateproduct = await product.save();
            res.json(updateproduct);
        }
        else {
            res.status(404).json({ message: 'product not found' });
        }

    }
    catch (error) {
        res.status(500).json({ message: 'server error' });
    }

};

const deleteproduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            await product.deleteOne();
            res.json({ message: 'product removed' });
        }
        else {
            res.status(404).json({ message: 'product not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'server error' });
    }

}

module.exports = { getproducts, getproductById, createproduct, updateproduct, deleteproduct };