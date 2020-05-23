
exports.up = function(knex) {
  return knex.schema.createTable('modelo', function(table){
    table.increments();          
    table.string('n_modelo').notNullable();
    
  });
};

exports.down = function(knex) {
   return knex.schema.droptable('modelo');
};
