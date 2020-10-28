const { Router } = require('express');
const routes = Router();

const AuthController = require('./controllers/AuthController');
const ProductController = require('./controllers/ProductController');

const authMiddleware = require('./middlewares/Auth');

routes.post('/login', AuthController.index);
routes.post('/register', AuthController.store);

routes.get('/products', authMiddleware, ProductController.index);

module.exports = routes;
