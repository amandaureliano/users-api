require('knex');

exports.up = async (knex) => {
  await knex.schema.createTable('users', table => {
    table.increments('id');
    table.string('name').notNullable();
    table.string('email').unique().notNullable();
    table.string('password').notNullable();
    table.string('avatar').notNullable();
    table.date('birthday').notNullable();
    table.boolean('active').defaultTo('true');
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable(knex, 'users');
};
