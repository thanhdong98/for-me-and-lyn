import "./rainy-cloud.css";

const RainyCloud = ({ className }: { className?: string }) => (
  <div className={`cloud ${className ?? ""}`}>
    <div className="puffs"></div>
    <div className="rain">
      <div className="drop"></div>
      <div className="drop"></div>
      <div className="drop"></div>
      <div className="drop"></div>
      <div className="drop"></div>
    </div>
  </div>
);

export default RainyCloud;
