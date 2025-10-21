import CuteLoader from "../../components/cute-loading";
import "./index.css";

const Home = () => {
  return (
    <>
      <textarea
        className="cool-resize overflow-hidden"
        value="       Resize me for some magic! 🎇"
      ></textarea>
      <CuteLoader />
    </>
  );
};

export default Home;
