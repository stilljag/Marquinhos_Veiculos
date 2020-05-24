
exports.up = function(knex) {
  return knex.schema.createTable('logon', function(table){
    table.string('id_logon').notNullable();    
    table.string('name').notNullable();
    table.string('senha').notNullable();
  });
};

exports.down = function(knex) {
   return knex.schema.droptable('logon');
};
