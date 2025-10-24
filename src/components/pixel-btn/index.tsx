import type { FC } from "react";
import "./index.css";

const PixelButton: FC<{ onClick: () => void }> = ({ onClick }) => {
  const onAct = () => {
    setTimeout(() => {
      onClick();
    }, 3000);
  };

  return (
    <div className="container-btn-pixel-art" onClick={onAct}>
      <input className="input" id="start" name="start" type="checkbox" />
      <div
        className="text text-5xl"
        style={{ marginTop: "-45px" }}
      >
        E N D
      </div>
      <label className="pixel-button" htmlFor="start">
        <svg fill="none" viewBox="0 0 38 20" xmlns="http://www.w3.org/2000/svg">
          <g className="button-start">
            <path
              fill="#2D2D2D"
              d="M9 1H10H11H12H13H14H15H16H17H18H19H20H21H22H23H24H25H26H27H28H29H30H31H32V2H33V3H34V4V5V6V7V8V9V10V11V12V13V14V15H35V14V13V12V11V10V9V8V7V6V5V4V3V2H34V1H33V0H32H31H30H29H28H27H26H25H24H23H22H21H20H19H18H17H16H15H14H13H12H11H10H9H8H7H6H5V1H4V2H3V3V4V5V6V7V8V9V10V11V12V13V14V15H4V14V13V12V11V10V9V8V7V6V5V4V3H5V2H6V1H7H8H9Z"
            ></path>
            <path
              fill="#26B87C"
              d="M5 10V9H4V8V7V6V5V4V3H5V2H6V1H7H8H9H10H11H12H13H14H15H16H17H18H19H20H21H22H23H24H25H26H27H28H29H30H31H32V2H33V3H34V4V5V6V7V8V9H33V10H32H31H30H29H28H27H26H25H24H23H22H21H20H19H18H17H16H15H14H13H12H11H10H9H8H7H6H5Z"
            ></path>
            <path
              fill="#26B87C"
              d="M5 10H4V11V12V13V14V15H5H6H7H8H9H10H11H12H13H14H15H16H17H18H19H20H21H22H23H24H25H26H27H28H29H30H31H32H33H34V14V13V12V11V10H33V11H32H31H30H29H28H27H26H25H24H23H22H21H20H19H18H17H16H15H14H13H12H11H10H9H8H7H6H5V10Z"
            ></path>
            <path
              fill="#DDDDDD"
              d="M5 10V11H6H7H8H9H10H11H12H13H14H15H16H17H18H19H20H21H22H23H24H25H26H27H28H29H30H31H32H33V10H32H31H30H29H28H27H26H25H24H23H22H21H20H19H18H17H16H15H14H13H12H11H10H9H8H7H6H5Z"
            ></path>
            <path
              fill-opacity="0.3"
              fill="black"
              d="M13 7H14L14 8H24L24 7H25V6H26L26 5H25L25 4H23V3H15L15 4H13V5H12V6H13V7Z"
            ></path>
          </g>
          <g className="border-button-start">
            <path fill="#D7D7D7" d="M2 16V17H3V16H2Z"></path>
            <path fill="#D7D7D7" d="M35 16V17H36V16H35Z"></path>
            <path fill="#D7D7D7" d="M37 16V15H36V16H37Z"></path>
            <path fill="#2D2D2D" d="M3 6V5H1V6H3Z"></path>
            <path fill="#D7D7D7" d="M1 15V16H2V15H1Z"></path>
            <path
              fill="#2D2D2D"
              d="M3 19V18H2V17H1V16V15V6H0V18H1V19H2V20H36V19H37V18H38V6H37V15V16V17H36V18H35V19H3Z"
            ></path>
            <path fill="#D7D7D7" d="M3 17V18H35V17H3Z"></path>
            <path fill="#2D2D2D" d="M37 6V5H35V6H37Z"></path>
            <path
              fill="#2D2D2D"
              d="M34 14H33V15H5V14H4V13H3V14V15H4V16H34V15H35V14V13H34V14Z"
            ></path>
            <path
              fill="#888888"
              d="M37 6H35V13V14V15H34V16H4V15H3V14V13V6H1V15H2V16H3V17H35V16H36V15H37V6Z"
            ></path>
            <path fill="#888888" d="M3 18V19H35V18H3Z"></path>
            <path fill="#888888" d="M1 17H2V16H1V17Z"></path>
            <path fill="#888888" d="M2 18H3V17H2V18Z"></path>
            <path fill="#888888" d="M36 18V17H35V18H36Z"></path>
            <path fill="#888888" d="M36 17H37V16H36V17Z"></path>
          </g>
        </svg>
      </label>
      <div className="link">
        <svg
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="link-pj-svg"
        >
          <g className="group group-1">
            <path fill="#313131" d="M6 16H7V15H6V16Z"></path>
            <path fill="#313131" d="M5 17H6V16H5V17Z"></path>
            <path fill="#313131" d="M19 16H18V17H19V16Z"></path>
            <path fill="#313131" d="M18 15H17V16H18V15Z"></path>
            <path fill="#313131" d="M11 20V19V18H10H9V19H10V20H11Z"></path>
            <path fill="#313131" d="M13 18V19V20H14V19H15V18H14H13Z"></path>
            <path
              fill="#313131"
              d="M11 21H10V22H9V23H8H7V24H8H9H10V23H11V22H12H13V23H14V24H15H16H17V23H16H15V22H14V21H13H12H11Z"
            ></path>
            <path fill="#313131" d="M18 23V22V21H17V22V23H18Z"></path>
            <path fill="#313131" d="M6 21V22V23H7V22V21H6Z"></path>
            <path fill="#313131" d="M8 4V5H9V4H8Z"></path>
            <path fill="#313131" d="M8 7V8H9V7H8Z"></path>
            <path fill="#313131" d="M10 7V6H9V7H10Z"></path>
            <path
              fill="#313131"
              d="M10 1H11H12H13H14V2H15V3H16V4H17V5H16V6H17V7V8V9V10H18V11V12H17V11V10H16V9V8V7H15V6H14V7H13V8H12V9H11H10V10H9H8V9V8H7V7V6H8V5H7V4H8V3H9V2H10V1ZM6 11V10H7V11V12H6V11ZM8 13V12V11H9V12V13H10V12H11V11H12V10H13V9H14V8H15V9V10H14H13V11V12H14V13H15V12V11H16V12V13H15V14H14H13H12H11H10H9V13H8Z"
              clip-rule="evenodd"
              fill-rule="evenodd"
            ></path>
            <path fill="#313131" d="M15 4V5H16V4H15Z"></path>
            <path
              fill="#F6CE80"
              d="M17 7V6H16V5H15V4H14H13H12H11H10H9V5H8V6H7V7V8H8V7H9V6H10V7H9V8H8V9V10H9H10V9H11H12V8H13V7H14V6H15V7H16V8V9V10H17V9V8V7Z"
            ></path>
            <path fill="#F6CE80" d="M6 11V10H7V11V12H6V11Z"></path>
            <path fill="#FED5CD" d="M5 8H4V9H5H6V8H5Z"></path>
            <path
              fill="#FED5CD"
              d="M12 11H11V12V13H10H9V14H10H11H12H13H14H15V13H14H13V12V11V10H12V11Z"
            ></path>
            <path fill="white" d="M14 12H13V13H14V12Z"></path>
            <path fill="white" d="M16 12V11H15V12H16Z"></path>
            <path fill="white" d="M10 12V13H11V12H10Z"></path>
            <path fill="white" d="M8 11V12H9V11H8Z"></path>
            <path fill="#FED5CD" d="M16 13V12H15V13H16Z"></path>
            <path fill="#FED5CD" d="M15 8H14V9H13V10H14H15V9V8Z"></path>
            <path fill="#FED5CD" d="M8 12V13H9V12H8Z"></path>
            <path fill="#FED5CD" d="M20 8H19H18V9H19H20V8Z"></path>
            <path fill="#FED5CD" d="M17 17V18V19H18V18H19V17H18H17Z"></path>
            <path fill="#FED5CD" d="M6 17H5V18H6V19H7V18V17H6Z"></path>
            <path fill="#F6CE80" d="M11 19V20H13V19V18H11V19Z"></path>
            <path fill="#CF7F20" d="M8 21H7V22V23H8H9V22H10V21H9H8Z"></path>
            <path
              fill="#CF7F20"
              d="M17 21H16H15H14V22H15V23H16H17V22V21Z"
            ></path>
            <path
              fill="#19C37D"
              d="M10 15H9V16V17V18H10H11H13H14H15V17V16V15H14H13H12H11H10Z"
            ></path>
            <path fill="#19C37D" d="M10 20V21H11H12H13H14V20H13H11H10Z"></path>
            <path fill="#19C37D" d="M16 18H15V19H14V20H15H16V19V18Z"></path>
            <path fill="#19C37D" d="M8 19V20H9H10V19H9V18H8V19Z"></path>
            <path
              fill="#19C37D"
              d="M11 1H10V2H9V3H8V4H9H10H11H12H13H14H15H16V3H15V2H14V1H13H12H11Z"
            ></path>
            <path fill="#19C37D" d="M7 4V5H8V4H7Z"></path>
            <path fill="#19C37D" d="M17 5V4H16V5H17Z"></path>
            <path fill="#F6CE80" d="M18 11V10H17V11V12H18V11Z"></path>
            <path fill="#8BD346" d="M17 15H16V16V17H17H18V16H17V15Z"></path>
            <path fill="#8BD346" d="M8 15H7V16H6V17H7H8V16V15Z"></path>
            <path
              fill="#313131"
              d="M9 0V1H8V2H7V3H6V6H5V7H3V8V9H4V8H5H6V9H5H4V10H5V13H6V14H7V15H8V16V17H7V18V19H6V18H5V17H4V19H5V20H7V21H8H9H10V20H9H8V19V18H9V17V16V15H10H11H12H13H14H15V16V17V18H16V19V20H15H14V21H15H16H17V20H19V19H20V17H19V18H18V19H17V18V17H16V16V15H17V14H18V13H19V10H20V9H19H18V8H19H20V9H21V8V7H19V6H18V3H17V2H16V1H15V0H9ZM10 1H11H12H13H14V2H15V3H16V4H17V5H16V6H17V7V8V9V10H18V11V12H17V11V10H16V9V8V7H15V6H14V7H13V8H12V9H11H10V10H9H8V9V8H7V7V6H8V5H7V4H8V3H9V2H10V1ZM6 10V11V12H7V11V10H6ZM8 13V12V11H9V12V13H10V12H11V11H12V10H13V9H14V8H15V9V10H14H13V11V12H14V13H15V12V11H16V12V13H15V14H14H13H12H11H10H9V13H8Z"
              clip-rule="evenodd"
              fill-rule="evenodd"
            ></path>
          </g>
          <g className="group group-2">
            <path fill="#313131" d="M8 5V6H9V5H8Z"></path>
            <path fill="#313131" d="M8 8V9H9V8H8Z"></path>
            <path fill="#313131" d="M10 8V7H9V8H10Z"></path>
            <path
              fill="#313131"
              d="M10 2H11H12H13H14V3H15V4H16V5H17V6H16V7H17V8V9V10V11H18V12V13H17V12V11H16V10V9V8H15V7H14V8H13V9H12V10H11H10V11H9H8V10V9H7V8V7H8V6H7V5H8V4H9V3H10V2ZM6 12V11H7V12V13H6V12ZM8 14V13V12H9V13V14H10V13H11V12H12V11H13V10H14V9H15V10V11H14H13V12V13H14V14H15V13V12H16V13V14H15V15H14H13H12H11H10H9V14H8Z"
              clip-rule="evenodd"
              fill-rule="evenodd"
            ></path>
            <path fill="#313131" d="M15 5V6H16V5H15Z"></path>
            <path
              fill="#F6CE80"
              d="M17 8V7H16V6H15V5H14H13H12H11H10H9V6H8V7H7V8V9H8V8H9V7H10V8H9V9H8V10V11H9H10V10H11H12V9H13V8H14V7H15V8H16V9V10V11H17V10V9V8Z"
            ></path>
            <path fill="#F6CE80" d="M6 12V11H7V12V13H6V12Z"></path>
            <path fill="#FED5CD" d="M5 9H4V10H5H6V9H5Z"></path>
            <path
              fill="#FED5CD"
              d="M12 12H11V13V14H10H9V15H10H11H12H13H14H15V14H14H13V13V12V11H12V12Z"
            ></path>
            <path fill="white" d="M14 13H13V14H14V13Z"></path>
            <path fill="white" d="M16 13V12H15V13H16Z"></path>
            <path fill="white" d="M10 13V14H11V13H10Z"></path>
            <path fill="white" d="M8 12V13H9V12H8Z"></path>
            <path fill="#FED5CD" d="M16 14V13H15V14H16Z"></path>
            <path fill="#FED5CD" d="M15 9H14V10H13V11H14H15V10V9Z"></path>
            <path fill="#FED5CD" d="M8 13V14H9V13H8Z"></path>
            <path fill="#FED5CD" d="M20 9H19H18V10H19H20V9Z"></path>
            <path
              fill="#19C37D"
              d="M11 2H10V3H9V4H8V5H9H10H11H12H13H14H15H16V4H15V3H14V2H13H12H11Z"
            ></path>
            <path fill="#19C37D" d="M7 5V6H8V5H7Z"></path>
            <path fill="#19C37D" d="M17 6V5H16V6H17Z"></path>
            <path fill="#F6CE80" d="M18 12V11H17V12V13H18V12Z"></path>
            <path fill="#313131" d="M11 20V19V18H10H9V19H10V20H11Z"></path>
            <path fill="#313131" d="M13 18V19V20H14V19H15V18H14H13Z"></path>
            <path
              fill="#313131"
              d="M11 21H10V22H9V23H8H7V24H8H9H10V23H11V22H12H13V23H14V24H15H16H17V23H16H15V22H14V21H13H12H11Z"
            ></path>
            <path fill="#313131" d="M18 23V22V21H17V22V23H18Z"></path>
            <path fill="#313131" d="M6 21V22V23H7V22V21H6Z"></path>
            <path fill="#FED5CD" d="M17 17V18V19H18V18H19V17H18H17Z"></path>
            <path fill="#FED5CD" d="M6 17H5V18H6V19H7V18V17H6Z"></path>
            <path fill="#F6CE80" d="M11 19V20H13V19V18H11V19Z"></path>
            <path fill="#19C37D" d="M10 20V21H11H12H13H14V20H13H11H10Z"></path>
            <path
              fill="#19C37D"
              d="M8 19V20H9H10V19H9V18H10H11H13H14H15V19H14V20H15H16V19V18V17H15V16H9V17H8V18V19Z"
            ></path>
            <path fill="#CF7F20" d="M14 21V22H15V23H16H17V22V21H14Z"></path>
            <path fill="#CF7F20" d="M10 22V21H7V22V23H8H9V22H10Z"></path>
            <path
              fill="#313131"
              d="M5 18V17H4V19H5V20H7V21H10V20H9H8V19V18V17H7V18V19H6V18H5Z"
            ></path>
            <path
              fill="#313131"
              d="M17 18V17H16V18V19V20H15H14V21H17V20H19V19H20V17H19V18H18V19H17V18Z"
            ></path>
            <path fill="#313131" d="M19 16H18V17H19V16Z"></path>
            <path
              fill="#313131"
              d="M9 1V2H8V3H7V4H6V7H5V8H3V9V10H4V9H5H6V10H5H4V11H5V14H6V16H7V15H8V17H9V16H15V17H16V15H17V16H18V14H19V11H20V10H19H18V9H19H20V10H21V9V8H19V7H18V4H17V3H16V2H15V1H9ZM10 2H11H12H13H14V3H15V4H16V5H17V6H16V7H17V8V9V10V11H18V12V13H17V12V11H16V10V9V8H15V7H14V8H13V9H12V10H11H10V11H9H8V10V9H7V8V7H8V6H7V5H8V4H9V3H10V2ZM6 11V12V13H7V12V11H6ZM8 14V13V12H9V13V14H10V13H11V12H12V11H13V10H14V9H15V10V11H14H13V12V13H14V14H15V13V12H16V13V14H15V15H14H13H12H11H10H9V14H8Z"
              clip-rule="evenodd"
              fill-rule="evenodd"
            ></path>
            <path fill="#313131" d="M5 17H6V16H5V17Z"></path>
            <path fill="#8BD346" d="M6 17H7H8V15H7V16H6V17Z"></path>
            <path fill="#8BD346" d="M17 17H18V16H17V15H16V17H17Z"></path>
          </g>
        </svg>
        <svg
          fill="none"
          viewBox="0 0 24 31"
          xmlns="http://www.w3.org/2000/svg"
          className="link-sword-pj-svg"
        >
          <path fill="#313131" d="M21 13V12H20V13H21Z"></path>
          <path fill="#313131" d="M2 17V18H3V17H2Z"></path>
          <path fill="#313131" d="M6 11H5V12H6V11Z"></path>
          <path fill="#313131" d="M13 10V11H14V10H13Z"></path>
          <path fill="#313131" d="M10 18H11V17H10V18Z"></path>
          <path fill="#313131" d="M10 23H13V22H10V23Z"></path>
          <path fill="#313131" d="M14 18V17H12V18H14Z"></path>
          <path fill="#313131" d="M4 20H5V19H4V18H3V22H4V20Z"></path>
          <path fill="#313131" d="M11 20H12V18H11V20Z"></path>
          <path fill="#313131" d="M20 18V13H19V18H20Z"></path>
          <path
            fill="#313131"
            d="M17 20V21H18V19H19V18H17V12H16V15H15V16H14V17H15V18H16V20H17Z"
          ></path>
          <path fill="#313131" d="M4 14H5V12H4V14Z"></path>
          <path fill="#313131" d="M3 17H4V14H3V17Z"></path>
          <path fill="#313131" d="M22 12V10H21V12H22Z"></path>
          <path fill="#313131" d="M6 10V11H8V10H6Z"></path>
          <path fill="#313131" d="M8 9V10H13V9H8Z"></path>
          <path fill="#313131" d="M16 10H15V11H14V12H16V10Z"></path>
          <path fill="#313131" d="M5 24H6V23H5V24Z"></path>
          <path fill="#313131" d="M11 27V25H9V26H10V27H11Z"></path>
          <path fill="#313131" d="M13 25V27H14V26H15V25H13Z"></path>
          <path fill="#313131" d="M18 30V28H17V30H18Z"></path>
          <path fill="#313131" d="M6 28V30H7V28H6Z"></path>
          <path
            fill="#313131"
            d="M10 28V29H9V30H7V31H10V30H11V29H13V30H14V31H17V30H15V29H14V28H10Z"
          ></path>
          <path
            fill="#313131"
            d="M16 23H15V22H16V23H17V21H16V20H15V21H13V22H14V24H15V25H16V27H14V28H17V24H16V23Z"
          ></path>
          <path
            fill="#313131"
            d="M10 22V21H9V19H10V18H9V17H8V22H7V17H5V18H6V20H5V21H6V22V23H7H8V24H7V26H6V25H5V24H4V26H5V27H7V28H10V27H8V25H9V22H10Z"
          ></path>
          <path fill="white" d="M15 17H14V19H15V17Z"></path>
          <path fill="white" d="M10 20H11V18H10V20Z"></path>
          <path fill="white" d="M12 20H11V21H12V20Z"></path>
          <path fill="white" d="M20 3H19V1H18V11H20V3Z"></path>
          <path fill="#FED5CD" d="M5 20H6V19V18H5V17H4H3V18H4V19H5V20Z"></path>
          <path
            fill="#FED5CD"
            d="M16 19V18H15V19H14V18H13H12V19V20V21H11V20H10V19H9V20V21H10V22H11H12H13V21H14H15V20H16V19Z"
          ></path>
          <path fill="#FED5CD" d="M19 15V13H17V15H19Z"></path>
          <path fill="#FED5CD" d="M6 24H5V25H6V26H7V25V24H6Z"></path>
          <path
            fill="#19C37D"
            d="M4 16V17H5H6H7V14H8V13H9V12H10H11V11H13V10H12H11H10H9H8V11H7H6V12H5V13V14H4V15V16Z"
          ></path>
          <path fill="#19C37D" d="M5 21V20H4V21V22H5V21Z"></path>
          <path
            fill="#19C37D"
            d="M10 22H9V23V24V25H10H11H13H14H15V24V23V22H14H13H12H11H10Z"
          ></path>
          <path fill="#19C37D" d="M10 27V28H11H12H13H14V27H13H11H10Z"></path>
          <path fill="#19C37D" d="M16 25H15V26H14V27H15H16V26V25Z"></path>
          <path fill="#19C37D" d="M8 26V27H9H10V26H9V25H8V26Z"></path>
          <path
            fill="#F6CE80"
            d="M16 15V14V13V12H15H14V11H13H11V12H10H9V13H8V14H7V17V18V19V20V21V22H8V21V20V19V18V17H9V18H10V17H11V18H12V17H13H14V16H15V15H16Z"
          ></path>
          <path fill="#F6CE80" d="M13 27V25H11V27H13Z"></path>
          <path fill="#FFBD44" d="M17 16V17H18V16H17Z"></path>
          <path fill="#FFBD44" d="M20 11H19V12H20V11Z"></path>
          <path fill="#FFBD44" d="M21 11V10H20V11H21Z"></path>
          <path
            fill="#CF7F20"
            d="M17 18H18H19V17V16V15H18H17V16H18V17H17V18Z"
          ></path>
          <path
            fill="#CF7F20"
            d="M19 13H20V12H19V11H18H17V10H16V11V12H17V13H18H19Z"
          ></path>
          <path fill="#CF7F20" d="M20 12H21V11H20V12Z"></path>
          <path fill="#CF7F20" d="M8 28H7V29V30H8H9V29H10V28H9H8Z"></path>
          <path fill="#CF7F20" d="M17 28H16H15H14V29H15V30H16H17V29V28Z"></path>
          <path fill="#8BD346" d="M15 23H16V22H15V23Z"></path>
          <path fill="#8BD346" d="M16 21H17V20H16V21Z"></path>
          <path fill="#8BD346" d="M8 23H6V24H7H8V23Z"></path>
          <path fill="#C9C9C9" d="M19 3H20V2H19V3Z"></path>
          <path fill="#C9C9C9" d="M18 2H17V11H18V2Z"></path>
          <path fill="#6E6E6E" d="M19 0H18V1H19V0Z"></path>
          <path fill="#6E6E6E" d="M19 2H20V1H19V2Z"></path>
          <path fill="#6E6E6E" d="M17 1V2H18V1H17Z"></path>
          <path fill="#6E6E6E" d="M20 10H21V3H20V10Z"></path>
        </svg>
      </div>
      <div className="light-up">
        <span></span>
      </div>
    </div>
  );
};

export default PixelButton;
