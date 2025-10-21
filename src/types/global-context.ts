import type { Pages } from "./common";

type GlobalContextType = {
  isLogin: boolean;
  login: () => void;
  returnEnvelope: () => void;
  currentPage: Pages;
  goTo: (page: Pages) => void;
};

export type { GlobalContextType };
