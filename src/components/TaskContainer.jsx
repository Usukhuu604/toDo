import React from "react";
import { Container } from "./Container";

export const TaskContainer = ({ todo }) => {
  return (
    <div>
      <p style={{ color: "grey" }}>No tasks yet. Add one above!</p>
      <p>{todo[0]}</p>
    </div>
  );
};
