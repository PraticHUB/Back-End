import express from "express";
import bodyParser from "body-parser";
// import {
//   createUser,
//   getUsers,
//   updateUser,
//   deleteUser,
// } from "./controllers/userController";

import cors from "cors";

const app = express();
const PORT = 3333;

app.use(bodyParser.json());
app.use(cors());

//teste commit teste

// Rotas de CRUD para usuários
// app.post("/users", userController.createUser);
// app.get("/users", userController.getUsers);
// app.put("/users/:id", userController.updateUser);
// app.delete("/users/:id", userController.deleteUser);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
