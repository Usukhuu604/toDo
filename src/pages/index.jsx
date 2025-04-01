import { Container } from "@/components/Container";
import { Tabs } from "@/components/Tabs";
import { TaskContainer } from "@/components/TaskContainer";
import { useState } from "react";

const todoDatas = [];

const HomePage = () => {
  return (
    <div>
      <p>To-Do List</p>
      <Container todo={todoDatas} />
      <Tabs />
      <TaskContainer todo={todoDatas} />
    </div>
  );
};

export default HomePage;
