/**IMPORTA CONEXAO DO BANCO */
const connection=require('../database/connection');

module.exports={
  /**LISTA ESPECIFICA */
  async index(request,response){
    const logon_id=request.headers.authorization;
    const veiculos=await connection('veiculos')
      .where('logon_id',logon_id)
      .select('*');
    return response.json(veiculos);
  }
}