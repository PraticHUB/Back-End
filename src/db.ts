import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "127.0.0.1",
  database: "postgres",
  password: "root",
  port: 5432,
});

// Método query corretamente utilizado
const query = async (text: string, params?: any[]) => {
  const result = await pool.query(text, params);
  return result;
};

export default query;
