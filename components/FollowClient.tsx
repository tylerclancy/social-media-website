'use client';

import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';

interface Props {
  targetUserId: string;
  isFollowing: boolean;
}

export default function FollowClient({ targetUserId, isFollowing }: Props) {
  const router = useRouter();
  // useTransition is a React hook that helps handle state transitions
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  // A mutation is considered to be in process if either a transition or a fetch operation is in progress
  const isMutating = isFetching || isPending;

  const follow = async () => {
    setIsFetching(true);
    const res = await fetch('/api/follow', {
      method: 'POST',
      body: JSON.stringify({ targetUserId }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    setIsFetching(false);
    console.log(res);

    // The startTransition call updates the app to reflect the new following state
    startTransition(() => {
      router.refresh();
    });
  };

  const unfollow = async () => {
    setIsFetching(true);

    const res = await fetch(`/api/follow?targetUserId=${targetUserId}`, {
      method: 'DELETE',
    });

    setIsFetching(false);
    // The startTransition call updates the app to reflect the new following state
    startTransition(() => router.refresh());
  };

  if (isFollowing) {
    return (
      <button onClick={unfollow}>{!isMutating ? 'Unfollow' : '...'}</button>
    );
  } else {
    return <button onClick={follow}>{!isMutating ? 'Follow' : '...'}</button>;
  }
}
