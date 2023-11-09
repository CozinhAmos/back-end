import { clientDataBase } from "../../database/clientDataBase";
import { FollowUserDto } from "../../dtos/followUserDto";

export const followUser = async ({ followId, userId }: FollowUserDto) => {
  const validation = await clientDataBase.following.findFirst({
    where: {
      userId,
      followId,
    },
  });

  if (validation) {
    return { msg: "Já esta seguindo" };
  }

  const resp = await clientDataBase.following.create({
    data: {
      userId,
      followId,
    },
    select: {
      follow: {
        select: {
          User: {
            select: {
              id: true,
            },
          },
        },
      },
      user: {
        select: {
          followId: true,
        },
      },
    },
  });

  await clientDataBase.followers.create({
    data: {
      followId: resp.user.followId,
      userId: resp.follow.User?.id,
    },
  });

  return { msg: "Seguindo" };
};
