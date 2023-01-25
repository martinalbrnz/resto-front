import Link from "next/link";
import {
  FaBox,
  FaCashRegister,
  FaConciergeBell,
  FaUserFriends,
} from "react-icons/fa";
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
      <ul>
        <li>
          <Link href={Routes.Caja} className={styles.link}>
            <FaCashRegister className={styles.itemIcon} />
            <span>Caja</span>
          </Link>
        </li>
        <li>
          <Link href={Routes.Almacen} className={styles.link}>
            <FaBox className={styles.itemIcon} />
            <span>Almacen</span>
          </Link>
        </li>
        <li>
          <Link href={Routes.Comanda} className={styles.link}>
            <FaConciergeBell className={styles.itemIcon} />
            <span>Comanda</span>
          </Link>
        </li>
        <li>
          <Link href={Routes.Personal} className={styles.link}>
            <FaUserFriends className={styles.itemIcon} />
            <span>Personal</span>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
