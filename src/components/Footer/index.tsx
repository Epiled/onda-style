// import { ReactComponent as Logo } from 'assets/logo.svg';
import Logo from 'assets/logo.webp';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img width={'200px'} src={Logo} alt="" />
    </footer>
  );
}