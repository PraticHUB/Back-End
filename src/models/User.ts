import query from "../db";

// Função para inserir um novo usuário
const createUser = async (name: string, email: string, password: string) => {
  const sqlQuery =
    "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *";
  const values = [name, email, password];
  const result = await query(sqlQuery, values); // Aqui query é a função que conecta ao banco
  return result.rows[0]; // Retorna o primeiro usuário inserido
};

// Função para buscar todos os usuários
const getUsers = async () => {
  const result = await query("SELECT * FROM login"); // Aqui query é a função que conecta ao banco
  return result.rows; // Retorna todos os usuários
};

// Função para atualizar um usuário por ID
const updateUser = async (
  id: number,
  name: string,
  email: string,
  password: string
) => {
  const updateQuery = `
    UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4 RETURNING *;
  `;
  const values = [name, email, password, id];
  const result = await query(updateQuery, values); // Renomeie para updateQuery
  return result.rows[0]; // Retorna o usuário atualizado
};

// Função para deletar um usuário por ID
const deleteUser = async (id: number) => {
  const deleteQuery = "DELETE FROM users WHERE id = $1";
  await query(deleteQuery, [id]); // Renomeie para deleteQuery
  return "Usuário deletado com sucesso"; // Retorna mensagem de sucesso
};

export default { createUser, getUsers, updateUser, deleteUser };
