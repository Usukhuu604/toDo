import styles from "../styles/tabs.module.css";

export const Tabs = ({ option, setOption }) => {
  return (
    <div className={styles.filterGroup}>
      <button className={option === "all" ? styles.active : ""} onClick={() => setOption("all")}>
        All
      </button>
      <button className={option === "active" ? styles.active : ""} onClick={() => setOption("active")}>
        Active
      </button>
      <button className={option === "completed" ? styles.active : ""} onClick={() => setOption("completed")}>
        Completed
      </button>
    </div>
  );
};
