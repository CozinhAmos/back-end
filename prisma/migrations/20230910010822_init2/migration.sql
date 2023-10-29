/*
  Warnings:

  - You are about to drop the column `userId` on the `Follower` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Follow` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "_FollowerToUser" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_FollowerToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Follower" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_FollowerToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_FollowToUser" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_FollowToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Follow" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_FollowToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Follower" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);
INSERT INTO "new_Follower" ("id") SELECT "id" FROM "Follower";
DROP TABLE "Follower";
ALTER TABLE "new_Follower" RENAME TO "Follower";
CREATE TABLE "new_Follow" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);
INSERT INTO "new_Follow" ("id") SELECT "id" FROM "Follow";
DROP TABLE "Follow";
ALTER TABLE "new_Follow" RENAME TO "Follow";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_FollowerToUser_AB_unique" ON "_FollowerToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_FollowerToUser_B_index" ON "_FollowerToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FollowToUser_AB_unique" ON "_FollowToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_FollowToUser_B_index" ON "_FollowToUser"("B");
