const itemService = require('../services/item.Service');

const getAllItems = async (req, res) => {
    try {
        const items = await itemService.getAllItems();
        res.render('items', { items });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getItemById = async (req, res) => {
    try {
        const item = await itemService.getItemById(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.render('item', { item });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createNewItem = async (req, res) => {
    try {
        const item = await itemService.createNewItem(req.body);
        res.status(201).json(item);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateItemById = async (req, res) => {
    try {
        const item = await itemService.updateItemById(req.params.id, req.body);
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.json(item);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteItemById = async (req, res) => {
    try {
        const item = await itemService.deleteItemById(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.json({ message: 'Item deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllItems,
    getItemById,
    createNewItem,
    updateItemById,
    deleteItemById
};
