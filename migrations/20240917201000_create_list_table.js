export function up(knex) {
  return knex.schema.createTable("lists", (table) => {
    table.increments("list_id").primary();
    table.integer("category_id").unsigned().references("category_id").inTable("categories").onDelete("CASCADE").onUpdate("CASCADE");
    table.string("title").notNullable();
    table.string("description");
  });
}

export function down(knex) {
  return knex.schema.dropTable("lists");
}
