require("dotenv").config();
import initKnex from "knex";
import knexConfiguration from "./knexfile.js";
import express from "express";
// import warehouseRoute from "./routes/warehouse.js";
// import inventoryRoute from "./routes/warehouseInventory.js";
import cors from "cors";

const PORT = process.env.PORT || 5050;

export const knex = initKnex(knexConfiguration);
const app = express();
app.use(express.json());
app.use(cors());

// app.use("/api/warehouses", warehouseRoute);
// app.use("/api/inventories", inventoryRoute);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));