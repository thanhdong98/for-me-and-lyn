import "./App.css";
import GlobalProvider from "./providers/global-provider";
import Routes from "./routes";
import "./components/common.css";
import { useEffect, useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (new Date().getTime() > new Date("2025-10-25T11:30:00.000Z").getTime()) {
      setShow(true);
    }
  }, []);

  return show ? (
    <GlobalProvider>
      <Routes />
    </GlobalProvider>
  ) : (
    <div className="flex items-center justify-center h-screen">
      <h1>Chưa tới giờ 🕔</h1>
    </div>
  );
}

export default App;
