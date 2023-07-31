// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: 'pg',
  connection: {
    database: 'graphql',
    host: 'localhost',
    port: '5432',
    user: 'postgres',
    password: 'postgres',
    pool: {
      min: 2,
      max: 10
    }
  },

  migrations: {
    tableName: 'knex_migrations',  
  },
};
