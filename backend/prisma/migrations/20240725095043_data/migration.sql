-- CreateEnum
CREATE TYPE "status" AS ENUM ('pending', 'free', 'Standard', 'Premium');

-- CreateTable
CREATE TABLE "farmer" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "adress" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "profileImage" TEXT,
    "status" "status" NOT NULL DEFAULT 'pending',

    CONSTRAINT "farmer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "experts" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "background" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    "certificate" TEXT NOT NULL,

    CONSTRAINT "experts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "farmtools" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "farmtools_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "weather" (
    "id" SERIAL NOT NULL,
    "date" TEXT NOT NULL,
    "day" TEXT NOT NULL,
    "temperature" TEXT NOT NULL,
    "sky" TEXT NOT NULL,
    "observations" TEXT NOT NULL,
    "feelsLike" TEXT NOT NULL,
    "windDisplay" TEXT NOT NULL,
    "windSpeed" TEXT NOT NULL,

    CONSTRAINT "weather_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prices" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "prices_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "farmer_email_key" ON "farmer"("email");
