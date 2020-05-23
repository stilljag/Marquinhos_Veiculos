/**IMPORTA CONEXAO DO BANCO */
const connection=require('../database/connection');

module.exports={

  /**LISTA usuario */
  async index(request, response ){
    const logon=await connection('logon').select('*');
  
    return response.json(logon);
  },

  /**CADASTRAR  usuario */
  async create(request, response){
    const {id,name, password} =request.body;    

    
    await connection('logon').insert({
      id,
      name,
      password,
    })
   
     return response.json ({name});
  },     

  
};