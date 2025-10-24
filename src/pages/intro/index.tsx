import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../contexts/global";
import { Pages } from "../../types/common";
import "./index.css";
import Blossom from "./blossom";
import GlowButton from "../../components/glow-btn";

const Intro = () => {
  const { goTo } = useContext(GlobalContext);
  const [showChat, setShowChat] = useState(false);
  useEffect(() => {
    const c = setTimeout(() => {
      document.querySelector("#blossom-pane")?.classList.remove("not-loaded");
      clearTimeout(c);
    }, 500);

    setTimeout(() => {
      setShowChat(true);
    }, 2000);
  }, []);

  return (
    <>
      <Blossom />
      <div
        style={{
          transition: "opacity 2s ease-in-out",
        }}
        className={`scroll-chat ${showChat ? "" : "opacity-0"}`}
      >
        <div className="bubble left">Lyn ơi, hôm nay của em như thế nào?</div>
        <div className="bubble right">
          Em thì bận bận chứ vẫn luôn vui tươi à
        </div>
        <div className="bubble right">lost connection🍂..</div>
        <div className="bubble left">
          Thực ra hôm nay anh rất nhớ em, công việc anh bận nhưng kiểu làm của
          anh cứ thoải mái với đời, anh luôn cố dành thời gian ít nhất cho công
          việc, để anh có thể làm nhưng việc khác
        </div>
        <div className="bubble left">
          Anh thích sự lãng mạn, anh thích làm cho em vui, anh biết sẽ còn thích
          nhiều thứ nếu được làm cùng em
        </div>
        <div className="bubble left">
          Về anh, gia đình anh có nhiều vấn đề, một ngày nào đó nếu em hỏi anh
          sẽ sẵn sàng kể hết❤️ Anh từng cố gắng rất nhiều, anh đi lên từ bàn tay
          trắng, giờ anh cũng hong phải giàu có gì, nhưng tương lai chắc chắn
          anh sẽ làm nhiều điều hơn nữa tại vì anh muốn sống 1 cuôc đời ý nghĩa
        </div>
        <div className="bubble right">👌</div>
        <div className="bubble right">Ỏ</div>
        <div className="bubble left">
          Anh từng yêu và vụn vỡ với một mối tình dài, mất vài năm, kết thúc đã
          không mấy tốt đẹp cho anh...
        </div>
        <div className="bubble right">...</div>
        <div className="bubble left">
          Anh có 1 vết thương sâu, vì anh từng sai, từng vấp ngã, biết mình
          không trưởng thành trong tình yêu, rồi anh không dám bước tiếp hay
          cũng không tìm thấy ai tiếp tục.
        </div>
        <div className="bubble left">
          Một giai dài tăm tối nhất của anh là ở nước ngoài 1 mình, bị trầm cảm,
          anh hoàn toàn ko nói chuyện với ai ngoài đồng nghiệp trong hơn 1 năm
          đó
        </div>
        <div className="bubble left">
          Giai đoạn buồn nhất đó anh từng ở nước ngoài 1 mình, anh từng trầm
          cảm, anh hoàn toàn ko nói chuyện với ai ngoài đồng nghiệp trong hơn 1
          năm đó
        </div>
        <div className="bubble right">Vậy giờ anh như thế nào?</div>
        <div className="bubble right">Và hôm nay?</div>
        <div className="bubble right">Là gì?</div>
        <div className="bubble left">
          Hôm nay (24/10/2025) anh nghĩ mình chắc chắn rất vui, anh hong mong nó buồn (T_T)
        </div>
        <div className="bubble left">Nên em </div>
        <div className="bubble left">Hãy tiếp tục nút ở dưới nho </div>
        <div className="flex flex-col items-center justify-center">
          <GlowButton onClick={() => goTo(Pages.PAGE_ONE)} />
        </div>
      </div>
    </>
  );
};

export default Intro;
