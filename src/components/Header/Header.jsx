import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={`${styles.header} `}>
      <div className={styles.headerImage}></div>
    </header>
  );
};

export default Header;
