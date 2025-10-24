import { Fragment, useState } from "react";
import RainyCloud from "../components/backgrounds/rainny-cloud";
import IluText from "../components/ilu-text";
import NextButton from "../components/next-button";
import PiyoButton from "../components/piyo-button";
import "./note-paper.css";
const texts = [
  `- 24/10/2025`,
  `Anh từng thắc mắc sao tình duyên anh cứ bị lận đận, anh cũng đâu tới nỗi nào đâu, hay do anh xui?`,
  `Nhưng giờ anh ở đây, sẵn sàng để nói với em, với tất cả chân thành, có một thứ gì đó hơi bị lớn quá với anh gòi, anh muốn nói với em, muốn hỏi em một điều rằng là:`,
  `Nếu có thì bấm nút để anh làm tài xế?`,
];

const FinalEnding = () => {
  const [currentTextOrder, setCurrentTextOrder] = useState<number>(0);
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
  const [isReading, setIsReading] = useState<boolean>(false);
  const [showIlu, toggleShowIlu] = useState(false);
  const [showNextButton, toggleShowNextButton] = useState(false);

  const extendText = (textIndex: number, textOrder: number) => {
    if (textOrder >= texts.length) {
      toggleShowNextButton(true);
      return;
    }

    if (textIndex < texts[textOrder].length - 1) {
      setCurrentTextIndex(textIndex + 1);
      setTimeout(() => extendText(textIndex + 1, textOrder), 100);
    } else {
      setCurrentTextIndex(0);
      setCurrentTextOrder(textOrder + 1);
      setTimeout(() => extendText(0, textOrder + 1), 100);
    }
  };

  const clickView = () => {
    extendText(0, 0);
    setIsReading(true);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <IluText show={showIlu} />
      {showNextButton && !showIlu && (
        <NextButton onClick={() => toggleShowIlu(true)} />
      )}

      <div id="notebook-paper" className="relative">
        <RainyCloud className="top-[40%] left-[75px] absolute" />
        <PiyoButton onClick={!isReading ? clickView : undefined} />
        <div id="paper-content">
          <span
            style={{
              transition: "width height 0.1s ease-in-out",
            }}
          >
            {texts.map((text, index) => (
              <Fragment key={index}>
                {currentTextOrder > index ? (
                  <span
                    key={index}
                    className="block text-justify text-yellow-500"
                  >
                    {text}
                  </span>
                ) : (
                  index === currentTextOrder && (
                    <span key={index} className="block text-yellow-500 ">
                      {text.substring(0, currentTextIndex)}{" "}
                      <span className="blink_me text-red-500">❤︎</span>
                    </span>
                  )
                )}
              </Fragment>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FinalEnding;
