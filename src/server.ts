import express from "express";
import recipeRouter from "./routes/recipeRouter";
import userRouter from "./routes/userRouter";
import likeRoute from "./routes/likeRoute";
import followRoute from "./routes/followRoute";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/recipe", recipeRouter);
app.use("/user", userRouter);
app.use("/like", likeRoute);
app.use("/follow", followRoute);
app.use("/login", userRouter);

app.listen(3333, () => "server running on port 3333");
