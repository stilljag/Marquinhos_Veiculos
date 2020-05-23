/**IMPORTA CONEXAO DO BANCO */
const connection=require('../database/connection');

module.exports={

/**CADASTRAR PRODUTOS */
async create(request, response){
  const {placa, estado, portas,ano} =request.body;

 /**OBSERVAR PARA PERMISSAO DE CADASTRO 
  const gestor_id =request.headers.authorization;*/
  
 
  const [id] = await connection('veiculos').insert({
    placa,
    estado,
    portas,
    ano,
    
  
  });
 
   return response.json ({id});
}
}