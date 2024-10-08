import express from "express";
import {
    getJoin,
    postJoin,
    getLogin,
    postLogin,
} from "../controllers/userControllers";
import { home, search } from "../controllers/videoControllers";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.route("/join").get(getJoin).post(postJoin);
globalRouter.route("/login").get(getLogin).post(postLogin);
globalRouter.get("/search", search);

export default globalRouter;
