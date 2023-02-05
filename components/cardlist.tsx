import Link from "next/link";
import Image from "next/image";
import profilePic from "public/me.png";

import styles from "styles/cardlist.module.scss";

export default function Cardlist() {
  return (
    <ul className={styles["card-list"]}>
      <li>
        <Link href="#" />
        <div className={styles["img-box"]}>
          <Image
            src={profilePic}
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
        <div className={styles["txt-box"]}>
          <p className={styles["ttl"]}>①記事タイトル</p>
          <p className={styles["txt"]}>
            ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
          </p>
        </div>
      </li>
    </ul>
  );
}
