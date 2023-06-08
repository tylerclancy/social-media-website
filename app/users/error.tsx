'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <p>Uh oh... There's a problem. Try again?</p>
      <button onClick={() => reset()}>Refresh</button>
    </div>
  );
}
