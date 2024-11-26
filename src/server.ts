import express from "express";
import bodyParser from "body-parser";
import { getUsersController } from "./controllers/userController";

import cors from "cors";

const app = express();
const PORT = 3333;

app.use(bodyParser.json());
app.use(cors());

//teste commit teste

// Rotas de CRUD para usuários
app.get("/login", getUsersController);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
