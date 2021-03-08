import './CardBox.css';
const CardBox = ({title, cardId, deleteCard}) => {
  return (
    <div className="card-container">
      <div className="single-card">{title}</div>
      <input
        type="button"
        className="delete-card-button"
        value="X"
        onClick={() => deleteCard({cardId})}
      />
    </div>
  );
};

export default CardBox;
