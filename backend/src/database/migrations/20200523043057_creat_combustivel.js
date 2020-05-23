
exports.up = function(knex) {
  return knex.schema.createTable('combustivel', function(table){
    table.increments();          
    table.string('n_comb').notNullable();
    
  });
};

exports.down = function(knex) {
   return knex.schema.droptable('combustivel');
};
