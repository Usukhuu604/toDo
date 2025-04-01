import React, { useState } from "react";

export const Container = ({ todo, data }) => {
  const [title, s] = useState("");

  const [id, list] = useState(0);

  const handleInputValue = (event) => {
    s(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add new task..."
        onChange={handleInputValue}
      />
      <button
        onClick={() => {
          todo.push({});
          todo[todo.length - 1]["id"] = { id };
          todo[todo.length - 1]["title"] = { title };
          todo[todo.length - 1]["isCompleted"] = false;

          list(id + 1);
          console.log(todo);
        }}
      >
        Add
      </button>
    </div>
  );
};
