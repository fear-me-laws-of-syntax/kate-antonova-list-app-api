export function up(knex) {
  return knex.schema.createTable("categories", (table) => {
    table.increments("category_id").primary();
    table.string("category_name").notNullable();
  });
}

export function down(knex) {
  return knex.schema.dropTable("categories");
}
