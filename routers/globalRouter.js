import express from "express";
import { home, login } from "../controllers/globalControler";
import routes from "../router";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.login, login);

export default globalRouter;
