


const express = require('express');                                  
const { route } = require('express/lib/application');

const generoController = require('../controllers/genero') 
const filmeController = require('../controllers/filme') 
const clienteController = require('../controllers/cliente')  
const reservaController = require('../controllers/cliente')  

const routes = express.Router();                                      


routes.get("/genero", generoController.index); 
routes.post("/genero" , generoController.store);
routes.get("/genero/:id", generoController.show);        
routes.put("/genero/:id"    , generoController.update);
routes.delete("/genero/:id"    , generoController.destroy);

routes.get("/filme", filmeController.index); 
routes.post("/filme" , filmeController.store);
routes.get("/filme/:id", filmeController.show);        
routes.put("/filme/:id"    , filmeController.update);
routes.delete("/filme/:id"    , filmeController.destroy);

routes.get("/cliente", clienteController.index); 
routes.post("/cliente" , clienteController.store);
routes.get("/cliente/:id", clienteController.show);        
routes.put("/cliente/:id"    , clienteController.update);
routes.delete("/cliente/:id"    , clienteController.destroy);

routes.get("/reserva", reservaController.index); 
routes.post("/reserva" , reservaController.store);
routes.get("/reserva/:id", reservaController.show);       
routes.put("/reserva/:id"    , reservaController.update);
routes.delete("/reserva/:id"    , reservaController.destroy);

module.exports = routes;                                               
