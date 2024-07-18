import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";


export default function Home() {
  return (
    <main className={styles.main}>
     
      <div>
        <h1>Hello World</h1>
      </div>

      <div>
        <Link href="/about">
          About
        </Link>
      </div>dsafjdsh;

      <div>
      <Link href="/contact">
        Contact
        </Link>
      </div>

    </main>
  );
}
