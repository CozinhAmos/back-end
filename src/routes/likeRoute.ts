import express from "express";
import { postLikeRecipe } from "../controllers/likeController";

const likeRoute = express.Router();

likeRoute.post("/", postLikeRecipe);

export default likeRoute;
