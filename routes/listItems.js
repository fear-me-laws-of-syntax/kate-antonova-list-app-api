// routes/listItems.js
import express from 'express';
import knex from '../knex';

const router = express.Router();

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

export default router;