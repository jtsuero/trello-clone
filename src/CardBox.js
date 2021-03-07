import './CardBox.css';
const CardBox = ({title, id}) => {
  return (
    <div className="single-card" key={id}>
      {title}
    </div>
  );
};

export default CardBox;
