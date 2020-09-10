import Head from 'next/head'

export default function Home() {
  return (
    <div className='p-4'>
      <Head>
        <title>devfair client cms</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-6xl">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="mt-0 mb-4 text-gray-600">
          Get started by editing{' '}
          <code>pages/index.js</code>
        </p>

      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </footer>
    </div>
  )
}
