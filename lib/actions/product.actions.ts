'use server';

import { prisma } from '@/lib/prisma';
import { convertToPlainObject } from '../utils';
import { Product } from '@/types/Products';
import { LATEST_PRODUCTS_LIMIT } from '../constants';

//  Get Latest Products
export async function getLatestProducts(): Promise<Product[]> {
    const data = await prisma.product.findMany({
        orderBy: {
            createdAt: 'desc',
        },
        take: LATEST_PRODUCTS_LIMIT,
    });

    const plain = convertToPlainObject(data) as any[];

    // Convert Prisma Decimal/Date types (serialized as strings) into usable types
    return plain.map((p) => ({
        ...p,
        price: Number(p.price),
        originalPrice: Number(p.originalPrice),
        discount: Number(p.discount),
        createdAt: p.createdAt ? String(p.createdAt) : p.createdAt,
        updatedAt: p.updatedAt ? String(p.updatedAt) : p.updatedAt,
    })) as Product[];
}


export async function getProductBySlug(slug?: string) {
  console.log("getProductBySlug slug:", slug);

  if (!slug) return null;

  const data = await prisma.product.findUnique({
    where: { slug },
  });

  if (!data) return null;

  const plain = convertToPlainObject(data) as any;

  return {
    ...plain,
    price: Number(plain.price),
    originalPrice: Number(plain.originalPrice),
    discount: Number(plain.discount),
    createdAt: plain.createdAt ? String(plain.createdAt) : plain.createdAt,
    updatedAt: plain.updatedAt ? String(plain.updatedAt) : plain.updatedAt,
  };
}
