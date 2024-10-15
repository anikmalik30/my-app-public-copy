import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // Clear the preview cookie by setting its expiration date to the past
  const res = NextResponse.json({ message: 'Preview mode disabled' });
  res.cookies.set('preview', '', { httpOnly: true, expires: new Date(0) });

  // Optionally, you can redirect to the home page or another page
  // res.redirect('/');

  return res;
}
