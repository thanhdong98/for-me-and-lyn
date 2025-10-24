import type { FC } from "react";
import "./index.css";

const CuteLoader: FC<{ onClick?: () => void; children: React.ReactNode }> = ({
  onClick,
  children,
}) => {
  return (
    <div
      style={{
        margin: "auto",
        left: 0,
        right: 0,
      }}
      className="cursor-pointer absolute bottom-10"
      onClick={() => onClick?.()}
    >
      <aside className="loading">
        <span className="text user-select-none">{children}</span>
        <span className="border"></span>
      </aside>
    </div>
  );
};

export default CuteLoader;
