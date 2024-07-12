const express = require('express');
const router = express.Router();
const pcontroller = require('../controllers/pcontroller');

router.get('/', pcontroller.getAllProductos);
router.get('/:id', pcontroller.getProductoById);
router.post('/', pcontroller.createProducto);
router.put('/:id', pcontroller.updateProducto);
router.delete('/:id', pcontroller.deleteProducto);

module.exports = router;