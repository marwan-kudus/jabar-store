import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    // Jika user mencoba akses halaman admin tapi bukan admin
    if (
      req.nextUrl.pathname.startsWith('/admin') &&
      req.nextauth.token?.role !== 'ADMIN'
    ) {
      return NextResponse.rewrite(new URL('/unauthorized', req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Halaman yang memerlukan autentikasi
        const protectedPaths = ['/dashboard', '/profile', '/admin'];
        const isProtectedPath = protectedPaths.some((path) =>
          req.nextUrl.pathname.startsWith(path)
        );

        // Jika halaman dilindungi, user harus login
        if (isProtectedPath) {
          return !!token;
        }

        // Halaman lain bisa diakses tanpa login
        return true;
      },
    },
  }
);

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
};
