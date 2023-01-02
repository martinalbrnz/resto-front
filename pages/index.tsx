import Head from 'next/head';
import { Layout, Tables } from '../components';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Resto App</title>
        <meta name="description" content="Resto App Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Tables />
      </Layout>
    </>
  );
}
