import { useContext } from "react";
import GlowButton from "../../components/glow-btn";
import { GlobalContext } from "../../contexts/global";
import { Pages } from "../../types/common";

const Intro = () => {
  const { goTo } = useContext(GlobalContext);
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      Bắt đầu:Lý do, mục đích, giới thiệu
      <GlowButton onClick={() => goTo(Pages.PAGE_ONE)} />
    </div>
  );
};

export default Intro;
