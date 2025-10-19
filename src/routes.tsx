import { useContext } from "react";
import { GlobalContext } from "./providers/global-provider";
import PinLogin from "./pages/login";
import Home from "./pages/home";
import Intro from "./pages/intro";
import type { GlobalContextType } from "./types/global-context";
import { Pages } from "./types/common";

const PAGES: Record<Pages, React.ReactNode> = {
  [Pages.LOGIN]: <PinLogin />,
  [Pages.HOME]: <Home />,
  [Pages.INTRO]: <Intro />,
};

const Routes = () => {
  const { currentPage } = useContext<GlobalContextType>(GlobalContext);

  return <>{PAGES[currentPage]}</>;
};

export default Routes;
