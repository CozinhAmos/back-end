import express from "express";
import { PrismaClient } from "@prisma/client";

const prismaCli = new PrismaClient();

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  res.json("Hello world");
});

app.get("/createUser", async (req, res) => {
  const follow = await prismaCli.follow.create({
    data: {
      name: "Leandro",
    },
  });

  const user = await prismaCli.user.create({
    data: {
      name: "Leandro Girotto",
      email: "leandro@gmail.com",
      password: "123",
      followId: follow.id,
    },
  });

  return res.json(user);
});

// funcao para adicionar seguidor
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
