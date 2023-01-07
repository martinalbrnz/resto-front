import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>Mesas disponibles:</span>
      <span>Comandas:</span>
      <span>Hora:</span>
    </footer>
  );
};

export default Footer;
