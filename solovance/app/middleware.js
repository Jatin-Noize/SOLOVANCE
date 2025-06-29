import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl.clone();
  const authToken = request.cookies.get('admin-auth');

  // Protect admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    if (!authToken) {
      url.pathname = '/';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}