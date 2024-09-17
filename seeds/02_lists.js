export async function seed(knex) {
  await knex('lists').del();
  await knex('lists').insert([
    { list_id: 1, category_id: 1, title: 'Beach Trip' },
    { list_id: 2, category_id: 2, title: 'Summer Camping' },
    { list_id: 3, category_id: 3, title: 'Weekly House Cleaning' },
    { list_id: 4, category_id: 4, title: 'Healthy Day' },


    { list_id: 5, category_id: null, title: 'User Created List' }  
  ]);
}
