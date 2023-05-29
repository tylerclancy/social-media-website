import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div>
        <h1>Welcome to Sample Blog</h1>
        <p>A simple blog website with a customizable template.</p>
        <p>To get started, sign up for an account!</p>
      </div>
      <div className='login'>
        <Link href='/signup'>
          <button>
            <p>Sign up</p>
          </button>
        </Link>
        <Link href='/login'>
          <button>
            <p>Login</p>
          </button>
        </Link>
      </div>
    </main>
  );
}
