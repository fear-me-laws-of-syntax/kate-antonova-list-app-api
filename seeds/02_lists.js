export async function seed(knex) {
  await knex('lists').del();
  await knex('lists').insert([
    { list_id: 1, category_id: 1, title: 'Beach Trip' },
    { list_id: 2, category_id: 2, title: 'Summer Camping' },
    { list_id: 3, category_id: 3, title: 'Weekly House Cleaning' },
    { list_id: 4, category_id: 4, title: 'Healthy Day' },


    { list_id: 5, category_id: null, title: 'User Created List' }, 


    { list_id: 6, category_id: 1, title: 'Weekend Getaway' },
    { list_id: 8, category_id: 1, title: 'City Exploration' },

    { list_id: 11, category_id: 2, title: 'Minimalist Packing' },
    { list_id: 12, category_id: 2, title: 'Adventure Essentials' },
    { list_id: 13, category_id: 2, title: 'Family Vacation' },
    { list_id: 14, category_id: 2, title: 'Business Trip' },


    { list_id: 16, category_id: 3, title: 'Spring Cleaning' },
    { list_id: 17, category_id: 3, title: 'Daily Kitchen Cleaning' },
    { list_id: 18, category_id: 3, title: 'Bathroom Deep Clean' },
    { list_id: 19, category_id: 3, title: 'Bedroom Organization' },
    { list_id: 20, category_id: 3, title: 'Pet-Friendly Cleaning Routine' },

    { list_id: 21, category_id: 4, title: 'Morning Routine' },
    { list_id: 22, category_id: 4, title: 'Self-Care Sunday' },
    { list_id: 23, category_id: 4, title: 'Mindfulness Practice' },
    { list_id: 24, category_id: 4, title: 'Evening Wind-Down' },
    { list_id: 25, category_id: 4, title: 'Weekend Digital Detox' },
    { list_id: 26, category_id: 4, title: 'Fitness Challenge Week' },
    { list_id: 27, category_id: 4, title: 'Healthy Meal Prep' }

  ]);
}
