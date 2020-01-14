const {Router } = require('express');
const routes = Router();
const DevController = require('../controller/devController')
const SearchController = require('../controller/SearchController')

routes.post('/devs', DevController.addDev);
routes.get('/devs', DevController.getAll);

routes.get('/search', SearchController.search);


module.exports= routes;