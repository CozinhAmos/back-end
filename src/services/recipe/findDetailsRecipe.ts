import { clientDataBase } from "../../database/clientDataBase";

export const findDetailsRecipe = async (id: string) => {
  return await clientDataBase.recipe.findUnique({
    where: {
      id
    },
  });
};
