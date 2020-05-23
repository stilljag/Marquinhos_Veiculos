/**IMPORTA CONEXAO DO BANCO */
const connection=require('../database/connection');

module.exports={
  async create(request,response){
    const {id}=request.body;

    const logon=await connection('logon')
      .where('id',id)
      .select('name')
      .first();

    if(!logon){
      return response.status(401).json({error:'Acesso não autorizado'});
    }

     return response.json(logon);
  }
}