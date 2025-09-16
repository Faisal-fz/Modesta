import { neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";
import ws from "ws";

// Enable WebSocket for Neon
neonConfig.webSocketConstructor = ws;

// Use your Neon connection string from .env
const connectionString = process.env.DATABASE_URL!;

// Create Prisma adapter using the connection string (no Pool)
const adapter = new PrismaNeon({ connectionString });

// Instantiate Prisma Client with the Neon adapter
export const prisma = new PrismaClient({ adapter }).$extends({
  result: {
    product: {
      price: {
        compute(product) {
          return product.price.toString();
        },
      },
      rating: {
        compute(product) {
          return product.rating.toString();
        },
      },
    },
  },
});
