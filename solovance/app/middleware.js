import { NextResponse } from 'next/server';

export function middleware(request) {
  const authToken = request.cookies.get('auth-token')?.value;
  const isAuthenticated = request.cookies.get('isAuthenticated')?.value === 'true';

  if (request.nextUrl.pathname.startsWith('/admin') && !isAuthenticated) {
    const absoluteURL = new URL('/', request.nextUrl.origin);
    return NextResponse.redirect(absoluteURL);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};