import express from "express";
import {
  getAllUser,
  getOneUser,
  postCreateUser,
  postRealiseLogin,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.post("/", postCreateUser);

userRouter.post("/login", postRealiseLogin);

userRouter.get("/all", getAllUser);

userRouter.get("/:id", getOneUser);

userRouter.post("/:id", getOneUser);

export default userRouter;
