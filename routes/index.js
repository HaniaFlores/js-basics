const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.marthaRoute);

routes.get('/hania', lesson1Controller.haniaRoute);

module.exports = routes;