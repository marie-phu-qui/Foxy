
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, colName: 'The hands on coding bootcamp
        that will transform your career
        Our intensive program helps you master the in-demand skills you need to accelerate your career and change your life. Our graduates work at all types of companies, from small startups to some of NZ's technology giants and our alumni network is robust, active and welcoming.
        WHY BE A WEB DEVELOPER
        WHAT IS A WEB DEVELOPER
        Web development is an amazingly satisfying profession – it’s highly dynamic, beautifully creative and ridiculously rewarding. Web development professionals say that even the master is always the learner – it is a lifelong engagement in which you will always be unravelling new things. Web development is also an enabler – you get to build things from conception to implementation, from idea to reality and its possibilities are endless. Read more here.
        “Everyone consumes the internet, but it’s a small group of people who ultimately determine what it looks like and decide how people are going to engage with it. Being a web developer means you can cross that divide and therefore engage in new and meaningful ways”
        – Hannah Salmon, Loomio Web Developer and Graduate of Dev Academy'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};
