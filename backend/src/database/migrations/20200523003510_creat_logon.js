
exports.up = function(knex) {
  return knex.schema.createTable('logon', function(table){
    table.string('id').notNullable();    
    table.string('name').notNullable();
    table.string('password').notNullable();
  });
};

exports.down = function(knex) {
   return knex.schema.droptable('logon');
};
