import { Router } from "express";
import RegisterLink from "./controllers/RegisterLinkController";

const routes = Router();

routes.post("/", new RegisterLink().controller);

routes.get("/:identifier");

export default routes;
