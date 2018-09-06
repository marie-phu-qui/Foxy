
exports.up = function(knex, Promise) {
    return knex.schema.createTable('mainwords', function (table) {
      table.increments('id').primary()
      table.string('article')
    })
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTable('mainwords')
  };