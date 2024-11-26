import User from "../models/User"; // Importando o objeto padrão
const { getUsers } = User;

import { Request, Response } from "express"; // Importando os tipos do Express

// Função para buscar todos os usuários
export async function getUsersController(req: Request, res: Response) {
  try {
    const users = await getUsers(); // Busca todos os usuários
    res.json(users);
  } catch (err) {
    console.error("Erro ao buscar usuários:", err);
    res.status(500).send("Erro ao buscar usuários");
  }
}
