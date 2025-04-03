export const Tabs = ({ option, setOption }) => {
  const showActive = () => setOption("active");

  const showCompleted = () => setOption("completed");

  const showAll = () => setOption("all");

  return (
    <div>
      {/* {if} */}
      <button onClick={showAll}>All</button>
      <button onClick={showActive}>Active</button>
      <button onClick={showCompleted}>Completed</button>
    </div>
  );
};
