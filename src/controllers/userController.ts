import { Request, Response } from "express";
import { CreateUserDto } from "../dtos/createUserDto";
import { createUser } from "../services/user/createUser";
import { findOneUser } from "../services/user/findOneUser";
import { findLoginUser } from "../services/user/findLoginUser";
import { FollowUserDto } from "../dtos/followUserDto";
import { followUser } from "../services/follow/followUser";
import { findAllUser } from "../services/user/findAllUser";

export const postCreateUser = async (req: Request, res: Response) => {
  try {
    const data: CreateUserDto = req.body;
    const result = await createUser(data);
    return res.json(result);
  } catch (error) {
    console.log(error);
  }
};

export const postRealiseLogin = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await findLoginUser(data);
    if (!result) {
      return res.json({
        status: "negado",
        msg: "Usuario invalido!",
      });
    }
    return res.json({ status: "liberado", result });
  } catch (error) {}
};

export const getOneUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const user = await findOneUser(id);
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await findAllUser();
    return res.json(result);
  } catch (error) {
    console.log(error);
  }
};
