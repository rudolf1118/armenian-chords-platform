/*
  Warnings:

  - You are about to drop the column `chords` on the `Song` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Artist` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Artist` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Artist" ADD COLUMN     "bio" TEXT,
ADD COLUMN     "birthdate" TIMESTAMP(3),
ADD COLUMN     "country" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "slug" TEXT,
ADD COLUMN     "type" TEXT DEFAULT 'unknown',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Song" DROP COLUMN "chords",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "SongLine" (
    "id" SERIAL NOT NULL,
    "songId" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "order" INTEGER NOT NULL,

    CONSTRAINT "SongLine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChordOnLine" (
    "id" SERIAL NOT NULL,
    "lineId" INTEGER NOT NULL,
    "chord" TEXT NOT NULL,
    "end" INTEGER NOT NULL,
    "start" INTEGER NOT NULL,

    CONSTRAINT "ChordOnLine_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Artist_name_key" ON "Artist"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Artist_slug_key" ON "Artist"("slug");

-- AddForeignKey
ALTER TABLE "SongLine" ADD CONSTRAINT "SongLine_songId_fkey" FOREIGN KEY ("songId") REFERENCES "Song"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChordOnLine" ADD CONSTRAINT "ChordOnLine_lineId_fkey" FOREIGN KEY ("lineId") REFERENCES "SongLine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
