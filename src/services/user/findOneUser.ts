import { clientDataBase } from "../../database/clientDataBase";

export const findOneUser = async (id: string, userId?: string) => {
  const profile = await clientDataBase.user.findUnique({
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

  if (userId) {
    const isFollowing = await clientDataBase.following.findFirst({
      where: {
        userId,
        followId: profile?.followId,
      },
    });

    if (isFollowing) {
      return { ...profile, iFollow: true };
    }
  }

  return { ...profile };
};
