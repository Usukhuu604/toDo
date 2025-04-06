export const Tabs = ({ option, setOption, taskList }) => {
  const showAll = () => setOption("all");
  const showActive = () => setOption("active");
  const showCompleted = () => setOption("completed");

  return (
    <div>
      <button onClick={showAll}>All</button>
      <button onClick={showActive}>Active</button>
      <button onClick={showCompleted}>Completed</button>
    </div>
  );
};
