import { Router } from "express";
import { upload } from "../middleware/uploadMiddleware.js";
import { uploadFile } from "../controllers/fileController.js";

const fileRouter = Router();

fileRouter.post("/upload", upload.single("file"), uploadFile);

export default fileRouter;