import { useContext, type FC } from "react";
import { GlobalContext } from "../../contexts/global";
import { Pages } from "../../types/common";

const NumberToPageMap = [
  Pages.INTRO,
  Pages.PAGE_ONE,
  Pages.PAGE_TWO,
  Pages.PAGE_THREE,
  Pages.PAGE_FOUR,
  Pages.PAGE_FIVE,
  Pages.PAGE_SIX,
  Pages.PAGE_SEVEN,
  Pages.PAGE_EIGHT,
  Pages.PAGE_NINE,
  Pages.PAGE_TEN,
];

const PageNumber: FC<{ pageNumber: number }> = ({ pageNumber }) => {
  const { goTo } = useContext(GlobalContext);

  const onClick = () => {
    const nextPage =
      pageNumber === 10 ? Pages.FINAL_ENDING : NumberToPageMap[pageNumber + 1];
    goTo(nextPage);
  };

  return (
    <div>
      <h1>Trang số {pageNumber}</h1>
      <br />
      <button onClick={onClick}>Next</button>
    </div>
  );
};

export default PageNumber;
