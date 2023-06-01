'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export function SignInButton() {
  const { data: session, status } = useSession();
  console.log(session, status);

  if (status === 'authenticated') {
    return (
      <div>
        <Link href='/dashboard'>
          <Image
            src={session.user?.image ?? './public/vercel.svg'}
            alt='Profile Picture'
            width={32}
            height={32}
          />
        </Link>
      </div>
    );
  }

  return <button onClick={() => signIn()}>Sign in</button>;
}

export function SignOutButton() {
  return <button onClick={() => signOut()}>Sign out</button>;
}
