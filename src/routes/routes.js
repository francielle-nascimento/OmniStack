const {Router } = require('express');
const routes = Router();
const controller = require('../controller/devController')

routes.post('/devs', controller.addDev);




module.exports= routes;