import { clientDataBase } from "../../database/clientDataBase";

export const findAllUser = async () => {
  return await clientDataBase.user.findMany({
    select: {
      id: true,
      followId: true,
      name: true,
      _count: {
        select: {
          followers: true,
          following: true,
          recipes: true,
          likedRecipes: true,
        },
      },
    },
  });
};
