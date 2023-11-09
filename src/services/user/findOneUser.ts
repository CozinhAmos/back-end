import { clientDataBase } from "../../database/clientDataBase";

export const findOneUser = async (id: string) => {
  return await clientDataBase.user.findUnique({
    where: {
      id,
    },
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
