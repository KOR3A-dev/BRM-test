import {Invoice} from "../models/Invoice.js";

export const create = async (req, res) => {
    try {
        const { date_buy, quantity_products, total_price, id_user, id_products } = req.body;

        // Creating a new User Object
        const newInvoice = await Invoice.create({
            date_buy,
            quantity_products,
            total_price,
            id_user,
            id_products
        });
        
        return res.status(201).json(newInvoice);
    } catch (error) {
        return res.status(500).json(error);
    }
}

export const getAll = async (req, res) => {
    try {
        const invoices = await Invoice.findAll();
        res.json(invoices);
    } catch (error) {
        return res.status(500).json({ message: "an unexpected error has occurred"})
    } 
}

