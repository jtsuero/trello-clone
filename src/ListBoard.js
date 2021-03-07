import React, {Component} from 'react';
import ListBox from './ListBox';
import './ListBoard.css'

class ListBoard extends Component {


  displayLists = () => {
    return (
      <div>
        <ListBox name='name' cards='card1' />
      </div>
    )
  }

  render() {
    return (
      <div className='board-container'>
        {this.displayLists()}
      </div>
    )
  }
}

export default ListBoard;
