
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, colName: 'Walt Disney'},
        {id: 2, colName: 'Abe Lincoln'},
        {id: 3, colName: 'Martin L. King Jr.'},
        {id: 4, colName: 'Mother Theresa'},
        {id: 5, colName: 'Ghandi'},
        {id: 6, colName: 'Dalai Lama'},
        {id: 7, colName: 'Steve Jobs'},
        {id: 8, colName: 'Batman'},
        {id: 9, colName: 'Suzie Cato'},
        {id: 10, colName: 'Tom Hanks'},
        {id: 11, colName: 'Ross EDA'},
        {id: 12, colName: 'Harrison EDA'},
        {id: 13, colName: 'Leonardo Davinci'},
        {id: 14, colName: 'Judith Collins'},
        {id: 15, colName: 'Kim Hill'},
        {id: 16, colName: 'Mark Richardson'},
        {id: 17, colName: 'John Key'},
        {id: 18, colName: 'Oprah Winfrey'},
        {id: 19, colName: 'Hillary Clinton'},
        {id: 20, colName: 'Spot the Wonder dog'}
      ]);
    });
};
