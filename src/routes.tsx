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
};

const Routes = () => {
  const { currentPage } = useContext<GlobalContextType>(GlobalContext);

  return <>{PAGES[currentPage]}</>;
};

export default Routes;
