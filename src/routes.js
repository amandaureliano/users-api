const { Router } = require('express');
const validateToken = require('./middlewares/validateToken');
require('express-async-errors');
const users = require('./controllers/user');
const requireds = require('./helpers/requiredFields');
const validateSchema = require('./middlewares/validateSchema');
const { dashboard } = require('./controllers/front');
const multer = require('./middlewares/multer');

const routes = Router();

routes.get('/login', (_,response) => response.render('login'));
routes.get('/register', (_,response) => response.render('register'));
routes.post('/users', validateSchema('users'), multer.single('avatar'), users.create);
routes.post('/login', validateSchema('users', requireds.login), users.login);

routes.use(validateToken);

routes.get('/dashboard', dashboard);
routes.patch('/users', validateSchema('users'), users.update);
routes.delete('/users', validateSchema('users', requireds.delete), users.delete);

module.exports = routes;
