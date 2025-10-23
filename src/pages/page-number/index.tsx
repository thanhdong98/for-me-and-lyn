import { useContext, useState, type FC } from "react";
import { GlobalContext } from "../../contexts/global";
import { Pages } from "../../types/common";
import DriftingCloud from "../../components/backgrounds/drifting-cloud";
import StoryNavigators from "../../components/navigators";
import PageOne from "./contents/page1";
import "./contents/index.css";
import PageTwo from "./contents/page2";
import Page3 from "./contents/page3";

const NumberToPageMap = [
  Pages.INTRO,
  Pages.PAGE_ONE,
  Pages.PAGE_TWO,
  Pages.PAGE_THREE,
  Pages.PAGE_FOUR,
];

const PageNumber: FC<{ pageNumber: number }> = ({ pageNumber }) => {
  const { goTo } = useContext(GlobalContext);
  const [played, togglePlay] = useState<{ [key: number]: boolean }>({});

  const onNavigate = (isNext?: boolean) => {
    const nextPageNumber = isNext ? pageNumber + 1 : pageNumber - 1;
    let nextPage: Pages;
    if (nextPageNumber <= 0) {
      nextPage = Pages.INTRO;
    } else if (nextPageNumber >= NumberToPageMap.length) {
      nextPage = Pages.FINAL_ENDING;
    } else {
      nextPage = NumberToPageMap[nextPageNumber];
    }
    console.log(nextPage);

    goTo(nextPage);
  };

  const onPlay = () => {
    togglePlay((prev) => ({ ...prev, [pageNumber]: true }));
  };

  return (
    <>
      <DriftingCloud />
      <div className="flex flex-col items-center justify-center">
        {pageNumber === 1 && <PageOne played={played[pageNumber] ?? false} />}
        {pageNumber === 2 && <PageTwo played={played[pageNumber] ?? false} />}
        {pageNumber === 3 && <Page3 />}
        <StoryNavigators
          dark={pageNumber >= 2}
          onPlay={onPlay}
          onNextAction={() => onNavigate(true)}
          onPreviousAction={() => onNavigate(false)}
          hidePrevious={pageNumber === 1}
        />
        Page {pageNumber}
      </div>
    </>
  );
};

export default PageNumber;
