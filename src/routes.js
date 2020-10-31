const { Router } = require('express');
const routes = Router();

const AuthController = require('./controllers/AuthController');
const ProductController = require('./controllers/ProductController');
const UserController = require('./controllers/UserController');

const authMiddleware = require('./middlewares/Auth');

routes.post('/login', AuthController.index);
routes.post('/register', AuthController.store);

routes.get('/products', authMiddleware, ProductController.index);

routes.get('/users', UserController.index);
routes.delete('/users/:id', UserController.delete);

module.exports = routes;
