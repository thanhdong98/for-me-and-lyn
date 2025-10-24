import "./index.css";
import cakeImg from "../../assets/images/cake.jpg";
import funnyImg from "../../assets/images/funny.jpg";
import nguo0_nguaImg from "../../assets/images/nguo0_ngua.jpg";
import sushiImg from "../../assets/images/sushi.jpg";
import lynFlowerImg from "../../assets/images/lyn-flower.jpg";

const SliderImage = () => {
  return (
    <div className="gallery mt-[5vh]">
      <img
        src={cakeImg}
        alt="a dream catcher"
        className="object-fit"
      />
      <img src={funnyImg} alt="a piano" />
      <img src={nguo0_nguaImg} alt="a live concert" />
      <img src={sushiImg} alt="Paris" />
      <img src={lynFlowerImg} alt="A women in kayak" />
    </div>
  );
};

export default SliderImage;
