import { type FC } from "react";
import "./index.css";

const Blockquote: FC<{ show: boolean }> = ({ show }) => {
  return (
    <blockquote
      className={`otro-blockquote ${
        show ? "clicked" : ""
      } overflow-y-scroll max-h-[200px]`}
    >
      Trên đời này, việc gì ắt hẳn nếu vui thì sẽ không phải chuyện buồn, nếu có
      tình cảm thì phải thử!! Không thì sẽ bỏ lỡ cơ hội.
      <span>Nhà triết học không bao giờ nổi</span>
      Đi qua gần 1 tháng làm quen, anh thấy mình rất vui và hạnh phúc khi được
      gặp em, đó là lý do anh suốt ngày muốn gặp em, nên em đừng giận mỗi lúc
      anh xuất hiện nho! <br />
      Anh cũng không có nhỏ để thử yêu thêm 1 ai rồi chia ly nữa, nhưng anh sẽ
      không ràng buộc gì, nếu phải bắt đầu thứ gì đó, anh chắc chắn muốn học từ
      em, không phải em nhỏ tuổi hơn mà anh biết nhiều hơn em đâu. Anh luôn sẵn
      sàng lắng nghe em, sẽ luôn cố gắng có mặt khi em cần, và anh chắc chắn đó
      không phải lời hứa, hẹ hẹ
      <br />
      VẠI EM BIẾT CÁI THIỆP NÀY ĐỂ LÀM GÌ CHƯA?
      <br />
      <code><b>BINGO!!! Thưởng em cây kẹo (nợ)</b></code>
    </blockquote>
  );
};

export default Blockquote;
