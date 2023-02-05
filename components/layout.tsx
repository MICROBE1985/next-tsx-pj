import Header from "../components/header";
import Footer from "../components/footer";
import styles from "styles/layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />

      <main className={styles["l-main"]}>{children}</main>

      <Footer />
    </>
  );
}
