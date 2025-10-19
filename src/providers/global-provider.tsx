import { createContext, useEffect, useState } from "react";
import { Pages } from "../types/common";
import type { GlobalContextType } from "../types/global-context";

export const GlobalContext = createContext<GlobalContextType>({
  isLogin: false,
  login: () => {},
  currentPage: Pages.LOGIN,
  goTo: () => {},
});

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [currentPage, setCurrentPage] = useState<Pages>(Pages.LOGIN);

  const login = () => {
    localStorage.setItem("is-login", "true");
    setIsLogin(true);
    setCurrentPage(Pages.HOME);
  };

  const goTo = (page: Pages) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const isLogin = localStorage.getItem("is-login");
    if (isLogin?.toString() === "true") {
      setIsLogin(true);
      setCurrentPage(Pages.HOME);
    }
  }, []);

  return (
    <GlobalContext.Provider value={{ isLogin, login, currentPage, goTo }}>
      {children}
    </GlobalContext.Provider>
  );
};
