import styles from './CentredContainer.module.css';

export default function CentredContainer({ children }) {
  return <div className={styles.centerContainer}>{children}</div>;
}
