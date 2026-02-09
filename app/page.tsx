import Button from "antd/es/button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Button type="primary">Button</Button>
      </main>
    </div>
  );
}
