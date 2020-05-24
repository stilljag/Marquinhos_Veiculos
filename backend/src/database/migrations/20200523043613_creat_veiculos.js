
exports.up = function(knex) {
  return knex.schema.createTable('veiculos', function(table){
    table.increments('id');
    table.string('fabricante').notNullable();
    table.string('modelo').notNullable();
    table.string('placa').notNullable();
    table.string('combustivel').notNullable();
    table.string('estado').notNullable();
    table.string('portas').notNullable();
    table.string('valor').notNullable();
    table.string('ano').notNullable();
    table.string('km').notNullable();
    table.string('obs').notNullable();        
    table.string('logon_id').notNullable();
    /**Cria o relacionamento com a outra tabela */
    table.foreign('logon_id').references('id_logon').inTable('logon');
});
};


exports.down = function(knex) {
  return knex.schema.dropTable('veiculos');
};
