import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

//When the first time app mount -> db = new PrismaClient()
//When next reload will check if already have initialize db -> db = globalThis.prisma
export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
