// routes/categories.js
import express from 'express';
//import knex from '../knex';
import { knex } from "../index.js";

const router = express.Router();

// GET /categories - Get all categories
router.get('/', async (req, res) => {
  try {
    const categories = await knex('categories').select('*');
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching categories' });
  }
});

// GET /categories/:categoryId/lists - Get all lists within a category
router.get('/:categoryId/lists', async (req, res) => {
  const { categoryId } = req.params;
  try {
    const lists = await knex('lists').where('category_id', categoryId).select('*');
    res.status(200).json(lists);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching lists within category' });
  }
});

// GET /categories/:categoryId/lists/:listId - Get a list within a category
router.get('/:categoryId/lists/:listId', async (req, res) => {
  const { categoryId, listId } = req.params;
  try {
    const list = await knex('lists').where({ category_id: categoryId, list_id: listId }).first();
    if (list) {
      res.status(200).json(list);
    } else {
      res.status(404).json({ error: 'List not found in this category' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching list within category' });
  }
});

export default router;
