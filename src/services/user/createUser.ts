import { clientDataBase } from "../../database/clientDataBase";
import { CreateUserDto } from "../../dtos/createUserDto";

export const createUser = async (data: CreateUserDto) => {
  const followUser = await clientDataBase.follow.create({
    data: {
      name: data.name,
    },
  });

  const user = await clientDataBase.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: data.password,
      followId: followUser.id,
    },
  });

  return user;
};
