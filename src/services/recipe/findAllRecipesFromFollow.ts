import { clientDataBase } from "../../database/clientDataBase";

export const findAllRecipesFromFollow = async (id: string) => {
  const [{ followers }] = await clientDataBase.follow.findMany({
    select: {
      followers: {
        select: {
          userId: true,
        },
      },
    },
    where: {
      User: {
        id,
      },
    },
  });

  const recipesFromFollow = [] as any[];

  for (let i = 0; i < followers.length; i++) {
    const recipes = await clientDataBase.recipe.findMany({
      where: {
        userId: followers[i].userId,
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
    recipes.map((r) => recipesFromFollow.push(r));
  }

  return { recipesFromFollow };
};
