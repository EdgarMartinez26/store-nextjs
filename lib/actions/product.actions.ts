'use server';

import { prisma } from '@/lib/prisma';
import { convertToPlainObject } from '../utils';
import { Product } from '@/types/Products';
import { LATEST_PRODUCTS_LIMIT } from '../constants';

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
