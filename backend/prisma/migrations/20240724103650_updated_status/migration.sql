-- AlterEnum
ALTER TYPE "status" ADD VALUE 'pending';

-- AlterTable
ALTER TABLE "farmer" ALTER COLUMN "status" SET DEFAULT 'pending';
