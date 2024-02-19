import styles from "./logo.module.scss";

const Logo = () => {
  return (
    <h1 className={styles.logo}>
      LITE<span className={styles.light}>FLIX</span>
    </h1>
  );
};

export default Logo;
