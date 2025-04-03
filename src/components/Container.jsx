import React, { useState } from "react";
import { Tabs } from "./Tabs";
import { TaskContainer } from "./TaskContainer";

export const Container = ({ taskList, setTaskList }) => {
  const [taskTitle, setTaskTitle] = useState("");

  //  option state  option, setOPtion all active completed
  const [option, setOption] = useState("all");

  const handleInputValue = (event) => {
    setTaskTitle(event.target.value);
  };

  const addTask = () => {
    const newTask = { id: Date.now(), title: taskTitle, completed: false };
    setTaskList([...taskList, newTask]);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add new task..."
        onChange={handleInputValue}
        value={taskTitle}
      />

      <button onClick={addTask}>Add</button>

      <Tabs option={option} setOption={setOption} />
      <TaskContainer
        taskList={taskList}
        setTaskList={setTaskList}
        option={option}
      />
    </div>
  );
};
