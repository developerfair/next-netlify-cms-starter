import Head from "next/head";
import { attributes } from "../content/index.md";

export default function Home() {
  const { header, hero } = attributes;
  console.log(attributes);
  debugger;

  return (
    <div className="p-4">
      <Head>
        <title>{header.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-6xl">{hero.heading}</h1>

        <p className="mt-0 mb-4 text-gray-600">{hero.detail}</p>
      </main>
    </div>
  );
}
