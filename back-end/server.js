import express from "express";
import dotenv from "dotenv";
import authRouter from "./router/authRouter.js";
import cookieParser from "cookie-parser";
import fileRouter from "./router/fileRouter.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/file", fileRouter);

app.listen(PORT, () => {
    console.log(`Server Started at port ${PORT}`);
})