import type { FC } from "react";
import "./piyo.css";

const PiyoButton: FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="button button--piyo">
      <div className="button__wrapper">
        <span className="button__text">Đọc hoyyy</span>
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
