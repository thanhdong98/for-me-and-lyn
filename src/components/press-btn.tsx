import "./common.css";
import type { FC } from "react";

const PressableButton: FC<{
  onClick?: () => void;
  children: React.ReactNode;
}> = ({ onClick, children }) => {
  return (
    <button className="btn-12" onClick={onClick}>
      {children}
    </button>
  );
};

export default PressableButton;
