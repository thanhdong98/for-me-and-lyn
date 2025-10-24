import "./index.css";

const SliderImage = () => {
  return (
    <div className="gallery mt-[10vh]">
      <img
        src="/images/cake.jpg"
        alt="a dream catcher"
        className="object-fit"
      />
      <img src="/images/funny.jpg" alt="a piano" />
      <img src="/images/nguo0_ngua.jpg" alt="a live concert" />
      <img src="/images/sushi.jpg" alt="Paris" />
      <img src="/images/lyn-flower.jpg" alt="A women in kayak" />
    </div>
  );
};

export default SliderImage;
