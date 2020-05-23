
exports.up = function(knex) {
  return knex.schema.createTable('fabricante', function(table){
    table.increments();          
    table.string('n_fab').notNullable();
    
  });
};

exports.down = function(knex) {
   return knex.schema.droptable('fabricante');
};
