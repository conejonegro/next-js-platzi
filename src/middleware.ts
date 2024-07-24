import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export const config = {
   matcher: [
      '/login/:path*',
      '/registro/:path*'
   ]
 }
 
export function middleware(request: NextRequest) {
   const cookies = request.cookies;
   const accessTokenCookie = cookies.get('accessToken');
   if (accessTokenCookie) {
     return (
      NextResponse.redirect(new URL('/tienda', request.url))
   );
   } else {
     return NextResponse.next();
   }
 }