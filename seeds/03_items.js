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




    // Items for Weekend Getaway (Category: Travel)
    { item_id: 30, list_id: 6, item_name: 'Book hotel', completed: false },
    { item_id: 31, list_id: 6, item_name: 'Research local cafes', completed: false },
    { item_id: 32, list_id: 6, item_name: 'Pack lightweight jacket', completed: false },
    { item_id: 33, list_id: 6, item_name: 'Check weather forecast', completed: false },
    { item_id: 34, list_id: 6, item_name: 'Plan sightseeing spots', completed: false },
    { item_id: 35, list_id: 6, item_name: 'Download offline maps', completed: false },
    { item_id: 36, list_id: 6, item_name: 'Create a playlist for the drive', completed: false },

// Items for City Exploration (Category: Travel)
    { item_id: 44, list_id: 8, item_name: 'Research the top museums', completed: false },
    { item_id: 45, list_id: 8, item_name: 'Book a food tour', completed: false },
    { item_id: 46, list_id: 8, item_name: 'Plan public transport routes', completed: false },
    { item_id: 47, list_id: 8, item_name: 'Pack comfortable shoes for walking', completed: false },
    { item_id: 48, list_id: 8, item_name: 'Look up rooftop bars', completed: false },
    { item_id: 49, list_id: 8, item_name: 'Check out local street art spots', completed: false },
    { item_id: 50, list_id: 8, item_name: 'Bring a portable phone charger', completed: false },





    // Items for Minimalist Packing (list_id: 11) (Category: Packing)
    { item_id: 65, list_id: 11, item_name: '2 versatile outfits', completed: false },
    { item_id: 66, list_id: 11, item_name: 'Lightweight jacket', completed: false },
    { item_id: 67, list_id: 11, item_name: 'Compact toiletries kit', completed: false },
    { item_id: 68, list_id: 11, item_name: 'Reusable water bottle', completed: false },
    { item_id: 69, list_id: 11, item_name: 'One pair of shoes', completed: false },
    { item_id: 70, list_id: 11, item_name: 'Sunglasses', completed: false },
    { item_id: 71, list_id: 11, item_name: 'Travel pillow', completed: false },

    // Items for Adventure Essentials (list_id: 12) (Category: Packing)
    { item_id: 72, list_id: 12, item_name: 'Hiking boots', completed: false },
    { item_id: 73, list_id: 12, item_name: 'Water purification tablets', completed: false },
    { item_id: 74, list_id: 12, item_name: 'First aid kit', completed: false },
    { item_id: 75, list_id: 12, item_name: 'Compact tent or hammock', completed: false },
    { item_id: 76, list_id: 12, item_name: 'Bug spray', completed: false },
    { item_id: 77, list_id: 12, item_name: 'Portable solar charger', completed: false },
    { item_id: 78, list_id: 12, item_name: 'Multi-tool knife', completed: false },

    // Items for Family Vacation (list_id: 13) (Category: Packing)
    { item_id: 79, list_id: 13, item_name: 'Extra snacks for the kids', completed: false },
    { item_id: 80, list_id: 13, item_name: 'Portable games and activities', completed: false },
    { item_id: 81, list_id: 13, item_name: 'Kid-friendly sunscreen', completed: false },
    { item_id: 82, list_id: 13, item_name: 'Favorite stuffed animal or blanket', completed: false },
    { item_id: 83, list_id: 13, item_name: 'Wet wipes', completed: false },
    { item_id: 84, list_id: 13, item_name: 'Lightweight stroller', completed: false },
    { item_id: 85, list_id: 13, item_name: 'Download kids’ movies', completed: false },


// Items for Business Trip (list_id: 14) (Category: Packing)
    { item_id: 86, list_id: 14, item_name: 'Laptop & charger', completed: false },
    { item_id: 87, list_id: 14, item_name: 'Business cards', completed: false },
    { item_id: 88, list_id: 14, item_name: 'PowerPoint presentation on USB', completed: false },
    { item_id: 89, list_id: 14, item_name: 'Travel-sized grooming kit', completed: false },
    { item_id: 90, list_id: 14, item_name: 'Comfortable formal shoes', completed: false },
    { item_id: 91, list_id: 14, item_name: 'Noise-canceling headphones', completed: false },
    { item_id: 92, list_id: 14, item_name: 'Portable steamer for clothes', completed: false },



    // Items for Spring Cleaning (list_id: 16)
    { item_id: 93, list_id: 16, item_name: 'Wash windows', completed: false },
    { item_id: 94, list_id: 16, item_name: 'Dust ceiling fans', completed: false },
    { item_id: 95, list_id: 16, item_name: 'Clean baseboards', completed: false },
    { item_id: 96, list_id: 16, item_name: 'Organize closets', completed: false },
    { item_id: 97, list_id: 16, item_name: 'Shampoo carpets', completed: false },
    { item_id: 98, list_id: 16, item_name: 'Clean behind appliances', completed: false },
    { item_id: 99, list_id: 16, item_name: 'Polish furniture', completed: false },

