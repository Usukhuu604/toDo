import styles from "../styles/taskcontainer.module.css";

export const TaskContainer = ({ filteredTasks, taskList, setTaskList }) => {
  if (filteredTasks.length === 0) {
    return (
      <div>
        <p className={styles.emptyState}>No tasks yet. Add one above!</p>
      </div>
    );
  }

  const handleToggle = (id) => {
    setTaskList(taskList.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <div>
      {filteredTasks.map((task) => (
        <div key={task.id} className={styles.taskBar}>
          <label className={styles.taskLabel}>
            <input
              className={styles.taskCheckbox}
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggle(task.id)}
            />
            <span className={task.completed ? `${styles.taskTitle} ${styles.completed}` : styles.taskTitle}>
              {task.title}
            </span>
          </label>
          <button className={styles.deleteButton} onClick={() => handleDelete(task.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
