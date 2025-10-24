import { useContext, type CSSProperties } from "react";
import PixelButton from "../../../../components/pixel-btn";
import { GlobalContext } from "../../../../contexts/global";
import { Pages } from "../../../../types/common";
import "./index.css";

const PageFour = () => {
  const { goTo } = useContext(GlobalContext);

  return (
    <div className="container">
      <h1 style={{ background: "rgba(0, 0, 0, 0.3)" }} className="py-1">
        <span style={{ color: "#f840a8", textDecoration: "underline" }}>
          Anh
        </span>{" "}
        Chắc chắn 1 điều rằng{" "}
        <span style={{ color: "#f840a8", textDecoration: "underline" }}>
          Em
        </span>{" "}
        không phải người bình thường. Rất bất thường
      </h1>
      <div className="sprite-wrapper">
        <div className="book">
          <div className="carousel" style={{ "--slides": 4 } as CSSProperties}>
            <div className="sprite"></div>

            <div className="carousel-item">
              <div className="page-container">
                <div className="page left-page">
                  <div>
                    <p style={{ margin: 0, textIndent: "0.4rem" }}>
                      🧩 Tóm lại là <br />
                      <span style={{ textDecorationLine: "spelling-error" }}>
                        Anh có nhiều câu hỏi muốn hỏi em
                        <br />
                      </span>
                      . Liệu ngày mai, anh có thể được làm vệ sĩ của em không,
                      anh muốn ở bên em thêm xíu
                    </p>
                    <img
                      src="https://assets.codepen.io/36869/brilliant.gif"
                      alt=""
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                <div className="page right-page">
                  <div>
                    <p style={{ margin: 0, textIndent: "0.4rem" }}>
                      📚 Hoặc là mình cùng nhau phát triển thật nhiều
                    </p>
                    <br />
                    <ul
                      style={{
                        padding: 0,
                        listStyle: "auto",
                        listStylePosition: "inside",
                        margin: 0,
                      }}
                    >
                      <li>Đi khắp thế gian</li>
                      <li>Ăn cùng nhau</li>
                      <li>Học cùng nhau</li>
                      <li>Chơi cùng nhau</li>
                      <li>Làm điều mới</li>
                    </ul>
                    <br />
                    <p style={{ margin: 0, textIndent: "0.4rem" }}>
                      🧠 Anh và <em></em>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="page-container">
                <div className="page left-page">
                  <div>
                    <br />
                    <p style={{ margin: 0, textIndent: "0.4rem" }}>
                      🖼️ Thực ra anh rất muốn được em quan tâm, hẹ hẹ
                    </p>
                    <p style={{ margin: 0, textIndent: "0.4rem" }}>
                      Nhưng mà nếu em bận anh cũng ráng thông cảm, dù là anh rất
                      nhớ..
                    </p>
                    <br />
                    <p style={{ margin: 0, textIndent: "0.4rem" }}>
                      🧪 Muốn được em kể chuyện, hát, khùng điên
                    </p>
                  </div>
                </div>
                <div className="page right-page">
                  <div>
                    <p style={{ margin: 0, textIndent: "0.4rem" }}>
                      📦 Nên được ở bên em rất hạnh phúc
                    </p>
                    <p style={{ margin: 0 }}>
                      Nên đừng la tại sao anh cứ chạy qua gặp em nho
                    </p>
                    <br />
                    <img
                      src="https://assets.codepen.io/36869/pixel-cat.jpg"
                      width="80%"
                      className="m-auto"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="page-container">
                <div className="page left-page">
                  <div>
                    Anh chắc chắn sẽ rất quan tâm, và tình cảm nữa, dù em nói
                    anh KHÙNG!!! thì anh cũng thua em 1 bậc, nhưng mà sự nghiệp
                    với cuộc sống anh muốn ổn định và tự lo cho anh được, nên ai
                    mà quen anh chắc chắn sướnggggg, ANH ĐẢM BẢO
                  </div>
                </div>
                <div className="page right-page">
                  <div>
                    Anh luôn cố dành thời gian cho công việc ít nhất để có thể
                    làm nhiều thứ hơn, nhưng đối với người quan trọng của anh,
                    lúc nào anh cũng ưu tiên số 1. Anh sẽ luôn có lòng tin, mà
                    do yêu nhiều, nên đừng chê nếu như anh nũng em
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="page-container">
                <div className="page left-page">
                  <div>
                    Anh từng hơi toxic, stress nhiều nên bị không kiềm nén được
                    cảm xúc nên có mấy lời nói hơi ..., nếu em đồng ý, em có thể
                    ngồi xuống nói chuyện với anh, dạy anh cách yêu thương
                    không?
                    <br />
                    <b>Nếu được vậy anh sẽ rất hạnh phúc!</b>
                  </div>
                </div>
                <div className="page right-page">
                  <div className="w-[120px] h-[200px]">
                    <PixelButton onClick={() => goTo(Pages.FINAL_ENDING)} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageFour;
