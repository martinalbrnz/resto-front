import Head from "next/head";
import { useEffect } from "react";
import { Layout } from "../components";

export default function Home() {
  useEffect(() => {
    console.log();
  }, []);

  return (
    <>
      <Head>
        <title>Resto App</title>
        <meta name="description" content="Resto App Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div>Hello world!</div>
      </Layout>
    </>
  );
}
