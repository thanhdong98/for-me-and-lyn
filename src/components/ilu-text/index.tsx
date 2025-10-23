import { Fragment, useState, type FC } from "react";
import PiyoButton from "../piyo-button";
import "./index.css";
import "./note-paper.css";
import RainyCloud from "../backgrounds/rainny-cloud";

const texts = [
  `Anh đã đi qua hết một hành trình dài hơn khoảng một nửa phần đời của em, từng hỏi là "Sao tao lận đận trong tình cảm ghê á, tao sợ nó lại lặp lại, rồi cứ trông chờ hoài có chắc ai sẽ tới như mọi người vẫn nói không?`,
  `Nhưng mà, Lyn ơi, anh ở đây, chỉ để nói với em là anh muốn đồng hành cùng em, anh hông có hứa hẹn gì nữa hết, nhìn anh hành động và yêu thương em, có được không?`,
];

const IluText: FC = () => {
  const [currentTextOrder, setCurrentTextOrder] = useState<number>(0);
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
  const [showIlu, toggleShowIlu] = useState(false);
  const [isReading, setIsReading] = useState<boolean>(false);

  const extendText = (textIndex: number, textOrder: number) => {
    if (textOrder >= texts.length) {
      toggleShowIlu(true);
      return;
    }

    console.log(textIndex, texts[textOrder].length - 1);

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
    <div className="min-h-[50vh] pt-[10vh]">
      <h1
        className="ilu-text mb-20"
        style={{
          opacity: showIlu ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <span className="letter letter-1 mr-3">A</span>
        <span className="letter letter-2 mr-3">N</span>
        <span className="letter letter-3 mr-20">H</span>
        <span className="letter letter-1 mr-3">Y</span>
        <span className="letter letter-4 mr-3">Ê</span>
        <span className="letter letter-2 mr-20">U</span>
        <span className="letter letter-2 mr-3">L</span>
        <span className="letter letter-4 mr-3">Y</span>
        <span className="letter letter-2">N</span>
      </h1>
      <div id="notebook-paper" className="relative">
        <RainyCloud className="top-[40%] left-[75px] absolute" />
        <PiyoButton onClick={!isReading ? clickView : undefined} />
        <div id="content">
          <span
            style={{
              transition: "width height 0.1s ease-in-out",
            }}
          >
            {texts.map((text, index) => (
              <Fragment key={index}>
                {currentTextOrder > index ? (
                  <span key={index} className="block text-justify text-yellow-500">
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

export default IluText;
