
exports.up = function(knex, Promise) {
    return knex.schema.createTable('mainwords', function (table) {
      table.increments('id').primary()
      table.string('article', 5000)
    })
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTable('mainwords')
  };