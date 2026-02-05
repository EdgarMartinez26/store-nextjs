import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

const protectedPaths = [
  /^\/shipping-address/,
  /^\/payment-method/,
  /^\/place-order/,
  /^\/profile/,
  /^\/user\/.*/,
  /^\/order\/.*/,
  /^\/admin/,
];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProtected = protectedPaths.some((p) =>
    p.test(pathname)
  );

  if (!isProtected) {
    return NextResponse.next();
  }

  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!token) {
    return NextResponse.redirect(
      new URL('/sign-in', request.url)
    );
  }

  // Ensure sessionCartId cookie exists
  if (!request.cookies.get('sessionCartId')) {
    const response = NextResponse.next();
    response.cookies.set(
      'sessionCartId',
      crypto.randomUUID()
    );
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/shipping-address',
    '/payment-method',
    '/place-order',
    '/profile',
    '/user/:path*',
    '/order/:path*',
    '/admin/:path*',
  ],
};
