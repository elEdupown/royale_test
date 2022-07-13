import Link from 'next/link';

export default function clan() {
  return (
    <>
      <h1>El clan</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}