import { useContext } from "react";
import PinLogin from "./pages/login";
import Home from "./pages/home";
import Intro from "./pages/intro";
import type { GlobalContextType } from "./types/global-context";
import { Pages } from "./types/common";
import { GlobalContext } from "./contexts/global";
import FinalEnding from "./pages/final-ending";
import PageNumber from "./pages/page-number";

const PAGES: Record<Pages, React.ReactNode> = {
  [Pages.LOGIN]: <PinLogin />,
  [Pages.HOME]: <Home />,
  [Pages.INTRO]: <Intro />,
  [Pages.FINAL_ENDING]: <FinalEnding />,

  [Pages.PAGE_ONE]: <PageNumber pageNumber={1} />,
  [Pages.PAGE_TWO]: <PageNumber pageNumber={2} />,
  [Pages.PAGE_THREE]: <PageNumber pageNumber={3} />,
  [Pages.PAGE_FOUR]: <PageNumber pageNumber={4} />,
  [Pages.PAGE_FIVE]: <PageNumber pageNumber={5} />,
  [Pages.PAGE_SIX]: <PageNumber pageNumber={6} />,
  [Pages.PAGE_SEVEN]: <PageNumber pageNumber={7} />,
  [Pages.PAGE_EIGHT]: <PageNumber pageNumber={8} />,
  [Pages.PAGE_NINE]: <PageNumber pageNumber={9} />,
  [Pages.PAGE_TEN]: <PageNumber pageNumber={10} />,
};

const Routes = () => {
  const { currentPage, isLogin, returnEnvelope, goTo } =
    useContext<GlobalContextType>(GlobalContext);


    
  return (
    <>
      {isLogin && (
        <div className="flex flex-col items-center justify-center">
          <div>
            {currentPage === Pages.HOME && (
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-row items-center justify-center">
                  {[
                    Pages.INTRO,
                    Pages.PAGE_ONE,
                    Pages.PAGE_TWO,
                    Pages.PAGE_THREE,
                    Pages.PAGE_FOUR,
                    Pages.PAGE_FIVE,
                    Pages.PAGE_SIX,
                    Pages.PAGE_SEVEN,
                    Pages.PAGE_EIGHT,
                    Pages.PAGE_NINE,
                    Pages.PAGE_TEN,
                  ].map((page) => (
                    <button
                      className="btn-12"
                      key={page}
                      onClick={() => goTo(page)}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                <button className="btn-12" onClick={() => returnEnvelope()}>
                  Đóng thiệp
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      {PAGES[currentPage]}
    </>
  );
};

export default Routes;
