import express from "express";
import { postFollowUser } from "../controllers/followController";

const followRoute = express.Router();

followRoute.post("/", postFollowUser);

export default followRoute;
