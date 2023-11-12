import { Request, Response } from "express";
import { CreateRecipeDto } from "../dtos/createRecipeDto";
import { findDetailsRecipe } from "../services/recipe/findDetailsRecipe";
import { createRecipe } from "../services/recipe/createRecipe";
import { findAllRecipe } from "../services/recipe/findAllRecipe";
import { findAllRecipesFromFollow } from "../services/recipe/findAllRecipesFromFollow";
import { findAllMyRecipes } from "../services/recipe/findAllMyRecipes";

export const getDetailsRecipe = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const recipe = await findDetailsRecipe(id);
    return res.json(recipe);
  } catch (error) {
    console.log(error);
  }
};

export const postCreateRecipe = async (req: Request, res: Response) => {
  try {
    const data: CreateRecipeDto = req.body;
    const recipe = await createRecipe(data);
    return res.json(recipe);
  } catch (error) {
    console.log(error);
  }
};

export const getAllRecipes = async (req: Request, res: Response) => {
  try {
    const recipes = await findAllRecipe();
    return res.json(recipes);
  } catch (error) {
    console.log(error);
  }
};

export const getAllRecipesFromFollow = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const recipes = await findAllRecipesFromFollow(id);
    return res.json(recipes);
  } catch (error) {
    console.log(error);
  }
};

export const getAllMyRecipes = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const recipes = await findAllMyRecipes(id);
    return res.json(recipes);
  } catch (error) {
    console.log(error);
  }
};

