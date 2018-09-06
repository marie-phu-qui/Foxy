
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comics').del()
    .then(function () {
      // Inserts seed entries
      return knex('comics').insert([
        {comicImage : '../comics/1.png'},
        {comicImage : '../comics/2.png'},
        {comicImage : '../comics/3.png'},
        {comicImage : '../comics/4.png'},
        {comicImage : '../comics/5.png'},
        {comicImage : '../comics/6.png'},
        {comicImage : '../comics/7.png'},
        {comicImage : '../comics/8.png'},
        {comicImage : '../comics/9.png'},
        {comicImage : '../comics/10.png'},
        {comicImage : '../comics/11.png'},
        {comicImage : '../comics/12.png'},
        {comicImage : '../comics/13.png'},
        {comicImage : '../comics/14.png'},
        {comicImage : '../comics/15.png'},
        {comicImage : '../comics/16.png'},
        {comicImage : '../comics/17.png'},
        {comicImage : '../comics/18.png'},
        {comicImage : '../comics/19.png'},
        {comicImage : '../comics/20.png'},
        {comicImage : '../comics/21.png'},
        {comicImage : '../comics/22.png'},
        {comicImage : '../comics/23.png'},
        {comicImage : '../comics/24.png'},
        {comicImage : '../comics/25.png'},
        {comicImage : '../comics/26.png'}
      ]);
    });
};
