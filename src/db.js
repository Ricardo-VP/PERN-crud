const { Pool } = require("pg");
import { DB_PASSWORD } from "dotenv/config";

const pool = new Pool({
  user: "postgres",
  password: DB_PASSWORD,
  host: "localhost",
  port: 5432,
  database: "taskdb",
});

module.exports = pool;