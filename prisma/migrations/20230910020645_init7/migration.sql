/*
  Warnings:

  - You are about to drop the column `userId` on the `Follow` table. All the data in the column will be lost.
  - Added the required column `followId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Follow" (
    "id" TEXT NOT NULL PRIMARY KEY
);
INSERT INTO "new_Follow" ("id") SELECT "id" FROM "Follow";
DROP TABLE "Follow";
ALTER TABLE "new_Follow" RENAME TO "Follow";
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "followId" TEXT NOT NULL,
    CONSTRAINT "User_followId_fkey" FOREIGN KEY ("followId") REFERENCES "Follow" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_User" ("email", "id", "name", "password") SELECT "email", "id", "name", "password" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_followId_key" ON "User"("followId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
