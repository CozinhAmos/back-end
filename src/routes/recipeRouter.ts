import express from "express";
import {
  getAllRecipes,
  getAllRecipesFromFollow,
  getDetailsRecipe,
  getAllMyRecipes,
  postCreateRecipe,
} from "../controllers/reciperController";

const recipeRouter = express.Router();

recipeRouter.post("/", postCreateRecipe);

recipeRouter.get("/all", getAllRecipes);

recipeRouter.post("/:id/network", getAllRecipesFromFollow);

recipeRouter.get("/details/:id", getDetailsRecipe);

recipeRouter.get("/my/:id", getAllMyRecipes);

export default recipeRouter;