// Items for Daily Kitchen Cleaning (list_id: 17)
    { item_id: 100, list_id: 17, item_name: 'Wipe down countertops', completed: false },
    { item_id: 101, list_id: 17, item_name: 'Sweep the floor', completed: false },
    { item_id: 102, list_id: 17, item_name: 'Empty the trash', completed: false },
    { item_id: 103, list_id: 17, item_name: 'Load or empty dishwasher', completed: false },
    { item_id: 104, list_id: 17, item_name: 'Clean the sink', completed: false },
    { item_id: 105, list_id: 17, item_name: 'Wipe down the stove', completed: false },
    { item_id: 106, list_id: 17, item_name: 'Disinfect handles and switches', completed: false },

// Items for Bathroom Deep Clean (list_id: 18)
    { item_id: 107, list_id: 18, item_name: 'Scrub the toilet', completed: false },
    { item_id: 108, list_id: 18, item_name: 'Clean the shower and tub', completed: false },
    { item_id: 109, list_id: 18, item_name: 'Wipe down mirrors', completed: false },
    { item_id: 110, list_id: 18, item_name: 'Clean tile grout', completed: false },
    { item_id: 111, list_id: 18, item_name: 'Replace shower curtain liner', completed: false },
    { item_id: 112, list_id: 18, item_name: 'Wipe cabinet surfaces', completed: false },
    { item_id: 113, list_id: 18, item_name: 'Mop the floor', completed: false },

// Items for Bedroom Organization (list_id: 19)
    { item_id: 114, list_id: 19, item_name: 'Change bed linens', completed: false },
    { item_id: 115, list_id: 19, item_name: 'Organize drawers', completed: false },
    { item_id: 116, list_id: 19, item_name: 'Vacuum under the bed', completed: false },
    { item_id: 117, list_id: 19, item_name: 'Dust nightstands and shelves', completed: false },
    { item_id: 118, list_id: 19, item_name: 'Wipe down windowsills', completed: false },
    { item_id: 119, list_id: 19, item_name: 'Clean mirrors', completed: false },
    { item_id: 120, list_id: 19, item_name: 'Declutter closet', completed: false },

// Items for Pet-Friendly Cleaning Routine (list_id: 20)
    { item_id: 121, list_id: 20, item_name: 'Vacuum pet hair', completed: false },
    { item_id: 122, list_id: 20, item_name: 'Wash pet bedding', completed: false },
    { item_id: 123, list_id: 20, item_name: 'Disinfect pet feeding area', completed: false },
    { item_id: 124, list_id: 20, item_name: 'Wipe down pet toys', completed: false },
    { item_id: 125, list_id: 20, item_name: 'Sweep and mop floors', completed: false },
    { item_id: 126, list_id: 20, item_name: 'Clean pets water bowl', completed: false },
    { item_id: 127, list_id: 20, item_name: 'Freshen up litter box', completed: false },



// Items for Morning Routine (list_id: 21)
    { item_id: 128, list_id: 21, item_name: 'Drink a glass of water', completed: false },
    { item_id: 129, list_id: 21, item_name: 'Stretch for 5 minutes', completed: false },
    { item_id: 130, list_id: 21, item_name: 'Write down 3 things you are grateful for', completed: false },
    { item_id: 131, list_id: 21, item_name: 'Meditate for 10 minutes', completed: false },
    { item_id: 132, list_id: 21, item_name: 'Eat a healthy breakfast', completed: false },
    { item_id: 133, list_id: 21, item_name: 'Set an intention for the day', completed: false },
    { item_id: 134, list_id: 21, item_name: 'Listen to an inspiring podcast', completed: false },

