import "./App.css";
import { GlobalProvider } from "./providers/global-provider";
import Routes from "./routes";

function App() {
  return (
    <GlobalProvider>
      <Routes />
    </GlobalProvider>
  );
}

export default App;
