import { PrismaClient } from "@/lib/generated/prisma/client"; // adjust if needed
import { PrismaPg } from '@prisma/adapter-pg';
import sampleDataWomen from "../db/sample-data";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL || "",       
})

const prisma = new PrismaClient({adapter});

async function main() {
  try {
    console.log("Seeding database...");

    // Delete existing products
    await prisma.product.deleteMany();
    
    // Create products from sample data
    await prisma.product.createMany({
      data: sampleDataWomen.products,
    });

    console.log("✅ Database has been seeded successfully.");
  } catch (error) {
    console.error("❌ Failed to seed database:", error);
  } finally {
    await prisma.$disconnect(); // always disconnect
  }
}

// Run the seed
main();
