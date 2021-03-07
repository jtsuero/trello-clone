import './ListBox.css';

const ListBox = () => {
  return (
    <div className='list-container'>
      <div className='header-container'>
        <div className='list-name'>
          Name
        </div>
        <input type='button' value='...' className='list-button' />
      </div>

      <div className='card-container'>
        Card 1
      </div>
      <input type='button' value='+ Add another card' className='list-button' />
    </div>
  )
}

export default ListBox;
