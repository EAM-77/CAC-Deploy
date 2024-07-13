const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    host : 'localhost',
    user : process.env.USER,
    password : process.env.PASS,
    database : process.env.DB
});

connection.connect((err) => {
    if (err) {
        console.log('Error connecting to the database: ', err);
        return;
    };
    console.log('Connected to database');

    connection.query('CREATE DATABASE IF NOT EXISTS tif'), (err, results) => {
        if (err) {
            console.log('Error creating database: ', err);
            return;
        };
        console.log('Database ensured.');
    
        connection.changeUser({database: 'tif'}, (err) => {
            if (err) {
                console.log('Error switching to tif: ', err);
                return;
            };
        const createTableC = 'CREATE TABLE IF NOT EXISTS Clientes (idCliente INT AUTO_INCREMENT, NombreCliente VARCHAR(200 NOT NULL), Email VARCHAR(200) NOT NULL, Celular VARCHAR(8) NOT NULL, Direccion_Envio VARCHAR(300) NOT NULL, PRIMARY KEY (idCliente)';
    
        connection.query(createTableC, (err, results) => {
            if (err) {
                console.log('Error creating table: ', err);
                return;
            };
            console.log('Table ensured');
            });
        });

        const createTableP = 'CREATE TABLE IF NOT EXISTS Pedidos (idPedido INT AUTO_INCREMENT, Fecha_Pedido DATE NOT NULL, CantidadProductos INT NOT NULL, idClientes INT, PRIMARY KEY (idPedido), FOREING KEY (idClientes) REFERENCES Clientes)';
        
        connection.query(createTableP, (err, results) => {
            if (err) {
                console.log('Error creating table: ', err);
                return;
            };
            console.log('Table ensured');
        });

        const createTablePro = 'CREATE TABLE IF NOT EXISTS Productos (idProducto INT AUTO_INCREMENT, Marca VARCHAR(200) NOT NULL, Modelo VARCHAR(200) NOT NULL, CantidadDisponible INT NOT NULL, PrecioUnitario INT NOT NULL, PRIMARI KEY (idProducto))';
        
        connection.query(createTablePro, (err, results) => {
            if (err) {
                console.log('Error creating table: ', err);
                return;
            };
            console.log('Table ensured');
        });


        const createTableF = 'CREATE TABLE IF NOT EXISTS Facturas (idFactura INT AUTO_INCREMENT, Fecha_Facturacion DATE NOT NUL, PrecioTotal INT NOT NULL, idCliente INT, idPedido INT, PRIMARY KEY (idFactura), FOREING KEY (idCliente) REFERENCE Clientes, FOREING KEY (idPedido) REFERENCE Pedidos)';
        
        connection.query(createTableF, (err, results) => {
            if (err) {
                console.log('Error creating table: ', err);
                return;
            };
            console.log('Table ensured');
        });


        const createTablePP = 'CREATE TABLE IF NOT EXISTS Pedidos_has_Productos (idPedido INT, idProducto INT, FOREING KEY (idPedido) REFERENCE Pedidos, FOREING KEY (idProducto) REFERENCE Productos)';
    
        connection.query(createTablePP, (err, results) => {
            if (err) {
                console.log('Error creating table: ', err);
                return;
            };
            console.log('Table ensured');
        });
        
    };

});

module.exports = connection;