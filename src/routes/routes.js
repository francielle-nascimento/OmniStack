const {Router } = require('express');
const routes = Router();
const controller = require('../controller/devController')

routes.post('/devs', controller.addDev);
routes.get('/devs', controller.getAll);



module.exports= routes;