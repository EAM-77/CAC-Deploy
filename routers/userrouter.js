const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/usercontroller');

router.get('/', usercontroller.getAllClientes);
router.get('/:id', usercontroller.getClienteById);
router.post('/', usercontroller.createCliente);
router.put('/:id', usercontroller.updateCliente);
router.delete('/:id', usercontroller.deleteCliente);

module.exports = router;