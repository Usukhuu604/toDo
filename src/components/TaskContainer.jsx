export const TaskContainer = ({ filteredTasks, taskList, setTaskList }) => {
  if (filteredTasks.length === 0) {
    return (
      <div>
        <p style={{ color: "grey" }}>No tasks yet. Add one above!</p>
      </div>
    );
  }

  const handleToggle = (id) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <div>
      {filteredTasks.map((task) => (
        <div>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleToggle(task.id)}
          />
          <span>{task.title}</span>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
