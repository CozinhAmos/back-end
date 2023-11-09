import { Request, Response } from "express";
import { FollowUserDto } from "../dtos/followUserDto";
import { followUser } from "../services/follow/followUser";

export const postFollowUser = async (req: Request, res: Response) => {
    try {
      const data: FollowUserDto = req.body;
      const result = await followUser(data);
      return res.json(result);
    } catch (error) {
      console.log(error);
    }
  };