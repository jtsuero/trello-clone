import React, {Component} from 'react';
import ListBox from './ListBox';
import api from './api';
import './ListBoard.css';

class ListBoard extends Component {
  constructor() {
    super();
    this.state = {
      addList: false,
      newListTitle: '',
      lists: null,
    };
  }

  displayLists = () => {
    if (this.state.lists) {
      return this.state.lists.map(list => (
        <div key={list.id}>
          <ListBox name={list.name} listId={list.id} cards={list.cards} />
        </div>
      ));
    }
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  };

  handleListSubmit = e => {
    e.preventDefault();
    api.createList(this.state.newListTitle);
    this.setState({addList: false, newListTitle: '', lists: api.getLists()});
  };

  addList = () => {
    if (this.state.addList) {
      return (
        <form className="add-list-form" onSubmit={this.handleListSubmit}>
          <input
            type="input"
            name="newListTitle"
            value={this.state.newListTitle}
            placeholder="Enter list title..."
            className="list-name-input"
            onChange={this.handleChange}
          />
          <input
            type="submit"
            value="Add List"
            className="submit-list-button"
          />
        </form>
      );
    } else {
      return (
        <input
          type="button"
          value="+ Add Another List"
          className="add-list-button"
          onClick={() => this.setState({addList: true})}
        />
      );
    }
  };

  render() {
    return (
      <div className="board-container">
        {this.displayLists()}
        {this.addList()}
      </div>
    );
  }
}

export default ListBoard;
