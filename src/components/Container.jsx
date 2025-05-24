import React, { useState } from "react";
import { Tabs } from "./Tabs";
import { TaskContainer } from "./TaskContainer";
import styles from "../styles/container.module.css";

export const Container = ({ taskList, setTaskList }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [option, setOption] = useState("all");

  const handleInputValue = (event) => {
    setTaskTitle(event.target.value);
  };

  const addTask = () => {
    const newTask = { id: Date.now(), title: taskTitle, completed: false };
    setTaskList([...taskList, newTask]);
    setTaskTitle("");
  };

  const filteredTasks = taskList.filter((task) => {
    if (option === "active") return !task.completed;
    if (option === "completed") return task.completed;
    if (option === "all") return true;
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new task..."
        onChange={handleInputValue}
        value={taskTitle}
        className={styles.inputTask}
      />

      <button className={styles.addButton} onClick={addTask}>
        Add
      </button>

      <Tabs setOption={setOption} />
      <TaskContainer taskList={taskList} filteredTasks={filteredTasks} setTaskList={setTaskList} />
    </div>
  );
};
