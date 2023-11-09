import { clientDataBase } from "../../database/clientDataBase";
import { LikeRecipeDto } from "../../dtos/likeRecipeDto";

export const likeRecipe = async ({ userId, recipeId }: LikeRecipeDto) => {
  const validation = await clientDataBase.like.findFirst({
    where: {
      recipeId,
      userId,
    },
  });

  if (validation) {
    return { msg: "Já curtido!" };
  }

  return await clientDataBase.like.create({
    data: {
      recipeId,
      userId,
    },
  });
};
