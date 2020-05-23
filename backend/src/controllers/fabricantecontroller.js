/**IMPORTA CONEXAO DO BANCO */
const connection=require('../database/connection');

module.exports={

  /**LISTA fabricante */
  async index(request, response ){
    const fabricante=await connection('fabricante').select('*');  
    return response.json(fabricante);
  },

  /**CADASTRAR  fabricante */
  async create(request, response){
    const {n_fab} =request.body;
    const [id]=await connection('fabricante').insert({
     n_fab,
    })   
     return response.json ({id,n_fab});
  },  
  
  /**EXCLUIR FABRICANTE */  
  async delete(request,response){
    const { id }=request.params; 
    const fabricante=await connection('fabricante')
     .where('id',id)
     .select('id')
     .first();          

    
   await connection('fabricante').where('id',id).delete();
   
   
   return response.status(204).send();

  } 
}