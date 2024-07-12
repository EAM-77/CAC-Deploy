const express = require('express');
const app = express();
require('dotenv').config();

const Port = process.env.PORT || 3000;
const prouter = require('./routers/prouter');
const userrouter = require('./routers/userrouter');

app.use(express.json());
app.use('/productos', prouter);
app.use('/clientes', userrouter);

app.listen(Port, () => {
    console.log(`Server running on: http://localhost:${Port}`);
});