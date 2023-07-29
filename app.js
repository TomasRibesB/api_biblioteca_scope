const express = require('express');
const { auth } = require("express-oauth2-jwt-bearer");
const errorHandler = require('./middleware/errorHandler');
const autenticacion = auth({
    audience: "http://localhost:3000/api/productos",
    issuerBaseURL: "https://dev-7bwae37liu66o2b2.us.auth0.com/",
    tokenSigningAlg: "RS256",
});


const app = express();
app.use(express.json());

// Importamos el Router de Libros
const librosRouter = require('./routes/libros');

// Importamos el Middleware Error Handler


app.use('/libros', autenticacion, librosRouter);
app.use(errorHandler);

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});
