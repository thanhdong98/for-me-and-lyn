import type { CSSProperties, FC } from "react";
import "./index.css";

const StoryNavigators: FC<{
  dark?: boolean;
  onPlay: () => void;
  onNextAction: () => void;
  onPreviousAction: () => void;
  hidePrevious?: boolean;
  hideNext?: boolean;
  hidePlay?: boolean;
}> = ({
  onPlay,
  onNextAction,
  onPreviousAction,
  dark = false,
  hidePrevious = false,
  hideNext = false,
  hidePlay = false,
}) => {
  return (
    <div className="flex justify-between gap-20">
      {!hidePrevious && (
        <button
          onClick={onPreviousAction}
          aria-label="Previous"
          className={`nav-btn ${dark ? "stroke-black" : "stroke-white"}`}
          style={{ "--anchor-name": "--prev-btn" } as CSSProperties}
        >
          <svg viewBox="0 0 24 24" width="30" height="30">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>
      )}
      {!hidePlay && (
        <button
          onClick={onPlay}
          aria-label="Play"
          className={`nav-btn ${dark ? "stroke-black" : "stroke-white"}`}
          style={{ "--anchor-name": "--play-btn" } as CSSProperties}
        >
          <svg viewBox="0 0 24 24" width="30" height="30">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
            />
          </svg>
        </button>
      )}
      {!hideNext && (
        <button
          onClick={onNextAction}
          aria-label="Next"
          className={`nav-btn ${dark ? "stroke-black" : "stroke-white"}`}
          style={{ "--anchor-name": "--next-btn" } as CSSProperties}
        >
          <svg viewBox="0 0 24 24" width="30" height="30">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default StoryNavigators;
