const express = require('express');
const router = express.Router();
const itemController = require('../controllers/item.Controller');
const authenticateToken = require('../middleware/auth');

router.get('/items', itemController.getAllItems);
router.get('/items/:id', itemController.getItemById);
router.post('/items', authenticateToken, itemController.createNewItem);
router.put('/items/:id', authenticateToken, itemController.updateItemById);
router.delete('/items/:id', authenticateToken, itemController.deleteItemById);

module.exports = router;
