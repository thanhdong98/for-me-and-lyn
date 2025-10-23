import { useContext } from "react";
import IluText from "../components/ilu-text";
import NextButton from "../components/next-button";
import { GlobalContext } from "../contexts/global";
import { Pages } from "../types/common";

const FinalEnding = () => {
  const { goTo } = useContext(GlobalContext);
  return (
    <div>
      <IluText />
      <div className="flex justify-center">
        <NextButton onClick={() => goTo(Pages.HOME)} />
      </div>
    </div>
  );
};

export default FinalEnding;
