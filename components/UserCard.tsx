import Link from 'next/link';

interface Props {
  id: string;
  name: string | null;
  age: number | null;
  image: string | null;
}

export default function UserCard({ id, name, age, image }: Props) {
  return (
    <div>
      <img src={image ?? '/vercel.svg'} alt={`${name}'s profile`} />
      <div>
        <h2>
          <Link href={`/users/${id}`}>{name}</Link>
        </h2>
        <p>Age: {age}</p>
      </div>
    </div>
  );
}
