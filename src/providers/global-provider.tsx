import { useEffect, useState } from "react";
import { GlobalContext } from "../contexts/global";
import { Pages } from "../types/common";

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [currentPage, setCurrentPage] = useState<Pages>(Pages.LOGIN);

  const login = () => {
    const expireTime = new Date();
    expireTime.setHours(expireTime.getDate() + 0.5); // add 1hour
    localStorage.setItem("is-login", "true");
    localStorage.setItem("expire-time", expireTime.toISOString());
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
    const expireTimeStr = localStorage.getItem("expire-time");
    const expireTime = expireTimeStr ? new Date(expireTimeStr) : null;
    if (!expireTime || expireTime < new Date()) {
      localStorage.removeItem("is-login");
      localStorage.removeItem("expire-time");
      setIsLogin(false);
      setCurrentPage(Pages.LOGIN);
      return;
    }

    const isAlreadyLogin = localStorage.getItem("is-login");
    if (isAlreadyLogin?.toString() === "true") {
      let page = localStorage.getItem("current-page");
      if (page === "undefined" || !page) page = Pages.HOME;
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
