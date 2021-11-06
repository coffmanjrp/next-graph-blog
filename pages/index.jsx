import Head from 'next/head';

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Next Graph Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello World</h1>
    </div>
  );
}
