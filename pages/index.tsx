import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>TEC Senior Web Dev Assessment</title>
        <meta name='keywords' content='TEC Senior Web Dev Assessment' />
        <meta
          name='description'
          content='Something more meaningful about the TEC Senior Web Dev Assessment'
        />
      </Head>

      <main className='max-w-large mx-auto border border-black px-6 mt-8'>
        <h1 className='uppercase'>TEC Web Dev Assessment</h1>
      </main>
    </div>
  );
}
