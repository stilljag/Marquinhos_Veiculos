/**IMPORTA CONEXAO DO BANCO */
const connection=require('../database/connection');

module.exports={  
/**LISTA VEÍCULOS */
  async index(request, response ){
    const veiculos=await connection('veiculos')
    .join('logon','id_logon','=','veiculos.logon_id')
    .select(['veiculos.id',
      'veiculos.fabricante',
      'veiculos.modelo',
      'veiculos.placa',
      'veiculos.combustivel',
      'veiculos.estado',
      'veiculos.portas',
      'veiculos.valor',
      'veiculos.ano',
      'veiculos.km',
      'veiculos.obs',
      'logon.name']); 

/*      const imagens=await connection('img') 
    .join('veiculos','id','=','img.veiculos_id')
    .select(['veiculos.id',
    'veiculos.fabricante',
    'veiculos.modelo',
    'veiculos.placa',
    'veiculos.combustivel',
    'veiculos.estado',
    'veiculos.portas',
    'veiculos.valor',
    'veiculos.ano',
    'veiculos.km',
    'veiculos.obs',
    'img.url',
    'img.veiculos_id']);*/
    return response.json([veiculos]) ; 
  },
 
/**CADASTRAR VEICULOS */
async create(request, response){
  /**IMAGEM */
  const {fabricante, modelo, placa, combustivel, estado,
  portas,valor,ano,km,obs,/*url*/} =request.body;

 /**PERMISSAO DE CADASTRO */
  const logon_id =request.headers.authorization;    
  const [id] = await connection('veiculos')  
  .insert({fabricante,modelo,placa,
    combustivel,estado,portas,valor,ano,km,obs,logon_id,      
  }) ;   
  //connection('veiculos').update;
  //const veiculos_id=id;

  //const [img] = await connection('img')  
  //.insert({url,veiculos_id
  //}) ; 

   return response.json ({id,fabricante,modelo,placa,combustivel,estado,portas,
    valor,ano,km,obs,/*img,url,veiculos_id*/});    
  },



  /**DELETAR VEICULO */
  async delete(request,response){
    const { id }=request.params;
    const logon_id=request.headers.authorization;   
    const veiculos=await connection('veiculos')
     .where('id',id)
     .select('logon_id','id')
     .first();        
//     console.log(veiculos) 
   if (veiculos.logon_id != logon_id )  {
     return response.status(401).json({error:'Exclusão Não Autorizada'}); 
   }  
     await connection('veiculos').where('id',id).delete();
     return response.status(204).send();
  }
  
}