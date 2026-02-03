import { PrismaClient } from './generated/prisma/client';
import { neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import ws from 'ws';

// Configure Neon to use WebSocket connections
neonConfig.webSocketConstructor = ws;

// PrismaNeon expects the connection **config**, not a Pool instance
const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL!,
});

// Make Prisma a singleton (important for Next.js hot reloads)
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({ adapter });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
