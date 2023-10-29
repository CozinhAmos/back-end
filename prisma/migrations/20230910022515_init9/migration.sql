-- AlterTable
ALTER TABLE "Follow" ADD COLUMN "name" TEXT;

-- CreateTable
CREATE TABLE "Followers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT,
    "followId" TEXT,
    CONSTRAINT "Followers_followId_fkey" FOREIGN KEY ("followId") REFERENCES "Follow" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Followers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
