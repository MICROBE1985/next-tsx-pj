import Link from "next/link";
import styles from "styles/footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles["f-wrap"]}>
      <div className={styles["f-left"]}>
        <Link href="/" className={styles["f-logo"]}>
          LOGO
        </Link>
      </div>
      <div className={styles["f-right"]}>
        <ul className={styles["f-navlist"]}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/blog">BlogPost</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
