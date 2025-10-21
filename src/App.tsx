import "./App.css";
import GlobalProvider from "./providers/global-provider";
import Routes from "./routes";
import "./components/common.css";

function App() {
  return (
    <GlobalProvider>
      <Routes />
    </GlobalProvider>
  );
}

export default App;
