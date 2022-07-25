import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  console.log("meeeee", request.nextUrl.pathname.startsWith('/paycheck'))
  if (request.nextUrl.pathname.startsWith('/paycheck')) {
    return NextResponse.redirect('/')
  }

  if (request.nextUrl.pathname.startsWith('/servicedesk')) {
    return NextResponse.redirect('/')
  }
}

export const config = {
  matcher: ['/paycheck', '/servicedesk'],
}