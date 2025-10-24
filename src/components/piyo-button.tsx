import type { FC } from "react";
import "./piyo.css";

const PiyoButton: FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="button button--piyo"
      style={{ scale: 0.4 }}
    >
      <div className="button__wrapper">
        <span className="button__text">Lời kết</span>
      </div>
      <div className="characterBox">
        <div className="character wakeup">
          <div className="character__face"></div>
        </div>
        <div className="character wakeup">
          <div className="character__face"></div>
        </div>
        <div className="character">
          <div className="character__face"></div>
        </div>
      </div>
    </button>
  );
};

export default PiyoButton;
