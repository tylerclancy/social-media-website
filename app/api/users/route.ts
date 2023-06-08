import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

// Query all users from database
export async function GET(request: Request) {
  const users = await prisma.user.findMany();
  console.log(users);

  return NextResponse.json(users);
}
