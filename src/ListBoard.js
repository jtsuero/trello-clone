import React, {Component} from 'react';
import ListBox from './ListBox';
import api from './api';
import './ListBoard.css'

class ListBoard extends Component {
  constructor() {
    super()
    this.state = {
      addList: false,
      newListTitle: '',
    }
  }

  displayLists = () => {
    return (
      <div>
        <ListBox name='name' cards='card1' />
      </div>
    )
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value})
  }

  //onclick show form
  addItem = () => {
    if (this.state.addList) {
      return (
        <form className='add-list-form'>
          <input type='input'
            name='newListTitle'
            value={this.state.newListTitle}
            placeholder='Enter list title...'
            className='list-name-input'
            onChange={this.handleChange} />
          <input type='submit' value='Add List' className='submit-list-button' />
        </form>
      )
    } else {
      return (
        <input type='button' value='+ Add Another List' className='add-list-button' onClick={() => this.setState({addList: true})} />
      )
    }
  }

  render() {
    return (
      <div className='board-container'>
        {this.displayLists()}
        {this.addItem()}
      </div>
    )
  }
}

export default ListBoard;
