export function up(knex) {
  return knex.schema.createTable("list_items", (table) => {
    table.increments("item_id").primary();
    table.integer("list_id").unsigned().references("list_id").inTable("lists").onDelete("CASCADE").onUpdate("CASCADE");
    table.string("item_name").notNullable();
    table.string("item_description");
    table.boolean("completed").notNullable().defaultTo(false);
  });
}

export function down(knex) {
  return knex.schema.dropTable("list_items");
}
