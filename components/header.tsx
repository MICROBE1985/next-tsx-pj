import Link from "next/link";
import styles from "styles/header.module.scss";

export default function Header() {
  return (
    <>
      <div className={styles["h-wrap"]}>
        <div className={styles["h-left"]}>
          <Link className={styles["h-logo"]} href="/">
            Logo
          </Link>
        </div>
        <div className={styles["h-right"]}>
          <nav>
            <ul className={styles["h-nav-list"]}>
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
          </nav>
        </div>
      </div>
    </>
  );
}
