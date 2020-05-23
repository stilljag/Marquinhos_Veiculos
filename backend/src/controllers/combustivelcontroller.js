/**IMPORTA CONEXAO DO BANCO */
const connection=require('../database/connection');

module.exports={

  /**LISTA combustivel */
  async index(request, response ){
    const combustivel=await connection('combustivel').select('*');  
    return response.json(combustivel);
  },

  /**CADASTRAR  combustivel */
  async create(request, response){
    const {n_comb} =request.body;
    const [id]=await connection('combustivel').insert({
     n_comb,
    })   
     return response.json ({id,n_comb});
  },  
  
  /**EXCLUIR combustivel */  
  async delete(request,response){
    const { id }=request.params; 
    const combustivel=await connection('combustivel')
     .where('id',id)
     .select('id')
     .first();          

    
   await connection('combustivel').where('id',id).delete();
   
   
   return response.status(204).send();

  } 
}