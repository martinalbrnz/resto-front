import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./layout.module.scss";
export interface layoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: layoutProps) => {
  return (
    <>
      <Head>
        <title>Resto App</title>
        <meta name="description" content="Resto App Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
