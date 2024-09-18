import express from 'express';
import knex from '../knex';  

const router = express.Router();

// GET /lists - Get all lists
router.get('/', async (req, res) => {
  try {
    const lists = await knex('lists').select('*');
    res.status(200).json(lists);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching lists' });
  }
});

// POST /lists - Create a new list
router.post('/', async (req, res) => {
  const { category_id, title } = req.body;
  try {
    const [newListId] = await knex('lists').insert({ category_id, title });
    const newList = await knex('lists').where('list_id', newListId).first();
    res.status(201).json(newList);
  } catch (error) {
    res.status(500).json({ error: 'Error creating list' });
  }
});

// GET /lists/:listId - Get a specific list by ID
router.get('/:listId', async (req, res) => {
  const { listId } = req.params;
  try {
    const list = await knex('lists').where('list_id', listId).first();
    if (list) {
      res.status(200).json(list);
    } else {
      res.status(404).json({ error: 'List not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching list' });
  }
});

// PUT /lists/:listId - Update a specific list by ID
router.put('/:listId', async (req, res) => {
  const { listId } = req.params;
  const { category_id, title } = req.body;
  try {
    await knex('lists').where('list_id', listId).update({ category_id, title });
    const updatedList = await knex('lists').where('list_id', listId).first();
    res.status(200).json(updatedList);
  } catch (error) {
    res.status(500).json({ error: 'Error updating list' });
  }
});

// DELETE /lists/:listId - Delete a specific list by ID
router.delete('/:listId', async (req, res) => {
  const { listId } = req.params;
  try {
    await knex('lists').where('list_id', listId).del();
    res.status(200).json({ message: 'List deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting list' });
  }
});

export default router;
