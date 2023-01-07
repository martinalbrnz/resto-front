import Link from "next/link";
import { MdRestaurantMenu } from "react-icons/md";
import { Routes } from "../../../constants/routes";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        <MdRestaurantMenu className={styles.icon} />
        <h1 className={styles.title}>RestoApp</h1>
      </a>
      <ul className={styles.navbar}>
        <li className={styles.opc}>
          <Link href={Routes.Caja} className={styles.link}>
            <span>Caja</span>
          </Link>
        </li>
        <li className={styles.opc}>
          <Link href={Routes.Almacen} className={styles.link}>
            <span>Almacen</span>
          </Link>
        </li>
        <li className={styles.opc}>
          <Link href={Routes.Comanda} className={styles.link}>
            <span>Comanda</span>
          </Link>
        </li>
        <li className={styles.opc}>
          <Link href={Routes.Personal} className={styles.link}>
            <span>Personal</span>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
