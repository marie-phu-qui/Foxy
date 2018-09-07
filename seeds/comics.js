
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comics').del()
    .then(function () {
      // Inserts seed entries
      return knex('comics').insert([
        {comicImage : '/images/comics/1.png'},
        {comicImage : '/images/comics/2.png'},
        {comicImage : '/images/comics/3.png'},
        {comicImage : '/images/comics/4.png'},
        {comicImage : '/images/comics/5.png'},
        {comicImage : '/images/comics/6.png'},
        {comicImage : '/images/comics/7.png'},
        {comicImage : '/images/comics/8.png'},
        {comicImage : '/images/comics/9.png'},
        {comicImage : '/images/comics/10.png'},
        {comicImage : '/images/comics/11.png'},
        {comicImage : '/images/comics/12.png'},
        {comicImage : '/images/comics/13.png'},
        {comicImage : '/images/comics/14.png'},
        {comicImage : '/images/comics/15.png'},
        {comicImage : '/images/comics/16.png'},
        {comicImage : '/images/comics/17.png'},
        {comicImage : '/images/comics/18.png'},
        {comicImage : '/images/comics/19.png'},
        {comicImage : '/images/comics/20.png'},
        {comicImage : '/images/comics/21.png'},
        {comicImage : '/images/comics/22.png'},
        {comicImage : '/images/comics/23.png'},
        {comicImage : '/images/comics/24.png'},
        {comicImage : '/images/comics/25.png'},
        {comicImage : '/images/comics/26.png'}
      ]);
    });
};
