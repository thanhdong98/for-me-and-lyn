import { useState, type FC, type ReactNode } from "react";
import "./Envelope.css";

const Envelope: FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`letter-image ${isOpen ? "open" : ""}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="animated-mail">
        <div className="back-fold"></div>
        <div className="letter">
          <div className="letter-border"></div>
          <div className="flex justify-between">
            <div className="w-[80%]">
              <div className="letter-title"></div>
              <div className="letter-context"></div>
            </div>
            <div className="w-[20%]">
              <div className="heart"></div>
            </div>
          </div>

          <div className="letter-context-body p-4">{children} </div>
        </div>
        <div className="top-fold"></div>
        <div className="body"></div>
        <div className="left-fold"></div>
      </div>
      <div className="shadow"></div>
    </div>
  );
};

export default Envelope;
