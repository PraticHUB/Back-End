import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "127.0.0.1",
  database: "postgres",
  password: "root",
  port: 5432,
});

// Verificar a conexão
const testConnection = async () => {
  try {
    await pool.connect(); // Tenta conectar ao banco
    console.log("Conexão com o banco de dados bem-sucedida!");
  } catch (err) {
    console.error("Erro ao conectar ao banco de dados", err);
  }
};

// Chama a função para testar a conexão
// testConnection();

// Método query corretamente utilizado
const query = async (text: string, params?: any[]) => {
  const result = await pool.query(text, params);
  return result;
};

export default query;
