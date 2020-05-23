const express=require('express');

/**IMPORTA CONTROLLERS */
const logoncontroller=require('./controllers/logoncontroller');
const fabricantecontroller=require('./controllers/fabricantecontroller');
const modelocontroller=require('./controllers/modelocontroller');
const combustivelcontroller=require('./controllers/combustivelcontroller');
const veiculoscontroller=require('./controllers/veiculoscontroller');
const sessioncontroller=require('./controllers/sessioncontroller');

const routes = express.Router();
/**LOGIN */
routes.post('/logon', sessioncontroller.create);

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

/*Lista modelos cadastrados*/
routes.get('/modelo', modelocontroller.index);
/**CADASTRA modelos */
routes.post('/modelo',modelocontroller.create);
/**DELETA modelos */
routes.delete('/modelo/:id',modelocontroller.delete);

/*Lista combustivel cadastrados*/
routes.get('/combustivel', combustivelcontroller.index);
/**CADASTRA combustivels */
routes.post('/combustivel',combustivelcontroller.create);
/**DELETA combustivels */
routes.delete('/combustivel/:id',combustivelcontroller.delete);

/*Lista veiculos cadastrados*/

/**CADASTRA usuario */
routes.post('/veiculos',veiculoscontroller.create);


module.exports= routes;