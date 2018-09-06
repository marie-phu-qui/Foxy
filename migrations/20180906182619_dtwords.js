
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dtwords', function (table) {
    table.increments('id').primary()
    table.string('trumps')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('dtwords')
};
