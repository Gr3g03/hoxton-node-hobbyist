/*
  Warnings:

  - You are about to drop the `Hobbie` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserHobies` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Hobbie";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "UserHobies";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Hobie" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Hobie_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "userHobie" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "hobieId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "userHobie_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "userHobie_hobieId_fkey" FOREIGN KEY ("hobieId") REFERENCES "Hobie" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
