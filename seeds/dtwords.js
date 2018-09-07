
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dtwords').del()
    .then(function () {
      // Inserts seed entries
      return knex('dtwords').insert([
        {id: 1, trumps: 'Walt Disney'},
        {id: 2, trumps: 'Abe Lincoln'},
        {id: 3, trumps: 'Martin L. King Jr.'},
        {id: 4, trumps: 'Mother Theresa'},
        {id: 5, trumps: 'Ghandi'},
        {id: 6, trumps: 'Dalai Lama'},
        {id: 7, trumps: 'Steve Jobs'},
        {id: 8, trumps: 'Batman'},
        {id: 9, trumps: 'Suzie Cato'},
        {id: 10, trumps: 'Tom Hanks'},
        {id: 11, trumps: 'Ross EDA'},
        {id: 12, trumps: 'Harrison EDA'},
        {id: 13, trumps: 'Leonardo Davinci'},
        {id: 14, trumps: 'Judith Collins'},
        {id: 15, trumps: 'Kim Hill'},
        {id: 16, trumps: 'Mark Richardson'},
        {id: 17, trumps: 'John Key'},
        {id: 18, trumps: 'Oprah Winfrey'},
        {id: 19, trumps: 'Hillary Clinton'},
        {id: 20, trumps: 'Spot the Wonder dog'}
      ]);
    });
};
