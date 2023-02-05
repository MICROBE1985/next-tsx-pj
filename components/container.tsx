import styles from "style/container.module.css";

interface Props {
  children: React.ReactNode;
}

export default function Container({ children }: Props) {
  return <div className="styles.derault">{children}</div>;
}
