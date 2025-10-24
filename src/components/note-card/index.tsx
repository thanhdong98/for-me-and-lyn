import "./index.css";

const NoteCard = () => {
  return (
    <div className="bday-card mb-10">
      <div className="bday-decor--container">
        <div className="bday-pic">
          <img src="/images/bumble.jpg" />
        </div>

        <p className="bday-decor bday-decor--top-right float">🎈</p>
        <p className="bday-decor bday-decor--top-left spin">🌼</p>
      </div>

      <h1 className="bday-banner">
        <span>Cảm ơn em</span> <span>vì đã đến</span>
      </h1>

      <div className="bday-message bday-message--paper">
        <p>
          <span className="px-6"> </span>Bumble đồ hen, Không thể tin được là em match xong ẻm kêu quẹt đại,
          trong khi mình thì đọc kỹ profile ẻmmmm - 01/10/2025
        </p>
        <p className="bday-decor bday-decor--bottom-right zoom-left-in-out">
          🎉
        </p>
      </div>
    </div>
  );
};

export default NoteCard;
