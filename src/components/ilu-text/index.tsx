import { type FC } from "react";
import "./index.css";

const IluText: FC<{ show: boolean }> = ({ show }) => {
  return (
    <div>
      <h1
        className="ilu-text my-10 text-center"
        style={{
          opacity: show ? 1 : 0,
          width: show ? "100%" : 0,
          height: show ? "100px" : 0,
          transition: "all 5s ease-in-out",
          overflow: "hidden",
        }}
      >
        <span className="letter letter-4">A</span>
        <span className="letter letter-3">N</span>
        <span className="letter letter-1 pr-4">H</span>
        <span className="letter letter-1">Y</span>
        <span className="letter letter-4">Ê</span>
        <span className="letter letter-2 pr-4">U</span>
        <span className="letter letter-2">E</span>
        <span className="letter letter-4">M</span>
      </h1>
    </div>
  );
};

export default IluText;
