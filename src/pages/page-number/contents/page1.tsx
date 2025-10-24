import { type FC } from "react";
import SliderImage from "../../../components/slider-images";
import Blockquote from "../../../components/blockquote";

const PageOne: FC<{ played?: boolean }> = ({ played }) => {
  return (
    <>
      <SliderImage />
      <Blockquote show={played ?? false} />
    </>
  );
};
export default PageOne;
