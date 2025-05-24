import { Container } from "@/components/Container";
import { useState } from "react";
import styles from "../styles/app.module.css";

const HomePage = () => {
  const [taskList, setTaskList] = useState([]);

  return (
    <div className={styles.box}>
      <p className={styles.title}>To-Do List</p>
      <Container taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
};

export default HomePage;
