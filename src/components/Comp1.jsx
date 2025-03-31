import React from "react";

export const Comp1 = () => {
  return (
    <div style={{ fontSize: "50px" }}>
      <p>To-Do List</p>
      <div style={{ display: "block" }}>
        <input type="text" placeholder="add a new task..." />
        <button>add</button>
      </div>
      <div style={{ display: "block" }}>
        <button>all</button>
        <button>active</button>
        <button>completed</button>
      </div>
    </div>
  );
};
