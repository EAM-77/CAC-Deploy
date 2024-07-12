const db = require('../db/db');

const getAllProductos =  (req, res) => {
    const sql = 'SELECT * FROM productos';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

const getProductoById = (req, res) => {
    const {id} = req.params;
    const sql = 'SELECT * FROM productos WHERE id=?';
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

const createProducto = (req, res) => {
    const {marca, modelo, cantidadDisonible, precioUnitario} = req.body;
    const sql = 'INSERT INTO productos (marca, modelo, cantidadDisonible, precioUnitario) VALUES (?, ?, ?, ?)';
    db.query(sql, [marca, modelo, cantidadDisonible, precioUnitario], (err, result) => {
        if (err) throw err;
        res.json({message: 'Nuevo producto cargado :)', idProducto: result.insertId});
    });
};

const updateProducto = (req, res) => {
    const {id} = req.params;
    const {marca, modelo, cantidadDisonible, precioUnitario} = req.body;
    const sql = 'UPDATE productos SET marca = ?, modelo = ?, cantidadDisponible = ?, precioUnitario = ? WHERE id = ?';
    db.query(sql, [marca, modelo, cantidadDisonible, precioUnitario, id], (err, result) => {
        if (err) throw err;
        res.json({message: 'Producto modificado ;)'});
    });
};

    const deleteProducto = (req, res) => {
        const {id} = req.params;
        const sql = 'DELETE FROM productos WHERE id = ?';
        db.query(sql, [id], (err, result) => {
            if (err) throw err;
            res.json({message: '¡Producto borrado!'});
        });
    };

module.exports = {
    getAllProductos,
    getProductoById,
    createProducto,
    updateProducto,
    deleteProducto
};