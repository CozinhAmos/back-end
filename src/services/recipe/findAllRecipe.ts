import { clientDataBase } from "../../database/clientDataBase";

export const findAllRecipe = async () => {
  const recipes = await clientDataBase.recipe.findMany({
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

  return recipes.map((recipe) => {
    return {
      id: recipe.id,
      name: recipe.name,
      User: recipe.User,
      likes: recipe._count.likes,
    };
  });
};
