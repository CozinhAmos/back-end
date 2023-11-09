import { clientDataBase } from "../../database/clientDataBase";
import { CreateRecipeDto } from "../../dtos/createRecipeDto";

export const createRecipe = async (data: CreateRecipeDto) => {
  return await clientDataBase.recipe.create({
    data: {
      name: data.name,
      description: data.description,
      ingredients: data.ingredients,
      preparation: data.preparation,
      userId: data.userId,
    },
  });
};
