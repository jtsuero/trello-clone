import './ListBox.css';

const ListBox = props => {
  return (
    <div className="list-container">
      <div className="header-container">
        <div className="list-name">{props.name}</div>
        <input type="button" value="..." className="list-button" />
      </div>

      <div className="card-container"></div>
      <input type="button" value="+ Add another card" className="list-button" />
    </div>
  );
};

export default ListBox;
