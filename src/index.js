require('dotenv').config();
const express = require('express');
const Routes = require('./routes.js');
const PORT = process.env.API_PORT;
const app = express();

app.use(express.json());
app.use(Routes);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
