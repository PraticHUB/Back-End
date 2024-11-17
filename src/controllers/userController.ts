import User from "../models/User"; // Importando o objeto padrão
const { createUser, getUsers, updateUser, deleteUser } = User;

import { Request, Response } from "express"; // Importando os tipos do Express

// Função de criação de usuário
// export async function createUserController(req: Request, res: Response) {
//   try {
//     const { name, email, password } = req.body;
//     const newUser = await createUser(name, email, password);
//     res.status(201).json(newUser);
//   } catch (err) {
//     console.error("Erro ao criar usuário:", err);
//     res.status(500).send("Erro ao criar usuário");
//   }
// }

// Função para buscar todos os usuários
export async function getUsersController(req: Request, res: Response) {
  try {
    const users = getUsersModel();
    res.json(users);
  } catch (err) {
    console.error("Erro ao buscar usuários:", err);
    res.status(500).send("Erro ao buscar usuários");
  }
}

function getUsersModel() {
  throw new Error("Function not implemented.");
}
// Função para atualizar um usuário
// export async function updateUserController(req: Request, res: Response) {
//   try {
//     const { id } = req.params;
//     const { name, email, password } = req.body;
//     const updatedUser = await updateUser(id, name, email, password);
//     if (updatedUser) {
//       res.json(updatedUser);
//     } else {
//       res.status(404).send("Usuário não encontrado");
//     }
//   } catch (err) {
//     console.error("Erro ao atualizar usuário:", err);
//     res.status(500).send("Erro ao atualizar usuário");
//   }
// }

// Função para deletar um usuário
// export async function deleteUserController(req: Request, res: Response) {
//   try {
//     const { id } = req.params;
//     await deleteUser(id);
//     res.send("Usuário deletado com sucesso");
//   } catch (err) {
//     console.error("Erro ao deletar usuário:", err);
//     res.status(500).send("Erro ao deletar usuário");
//   }
// }

// function getUsersModel() {
//   throw new Error("Function not implemented.");
// }
