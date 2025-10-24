import type { FC } from "react";
import "./index.css";

const GlowButton: FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <button className="glowing-btn" onClick={onClick}>
      <span className="glowing-txt">
        Đ<span className="faulty-letter">I</span> TIẾP
      </span>
    </button>
  );
};

export default GlowButton;
