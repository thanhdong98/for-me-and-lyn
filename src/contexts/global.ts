import { createContext } from "react";
import type { GlobalContextType } from "../types/global-context";
import { Pages } from "../types/common";

export const GlobalContext = createContext<GlobalContextType>({
  isLogin: false,
  returnEnvelope: () => {},
  login: () => {},
  currentPage: Pages.LOGIN,
  goTo: () => {},
});
