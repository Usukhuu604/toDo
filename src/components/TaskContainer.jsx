export const TaskContainer = ({ taskList, option, setTaskList }) => {
  if (taskList.length == 0) {
    return (
      <div>
        <p style={{ color: "grey" }}>No tasks yet. Add one above!</p>
      </div>
    );
  }

  const showFilteredTasks = (lst) => {
    let filteredTask = lst;

    if (option == "active") {
      let filteredTask = lst.filter((a) => !a.completed);
    }
    if (option == "completed") {
      let filteredTask = lst.filter((a) => a.completed);
    }
    setTaskList(filteredTask);
  };

  const completeFunction = () => {};

  return (
    <div>
      {taskList.map((task) => {
        return (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <input type="checkbox" onChange={completeFunction} />
            <p>{task.title}</p>
            <button>delete</button>
          </div>
        );
      })}
    </div>
  );
};
