require("dotenv").config();
import initKnex from "knex";
import knexConfiguration from "./knex.js";
import express from "express";
import cors from "cors";

const knex = initKnex(knexConfiguration);
export { knex };

import listRoutes from './routes/lists.js';
import listItemsRoutes from './routes/listItems.js';
import categoryRoutes from './routes/categories.js';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.use('/lists', listRoutes);              
app.use('/lists/:listId/items', listItemsRoutes);
app.use('/categories', categoryRoutes);        

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
