#Como configurar e iniciar o servidor a primeira vez

1 - npm install 
2 - npx prisma generate
3 - npx prisma migrate dev
4 - npm run dev

#Para rodar o banco de dados local trocar a variavel no arquivo prisma/schema.prisma
- A onde estiver env("DATABASE_URL_LOCAL") trocar para -> env("DATABASE_URL")
e rodar os comandos: 
- npx prisma generate 
- npm run dev

#Uma vez configurado, so iniciar
1 - npm run dev