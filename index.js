import initKnex from "knex";
import knexConfiguration from "./knex.js";
import express from "express";
import cors from "cors";
import listRoutes from './routes/lists.js';
import listItemsRoutes from './routes/listItems.js';
import categoryRoutes from './routes/categories.js';

export const knex = initKnex(knexConfiguration);

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.use('/lists', listRoutes);              
app.use('/lists', listItemsRoutes);


app.use('/categories', categoryRoutes);        

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
