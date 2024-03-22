import knexLib from 'knex';
import knexConfig from './src/config/knexConfig'

const knex = knexLib(knexConfig);

const createCategoriesTable = async () => {
  const exists = await knex.schema.hasTable('categories');
  if (!exists) {
    return knex.schema.createTable('categories', (table) => {
      table.increments('id').primary();
      table.string('title', 255).notNullable();
      table.text('description').nullable();
    })
    .then(() => console.log("Table 'categories' created"))
    .catch((error) => console.error("Error creating 'categories' table", error))
    .finally(() => knex.destroy());
  } else {
    console.log("Table 'categories' already exists");
    knex.destroy();
  }
};

createCategoriesTable();
