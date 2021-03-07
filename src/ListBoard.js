import React, {Component} from 'react';
import ListBox from './ListBox';
import './ListBoard.css'

class ListBoard extends Component {


  displayLists = () => {
    return (
      <div className='list-board'>
        <ListBox name='name' cards='card1' />
      </div>
    )
  }

  render() {
    return (
      <div className='home-container'>
        {this.displayLists()}
      </div>
    )
  }
}

export default ListBoard;
