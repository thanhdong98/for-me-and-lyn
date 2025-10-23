import "./index.css";

const NoteCard = () => {
  return (
    <div className="bday-card mb-20">
      <div className="bday-decor--container">
        <div className="bday-pic ">
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
          Ana, yet another year that we get to celebrate together! Hope you have
          a great day, and may your new age be full of health, love and
          laughter. Love you loads <br /> Camila
        </p>
        <p className="bday-decor bday-decor--bottom-right zoom-left-in-out">
          🎉
        </p>
      </div>
    </div>
  );
};

export default NoteCard;
