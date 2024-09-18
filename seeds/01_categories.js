export async function seed(knex) {

  await knex('categories').del();
  await knex('categories').insert([
    { category_id: 1, category_name: 'Travel' },
    { category_id: 2, category_name: 'Packing' },
    { category_id: 3, category_name: 'Cleaning' },
    { category_id: 4, category_name: 'Wellness' }
  ]);
}
