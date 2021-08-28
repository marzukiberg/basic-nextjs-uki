import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.container}>
      <ul className={styles.list}>
        <li>
          <Link href="/">
            <a className={styles.item}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a className={styles.item}>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/users">
            <a className={styles.item}>Users</a>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
