module.exports = {
  client: 'postgresql',
  connection: {
    database: 'yato_dev',
    user: 'postgres',
    password: '2029'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
