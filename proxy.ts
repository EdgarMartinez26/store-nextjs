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

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const response = NextResponse.next();

  // 1️⃣ Always ensure cart cookie exists
  if (!request.cookies.get('sessionCartId')) {
    const sessionCartId = crypto.randomUUID();
    
    //clone the request headers
    const newRequestHeader = new Headers(request.headers);
    //set the cookie header to include the new cart id

    const response = NextResponse.next({
      request: {
        headers: newRequestHeader,
      },
    })

    //set newly created cart id in cookie
    response.cookies.set('sessionCartId', sessionCartId) 

    return response;
  }

  // 2️⃣ Check if route is protected
  const isProtected = protectedPaths.some((p) =>
    p.test(pathname)
  );

  if (!isProtected) {
    return response;
  }

  // 3️⃣ Validate token for protected routes
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!token) {
    return NextResponse.redirect(
      new URL('/sign-in', request.url)
    );
  }

  return response;
}

export const config = {
  matcher: '/:path*',
};
