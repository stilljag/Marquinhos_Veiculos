/**IMPORTA CONEXAO DO BANCO */
const connection=require('../database/connection');

module.exports={

  /**LISTA modelo */
  async index(request, response ){
    const modelo=await connection('modelo').select('*');  
    return response.json(modelo);
  },

  /**CADASTRAR  modelo */
  async create(request, response){
    const {n_modelo} =request.body;
    const [id]=await connection('modelo').insert({
     n_modelo,
    })   
     return response.json ({id,n_modelo});
  },  
  
  /**EXCLUIR modelo */  
  async delete(request,response){
    const { id }=request.params; 
    const modelo=await connection('modelo')
     .where('id',id)
     .select('id')
     .first();          

    
   await connection('modelo').where('id',id).delete();
   
   
   return response.status(204).send();

  } 
}