import { authMiddleware } from "@clerk/nextjs"
import { NextResponse } from "next/server"

const getBaseUrl = () => {
  if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV || !process.env.NEXT_PUBLIC_VERCEL_URL) {
    return process.env.BASE_URL
  }

  return process.env.NEXT_PUBLIC_VERCEL_URL.startsWith('localhost')
    ? `http://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
}
const baseUrl = `${getBaseUrl()}`

export default authMiddleware({
  publicRoutes: ["/"],
  afterAuth(auth, req, evt) {
    if (!auth.userId && !auth.isPublicRoute) {
      const signInUrl = new URL('/', req.url)

      signInUrl.searchParams.set('redirect_url', req.url)
      
      return NextResponse.redirect(signInUrl)
    }

    if (auth.userId) {
      const { userId } = auth

      try {
        fetch(`${baseUrl}/api/auth`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId }),
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
})

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}