// Items for Self-Care Sunday (list_id: 22)
    { item_id: 135, list_id: 22, item_name: 'Take a relaxing bath', completed: false },
    { item_id: 136, list_id: 22, item_name: 'Apply a face mask', completed: false },
    { item_id: 137, list_id: 22, item_name: 'Read a chapter of a book', completed: false },
    { item_id: 138, list_id: 22, item_name: 'Do a digital detox for 2 hours', completed: false },
    { item_id: 139, list_id: 22, item_name: 'Light candles or diffuse essential oils', completed: false },
    { item_id: 140, list_id: 22, item_name: 'Do some gentle yoga', completed: false },
    { item_id: 141, list_id: 22, item_name: 'Have a cup of herbal tea', completed: false },

// Items for Mindfulness Practice (list_id: 23)
    { item_id: 142, list_id: 23, item_name: 'Take 5 deep breaths', completed: false },
    { item_id: 143, list_id: 23, item_name: 'Focus on one task at a time', completed: false },
    { item_id: 144, list_id: 23, item_name: 'Practice mindful eating', completed: false },
    { item_id: 145, list_id: 23, item_name: 'Take a 10-minute mindful walk', completed: false },
    { item_id: 146, list_id: 23, item_name: 'Do a body scan meditation', completed: false },
    { item_id: 147, list_id: 23, item_name: 'Spend 5 minutes in silence', completed: false },
    { item_id: 148, list_id: 23, item_name: 'Journal about your emotions', completed: false },

// Items for Evening Wind-Down (list_id: 24)
    { item_id: 149, list_id: 24, item_name: 'Dim the lights', completed: false },
    { item_id: 150, list_id: 24, item_name: 'Do a 10-minute stretch', completed: false },
    { item_id: 151, list_id: 24, item_name: 'Read 10 pages of a book', completed: false },
    { item_id: 152, list_id: 24, item_name: 'Turn off screens 1 hour before bed', completed: false },
    { item_id: 153, list_id: 24, item_name: 'Listen to calming music', completed: false },
    { item_id: 154, list_id: 24, item_name: 'Write down thoughts to clear your mind', completed: false },
    { item_id: 155, list_id: 24, item_name: 'Practice breathing exercises', completed: false },

// Items for Weekend Digital Detox (list_id: 25)
    { item_id: 156, list_id: 25, item_name: 'Turn off social media notifications', completed: false },
    { item_id: 157, list_id: 25, item_name: 'Go for a nature walk', completed: false },
    { item_id: 158, list_id: 25, item_name: 'Read a physical book or magazine', completed: false },
    { item_id: 159, list_id: 25, item_name: 'Spend time with family or friends', completed: false },
    { item_id: 160, list_id: 25, item_name: 'Try a new creative hobby', completed: false },
    { item_id: 161, list_id: 25, item_name: 'Unplug devices for the day', completed: false },
    { item_id: 162, list_id: 25, item_name: 'Plan an outdoor activity', completed: false },

// Items for Fitness Challenge Week (list_id: 26)
    { item_id: 163, list_id: 26, item_name: 'Do a 20-minute workout', completed: false },
    { item_id: 164, list_id: 26, item_name: 'Try a new type of exercise', completed: false },
    { item_id: 165, list_id: 26, item_name: 'Track your water intake', completed: false },
    { item_id: 166, list_id: 26, item_name: 'Walk 10,000 steps', completed: false },
    { item_id: 167, list_id: 26, item_name: 'Stretch for 10 minutes', completed: false },
    { item_id: 168, list_id: 26, item_name: 'Do 15 minutes of strength training', completed: false },
    { item_id: 169, list_id: 26, item_name: 'Complete a 30-minute yoga session', completed: false },

// Items for Healthy Meal Prep (list_id: 27)
    { item_id: 170, list_id: 27, item_name: 'Plan meals for the week', completed: false },
    { item_id: 171, list_id: 27, item_name: 'Grocery shop for fresh ingredients', completed: false },
    { item_id: 172, list_id: 27, item_name: 'Chop veggies for easy snacking', completed: false },
    { item_id: 173, list_id: 27, item_name: 'Prepare a big batch of quinoa or rice', completed: false },
    { item_id: 174, list_id: 27, item_name: 'Make overnight oats for breakfast', completed: false },
    { item_id: 175, list_id: 27, item_name: 'Portion out meals into containers', completed: false },
    { item_id: 176, list_id: 27, item_name: 'Prepare a healthy snack like energy balls', completed: false },

  ]);
}
