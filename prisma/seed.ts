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
    await prisma.account.deleteMany();
    await prisma.session.deleteMany();
    await prisma.verificationToken.deleteMany();
    await prisma.user.deleteMany();

    
    // Create products from sample data
    await prisma.product.createMany({ data: sampleDataWomen.products });
    await prisma.user.createMany({ data: sampleDataWomen.users});

    console.log("✅ Database has been seeded successfully.");
  } catch (error) {
    console.error("❌ Failed to seed database:", error);
  } finally {
    await prisma.$disconnect(); // always disconnect
  }
}

// Run the seed
main();
