const Item = require('../models/item.Model');

const getAllItems = async () => {
    return await Item.find({});
};

const getItemById = async (id) => {
    return await Item.findById(id);
};

const createNewItem = async (itemData) => {
    const item = new Item(itemData);
    return await item.save();
};

const updateItemById = async (id, itemData) => {
    return await Item.findByIdAndUpdate(id, itemData, { new: true });
};

const deleteItemById = async (id) => {
    return await Item.findByIdAndDelete(id);
};

module.exports = {
    getAllItems,
    getItemById,
    createNewItem,
    updateItemById,
    deleteItemById
};
