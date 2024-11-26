import { Pool } from "pg";

// Conectar ao banco de dados PostgreSQL
const pool = new Pool({
  user: "postgres", // Usuário do banco de dados
  host: "127.0.0.1", // O host local onde o PostgreSQL está rodando
  database: "praticHUB", // Nome do banco de dados
  password: "root", // Senha do usuário (definido no comando Docker)
  port: 5432, // Porta do PostgreSQL
});

// Verificar a conexão
const testConnection = async () => {
  try {
    await pool.connect(); // Tenta conectar ao banco
    console.log("Conexão com o banco de dados praticHUB bem-sucedida!");
  } catch (err) {
    console.error("Erro ao conectar ao banco de dados", err);
  }
};

// Chama a função para testar a conexão
testConnection();

// Método query corretamente utilizado
const query = async (text: string, params?: any[]) => {
  const result = await pool.query(text, params);
  return result;
};

export default query;
