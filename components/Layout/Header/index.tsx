import Link from "next/link";
import { MdRestaurantMenu } from "react-icons/md";
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        <MdRestaurantMenu className={styles.icon} />
        <h1 className={styles.title}>RestoApp</h1>
      </a>
      <ul className={styles.navbar}>
        <li className={styles.opc}>
          <Link href="/" className={styles.link}>
            Caja
          </Link>
        </li>
        <li className={styles.opc}>
          <Link href="/" className={styles.link}>
            Almacen
          </Link>
        </li>
        <li className={styles.opc}>
          <Link href="/" className={styles.link}>
            Comanda
          </Link>
        </li>
        <li className={styles.opc}>
          <Link href="/" className={styles.link}>
            Personal
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
