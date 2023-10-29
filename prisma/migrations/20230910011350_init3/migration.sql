/*
  Warnings:

  - You are about to drop the `_FollowToUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_FollowerToUser` table. If the table is not empty, all the data it contains will be lost.
  - The primary key for the `Follower` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Follow` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropIndex
DROP INDEX "_FollowToUser_B_index";

-- DropIndex
DROP INDEX "_FollowToUser_AB_unique";

-- DropIndex
DROP INDEX "_FollowerToUser_B_index";

-- DropIndex
DROP INDEX "_FollowerToUser_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_FollowToUser";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_FollowerToUser";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Follower" (
    "id" TEXT NOT NULL PRIMARY KEY
);
INSERT INTO "new_Follower" ("id") SELECT "id" FROM "Follower";
DROP TABLE "Follower";
ALTER TABLE "new_Follower" RENAME TO "Follower";
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "followerId" TEXT,
    "followId" TEXT,
    CONSTRAINT "User_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES "Follower" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "User_followId_fkey" FOREIGN KEY ("followId") REFERENCES "Follow" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_User" ("email", "id", "name", "password") SELECT "email", "id", "name", "password" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE TABLE "new_Follow" (
    "id" TEXT NOT NULL PRIMARY KEY
);
INSERT INTO "new_Follow" ("id") SELECT "id" FROM "Follow";
DROP TABLE "Follow";
ALTER TABLE "new_Follow" RENAME TO "Follow";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
