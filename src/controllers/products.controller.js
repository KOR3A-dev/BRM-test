import {Product} from "../models/Product.js";
import {User} from "../models/User.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        return res.status(500).json({ message: "an unexpected error has occurred"})
    }  
};

export const getProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findOne({
            where: { 
                id
            },
        });

        if(!product) return res.status(404).json({ message: "The product with  this id no exists"})
        
        res.json(product);
    } catch (error) {
        return res.status(500).json({ message: "an unexpected error has occurred"})
    }  
};

export const createProduct = async (req, res) => {
    try {

        const {name,number_lote,price,available_quantity,date_entry} = req.body;
        const newProduct = await Product.create({
            name,
            number_lote,
            price,
            available_quantity,
            date_entry
        });
        res.json(newProduct)
       
    } catch (error) {
        return res.status(500).json({ message: "an unexpected error has occurred"})
    }
}

export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params
        const {name,number_lote,price,available_quantity,date_entry} = req.body;

        const product = await Product.findByPk(id)
        
        product.name = name
        product.number_lote = number_lote
        product.price = price
        product.available_quantity = available_quantity
        product.date_entry = date_entry

        await product.save()

        res.json(product)
    } catch (error) {
        return res.status(500).json({ message: "an unexpected error has occurred"})
    }

}

export const deleteProduct = async (req, res) => {
    try { 
        const { id } = req.params
        await Product.destroy({
            where: {
                id,
            }
        })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ message: "an unexpected error has occurred"})
    }
}

