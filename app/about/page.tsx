export const dynamic = 'force-static';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'This is a simple social media website.',
};

export default async function About() {
  return (
    <div>
      <h1>About</h1>
      <p>This is a simple social media website.</p>
    </div>
  );
}
