import express from "express";
import { PrismaClient } from "@prisma/client";

const prismaCli = new PrismaClient();

const app = express();

app.post("/:idUser/follow/:idUserToFollow", async (req, res) => {
  const idUser = req.params.idUser;
  const idUserToFollow = req.params.idUserToFollow;

  //Adiciona o usuario como seguidor
  const { followId } = await prismaCli.user.findUnique({
    where: {
      id: idUserToFollow,
    },
    select: {
      followId: true,
    },
  });

  await prismaCli.following.create({
    data: {
      userId: idUser,
      followId: followId,
    },
  });

  const { followId: id } = await prismaCli.user.findUnique({
    where: {
      id: idUser,
    },
    select: {
      followId: true,
    },
  });

  await prismaCli.followers.create({
    data: {
      userId: idUserToFollow,
      followId: id,
    },
  });

  res.json({ resp: "Ta seguindo" });
});

app.listen(3333, () => "server running on port 3333");
