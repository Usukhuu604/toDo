import { Container } from "@/components/Container";
import { useState } from "react";

const HomePage = () => {
  const [taskList, setTaskList] = useState([]);
  return (
    <div>
      <p>To-Do List</p>
      <Container taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
};

export default HomePage;
