import express from "express";
import { PrismaClient } from "@prisma/client";
import recipeRouter from "./routes/recipeRouter";
import userRouter from "./routes/userRouter";
import likeRoute from "./routes/likeRoute";
import followRoute from "./routes/followRoute";

const prismaCli = new PrismaClient();

const app = express();
app.use(express.json());

app.use("/recipe", recipeRouter);
app.use("/user", userRouter);
app.use("/like", likeRoute);
app.use("/follow", followRoute);

app.listen(3333, () => "server running on port 3333");
