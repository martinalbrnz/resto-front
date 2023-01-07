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
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
