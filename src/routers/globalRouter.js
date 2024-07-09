import express from "express";
import { edit, join, login } from "../controllers/userControllers";
import { trending, search } from "../controllers/videoControllers";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter;
