import "./index.css";
const CuteLoader = () => {
  return (
    <div className="wrapper">
      <aside className="loading">
        <span className="text user-select-none">Loading</span>
        <span className="border"></span>
      </aside>
    </div>
  );
};

export default CuteLoader;
