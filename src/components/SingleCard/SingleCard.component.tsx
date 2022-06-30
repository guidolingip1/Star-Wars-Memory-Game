import "./SingleCard.styles.css";

interface SingleCardProps {
  card: Card;
  handleChoice: Function;
  flipped: boolean;
  disabled: boolean;
}

interface Card {
  src: string;
}

export const SingleCard: React.FC<SingleCardProps> = ({ card, handleChoice, flipped, disabled }) => {
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} alt="card front" className="front" />
        <img
          src="/img/back.jpg"
          alt="card back"
          onClick={() => {
            if (!disabled) handleChoice({ card });
          }}
          className="back"
        />
      </div>
    </div>
  );
};
