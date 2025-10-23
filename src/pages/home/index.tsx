import GrumpyCloud from "../../components/backgrounds/grumpy-cloud";
import CuteLoader from "../../components/cute-loading";
import "./index.css";

const Home = () => {
  return (
    <>
      <GrumpyCloud />
      <textarea
        className="cool-resize overflow-hidden"
        value="       Resize me for some magic! 🎇"
      ></textarea>
      <CuteLoader />
    </>
  );
};

export default Home;
