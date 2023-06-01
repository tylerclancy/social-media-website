import Link from 'next/link';

import { SignInButton, SignOutButton } from '../components/buttons';
import { getServerSession } from 'next-auth';

export default async function Home() {
  const session = await getServerSession();

  return (
    <main>
      <div>
        <h1>Welcome to Sample Blog</h1>
        <p>A simple blog website with a customizable template.</p>
        <p>To get started, please sign in.</p>
      </div>
      <div className='login'>
        <SignInButton />

        {session && <SignOutButton />}
      </div>
    </main>
  );
}
