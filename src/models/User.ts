import query from "../../db";

// Função para inserir um novo usuário
const createUser = async (name: any, email: any, password: any) => {
  const sqlQuery =
    "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *";
  const values = [name, email, password];
  const result = await query(sqlQuery, values); // Aqui query é uma função
  return result.rows[0];
};

// Função para buscar todos os usuários
const getUsers = async () => {
  const result = await query("SELECT * FROM users");
  return result.rows;
};

// Função para atualizar um usuário por ID
const updateUser = async (id: any, name: any, email: any, password: any) => {
  const updateQuery = `
    UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4 RETURNING *;
  `;
  const values = [name, email, password, id];
  const result = await query(updateQuery, values); // Renomeie para updateQuery
  return result.rows[0];
};

// Função para deletar um usuário por ID
const deleteUser = async (id: any) => {
  const deleteQuery = "DELETE FROM users WHERE id = $1";
  await query(deleteQuery, [id]); // Renomeie para deleteQuery
  return "Usuário deletado com sucesso";
};

export default { createUser, getUsers, updateUser, deleteUser };
