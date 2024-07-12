const db = require('../db/db');

const getAllClientes =  (req, res) => {
    const sql = 'SELECT * FROM clientes';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

const getClienteById = (req, res) => {
    const {id} = req.params;
    const sql = 'SELECT * FROM clientes WHERE id=?';
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

const createCliente = (req, res) => {
    const {nombreCliente, email, celular, direccion_envio} = req.body;
    const sql = 'INSERT INTO productos (nombreCliente, email, celular, direccion_envio) VALUES (?, ?, ?, ?)';
    db.query(sql, [nombreCliente, email, celular, direccion_envio], (err, result) => {
        if (err) throw err;
        res.json({message: 'Cliente registrado :)', idCliente: result.insertId});
    });
};

const updateCliente = (req, res) => {
    const {id} = req.params;
    const {nombreCliente, email, celular, direccion_envio} = req.body;
    const sql = 'UPDATE productos SET nombreCliente = ?, email = ?, celular = ?, direccion_envio = ? WHERE id = ?';
    db.query(sql, [nombreCliente, email, celular, direccion_envio, id], (err, result) => {
        if (err) throw err;
        res.json({message: 'Datos de cliente modificado ;)'});
    });
};

    const deleteCliente = (req, res) => {
        const {id} = req.params;
        const sql = 'DELETE FROM clientes WHERE id = ?';
        db.query(sql, [id], (err, result) => {
            if (err) throw err;
            res.json({message: 'Cliente anulado/borrado :('});
        });
    };

module.exports = {
    getAllClientes,
    getClienteById,
    createCliente,
    updateCliente,
    deleteCliente
};