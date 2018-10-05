
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id').primary()
    table.string('users')
    table.string('hash')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
};
