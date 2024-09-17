export async function seed(knex) {
  await knex('list_items').del();
  await knex('list_items').insert([
    // Items for Beach Trip (Category: Travel)
    { item_id: 1, list_id: 1, item_name: 'Sunscreen', completed: false },
    { item_id: 2, list_id: 1, item_name: 'Beach Towel', completed: false },
    { item_id: 3, list_id: 1, item_name: 'Water bottle', completed: false },
    { item_id: 4, list_id: 1, item_name: 'SPF cream', completed: false },
    { item_id: 5, list_id: 1, item_name: 'Granola bar', completed: false },

    // Items for Summer Camping (Category: Packing)
    { item_id: 6, list_id: 2, item_name: 'Tent', completed: false },
    { item_id: 7, list_id: 2, item_name: 'Sleeping Bag', completed: false },
    { item_id: 8, list_id: 2, item_name: 'Camping Stove', completed: false },
    { item_id: 9, list_id: 2, item_name: 'Cookware - Pots, pans, utensils', completed: false },
    { item_id: 10, list_id: 2, item_name: 'Water Bottles - Hydration system, purifier', completed: false },
    { item_id: 11, list_id: 2, item_name: 'First Aid Kit - Essentials, personal meds', completed: false },
    { item_id: 12, list_id: 2, item_name: 'Insect Repellent', completed: false },
    { item_id: 13, list_id: 2, item_name: 'SPF', completed: false },
    { item_id: 14, list_id: 2, item_name: 'Multi-tool knife', completed: false },
    { item_id: 15, list_id: 2, item_name: 'Camping Chairs', completed: false },
    { item_id: 16, list_id: 2, item_name: 'Headlamp', completed: false },
    { item_id: 17, list_id: 2, item_name: 'Clothing Layers', completed: false },
    { item_id: 18, list_id: 2, item_name: 'Hygiene - Soap, toothbrush, toothpaste', completed: false },

    // Items for Weekly House Cleaning (Category: House Cleaning)
    { item_id: 19, list_id: 3, item_name: 'Vacuum carpets', completed: false },
    { item_id: 20, list_id: 3, item_name: 'Dust surfaces - shelves, tables', completed: false },
    { item_id: 21, list_id: 3, item_name: 'Mop hard floors', completed: false },
    { item_id: 22, list_id: 3, item_name: 'Clean bathroom - Toilet, sink, shower', completed: false },
    { item_id: 23, list_id: 3, item_name: 'Wipe kitchen counter surfaces', completed: false },
    { item_id: 24, list_id: 3, item_name: 'Change bed linens', completed: false },
    { item_id: 25, list_id: 3, item_name: 'Wipe and clean mirrors', completed: false },

    // Items for Healthy Day (Category: Daily Health)
    { item_id: 26, list_id: 4, item_name: '10m morning walk', completed: false },
    { item_id: 27, list_id: 4, item_name: 'Eat a serving of veggies', completed: false },
    { item_id: 28, list_id: 4, item_name: 'Water bottle', completed: false },
    { item_id: 29, list_id: 4, item_name: 'Sleep by 11pm', completed: false },
  ]);
}
