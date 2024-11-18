import { Router, Request, Response } from "express";
// import { loginUsuario } from '../middlewares/AutenticarUsuario';

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  // if (req.session) {
  //   req.session = null;
  //   res.redirect('/login');
  // } else {
  //   res.redirect('/');
  // }
});

routes.get("/login", (req: Request, res: Response) => {
  // req.session = null;
  res.render("login", { error: "" });
});

// routes.post('/login', loginUsuario);

routes.get("/logout", (req: Request, res: Response) => {
  // req.session = null;
  res.redirect("/");
});

export default routes;
