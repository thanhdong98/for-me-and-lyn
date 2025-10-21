import type { FC } from "react";
import "./index.css";

const GlowButton: FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <button className="glowing-btn" onClick={onClick}>
      <span className="glowing-txt">
        E<span className="faulty-letter">X</span>PLORE
      </span>
    </button>
  );
};

export default GlowButton;
