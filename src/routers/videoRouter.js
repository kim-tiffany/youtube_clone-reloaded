import express from "express";
import {
    see,
    edit,
    upload,
    deleteVideo,
} from "../controllers/videoControllers";

const videoRouter = express.Router();

videoRouter.get("/upload", upload);
videoRouter.get("/:id(\\d+)/watch", see);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);

export default videoRouter;
