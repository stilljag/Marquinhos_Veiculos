
exports.up = function(knex) {
  return knex.schema.createTable('veiculos', function(table){
    table.increments();
    
  

    table.string('placa').notNullable();
    table.string('estado').notNullable();
    table.string('portas').notNullable();
    table.string('ano').notNullable();

     

});
};


exports.down = function(knex) {
  return knex.schema.dropTable('veiculos');
};
