import './ListBox.css';

const ListBox = () => {
  return (
    <div className='list-container'>
      <div className='list-name'>
        Name
      </div>
      <div className='card-container'>
        Card 1
      </div>
      <input type='button' value='Add another card' />
    </div>
  )
}

export default ListBox;
