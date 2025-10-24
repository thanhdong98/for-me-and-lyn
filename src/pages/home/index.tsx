import { useContext, useState } from "react";
import GrumpyCloud from "../../components/backgrounds/grumpy-cloud";
import CuteLoader from "../../components/cute-loading";
import "./index.css";
import { GlobalContext } from "../../contexts/global";
import { Pages } from "../../types/common";

const Home = () => {
  const { goTo } = useContext(GlobalContext);
  const [showLoader, toggleShowLoader] = useState(false);

  const handleClickBtn = () => {
    if (showLoader) {
      goTo(Pages.INTRO);
    } else toggleShowLoader(true);
  };

  return (
    <>
      <GrumpyCloud />
      <textarea
        id="textA"
        name="text"
        className={`cool-resize absolute top-10 w-[80vw] h-[60vh] p-4 left-0 right-0 mx-auto pb-20 ${
          showLoader ? "show" : ""
        }`}
        value={`🎇 Xin giới thiệu với bé Lyn, đây là dự án mấy ngày qua anh ấp ủ, nhìn nó có cute giống em không??? Anh làm ngày làm đêm để kịp hôm nay cho em thấy vì thời gian hơi gấp rút xíu, nên có một vài lỗi (bug), mong em hong phải tester và tìm ra.
Anh làm cái này cũng có mục đích nè, nhưng mà giờ chỉ là mới bắt đầu, chưa thể nói cho em biết được chuyện gì sẽ xảy ra được.
Với tất cả sự chân thành của anh, cảm ơn em đã đọc những dòng này thật cẩn thận, anh ở tuổi này cũng chưa hẳn lớn nhưng cũng ko còn nhỏ để thôi hy vọng đây là một trong những kỷ niệm đẹp nhất anh có thể cùng ai đó trải qua, anh muốn nó thật ý nghĩa nếu mục đích của nó thành công, còn không thì anh chưa nghĩa tới nữa T_T
Cùng anh bắt đầu bắt nhannn!!!
                    From: Anh

                    `}
      ></textarea>
      <CuteLoader onClick={handleClickBtn}>
        {showLoader ? "Xem thui" : "Start"}
      </CuteLoader>
    </>
  );
};

export default Home;
