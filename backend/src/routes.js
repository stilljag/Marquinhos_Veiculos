const express=require('express');

/**IMPORTA CONTROLLERS */
const logoncontroller=require('./controllers/logoncontroller');
const fabricantecontroller=require('./controllers/fabricantecontroller');

const routes = express.Router();
/*Lista usuarios cadastrados*/
routes.get('/cadastro', logoncontroller.index);
/**CADASTRA usuario */
routes.post('/cadastro',logoncontroller.create);

/*Lista FABRICANTES*/
routes.get('/fabricante', fabricantecontroller.index);
/**CADASTRA FABRICANTES */
routes.post('/fabricante',fabricantecontroller.create);
/**DELETA FABRICANTES */
routes.delete('/fabricante/:id',fabricantecontroller.delete);


module.exports= routes;