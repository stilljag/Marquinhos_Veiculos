

exports.up = function(knex) {
  return knex.schema.createTable('img', function(table){
    table.increments('id_img');
    table.string('url').notNullable();  
    table.string('veiculos_id').notNullable(); 
    table.foreign('veiculos_id').references('id').inTable('veiculos');  
  });
};

exports.down = function(knex) {
   return knex.schema.droptable('img');
};
