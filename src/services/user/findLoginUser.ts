import { clientDataBase } from "../../database/clientDataBase";

export const findLoginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return await clientDataBase.user.findUnique({
    where: {
      email,
      password,
    },
  });
};
