import { prisma } from '@/lib/prisma';
import { Metadata } from 'next';
import FollowButton from '@/components/FollowButton';

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetaData({ params }: Props): Promise<Metadata> {
  const user = await prisma.user.findUnique({ where: { id: params.id } });

  return { title: `User profile of ${user?.name}` };
}

export default async function UserProfile({ params }: Props) {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  const { name, bio, image, id } = user ?? {};

  return (
    <div>
      <h1>{name}</h1>

      <img src={image ?? '/vercel.svg'} alt={`${name}'s profile`} />

      <h3>Bio</h3>
      <p>{bio}</p>

      {/* @ts-expect-error Server Component */}
      <FollowButton targetUserId={params.id} />
    </div>
  );
}
