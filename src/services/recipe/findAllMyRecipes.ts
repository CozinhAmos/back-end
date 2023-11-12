import { clientDataBase } from "../../database/clientDataBase";

export const findAllMyRecipes = async (userId: string) => {
  const recipes = await clientDataBase.recipe.findMany({
    where: {
      userId,
    },
    select: {
      id: true,
      name: true,
      User: {
        select: {
          id: true,
          name: true,
        },
      },
      _count: true,
    },
  });

  return { recipes };
};