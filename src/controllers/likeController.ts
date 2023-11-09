import { Request, Response } from "express";
import { LikeRecipeDto } from "../dtos/likeRecipeDto";
import { likeRecipe } from "../services/Like/likeRecipe";

export const postLikeRecipe = async (req: Request, res: Response) => {
  try {
    const data: LikeRecipeDto = req.body;
    const like = await likeRecipe(data);
    return res.json(like);
  } catch (error) {
    console.log(error);
  }
};
