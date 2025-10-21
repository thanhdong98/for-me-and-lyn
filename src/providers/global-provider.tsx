import { useEffect, useState } from "react";
import { GlobalContext } from "../contexts/global";
import { Pages } from "../types/common";

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [currentPage, setCurrentPage] = useState<Pages>(Pages.LOGIN);

  const login = () => {
    localStorage.setItem("is-login", "true");
    setIsLogin(true);
    setCurrentPage(Pages.HOME);
  };

  const returnEnvelope = () => {
    localStorage.removeItem("is-login");
    setIsLogin(false);
    setCurrentPage(Pages.LOGIN);
  };

  const goTo = (page: Pages) => {
    setCurrentPage(page);
    localStorage.setItem("current-page", page);
  };

  useEffect(() => {
    const isLogin = localStorage.getItem("is-login");
    if (isLogin?.toString() === "true") {
      const page = localStorage.getItem("current-page") ?? Pages.HOME;
      setIsLogin(true);
      setCurrentPage(page as Pages);
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{ returnEnvelope, isLogin, login, currentPage, goTo }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
