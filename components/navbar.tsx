import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav>
      <Link href={'/'}>
        <Image src='/vercel.svg' alt='App Logo' width='100' height='100' />
      </Link>
      <ul>
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          <Link href={'/posts'}>Posts</Link>
        </li>
        <li>
          <Link href={'/about'}>About</Link>
        </li>
      </ul>
    </nav>
  );
}
