// routes/listItems.js
import express from 'express';
//import knex from '../knex';
import { knex } from "../index.js";

const router = express.Router();

// // GET /lists/:listId/items - Retrieve items from a list
router.get('/:listId/items', async (req, res) => {
  const { listId } = req.params;
  try {
    // const items = await knex('list_items').join('lists', 'lists.list_id', 'list_items.list_id')
    // .where({ 'list_items.list_id': listId });
    // res.status(201).json(items);
    const list = await knex('lists')
    .where({ list_id: listId })
    .first(); 

if (list) {
    const items = await knex('list_items')
        .where({ list_id: listId }); 

    // Return the combined response
    res.status(200).json({
        title: list.title,
        list_id: list.list_id,
        category_id: list.category_id,
        items: items 
    });
} else {
    // If the list is not found
    res.status(404).json({ error: 'List not found' });
}

    
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving items' });
  }
});

// POST /lists/:listId/items - Add a new item to a list
router.post('/:listId/items', async (req, res) => {
  const { listId } = req.params;
  const { item_name, completed } = req.body;
  try {
    const [newItemId] = await knex('list_items').insert({ list_id: listId, item_name, completed });
    const newItem = await knex('list_items').where('item_id', newItemId).first();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: 'Error adding item to list' });
  }
});

// PUT /lists/:listId/items/:itemId - Update an item in a list
router.put('/:listId/items/:itemId', async (req, res) => {
  const { listId, itemId } = req.params;
  const { item_name, completed } = req.body;
  try {
    await knex('list_items').where({ list_id: listId, item_id: itemId }).update({ item_name, completed });
    const updatedItem = await knex('list_items').where('item_id', itemId).first();
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: 'Error updating item' });
  }
});

// DELETE /lists/:listId/items/:itemId - Delete an item from a list
router.delete('/:listId/items/:itemId', async (req, res) => {
  const { listId, itemId } = req.params;
  try {
    await knex('list_items').where({ list_id: listId, item_id: itemId }).del();
    res.status(200).json({ message: 'Item deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting item' });
  }
});

// // POST /lists/:listId/items - Add a new item to a list
// router.post('/:listId/items', async (req, res) => {
//   const { listId } = req.params;
//   const { item_name, completed } = req.body;
//   try {
//     const [newItemId] = await knex('list_items').insert({ list_id: listId, item_name, completed });
//     const newItem = await knex('list_items').where('item_id', newItemId).first();
//     res.status(201).json(newItem);
//   } catch (error) {
//     res.status(500).json({ error: 'Error adding item to list' });
//   }
// });

// // PUT /lists/:listId/items/:itemId - Update an item in a list
// router.put('/:listId/items/:itemId', async (req, res) => {
//   const { listId, itemId } = req.params;
//   const { item_name, completed } = req.body;
//   try {
//     await knex('list_items').where({ list_id: listId, item_id: itemId }).update({ item_name, completed });
//     const updatedItem = await knex('list_items').where('item_id', itemId).first();
//     res.status(200).json(updatedItem);
//   } catch (error) {
//     res.status(500).json({ error: 'Error updating item' });
//   }
// });

// // DELETE /lists/:listId/items/:itemId - Delete an item from a list
// router.delete('/:listId/items/:itemId', async (req, res) => {
//   const { listId, itemId } = req.params;
//   try {
//     await knex('list_items').where({ list_id: listId, item_id: itemId }).del();
//     res.status(200).json({ message: 'Item deleted' });
//   } catch (error) {
//     res.status(500).json({ error: 'Error deleting item' });
//   }
// });

export default router;


