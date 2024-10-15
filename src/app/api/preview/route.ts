// API route code
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const slug = searchParams.get('slug');

  if (secret !== process.env.SANITY_PREVIEW_SECRET) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  // Construct the absolute URL
  const redirectUrl = new URL(
    `/blog/${slug}`,
    process.env.NEXT_PUBLIC_SITE_URL,
  ).toString();

  // Enable Preview Mode
  const res = NextResponse.redirect(redirectUrl);
  res.cookies.set('preview', 'true', { httpOnly: true }); // Set a cookie to enable preview mode
  return res;
}
