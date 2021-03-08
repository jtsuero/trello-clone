import './ListBox.css';
import React, {Component} from 'react';
import CardBox from './CardBox';
import api from './api';

class ListBox extends Component {
  constructor() {
    super();
    this.state = {
      addCard: false,
      newCardTitle: '',
      editName: false,
      newListName: '',
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  };

  handleCardSubmit = e => {
    e.preventDefault();
    api.createCard({
      title: this.state.newCardTitle,
      listId: this.props.listId,
    });
    this.setState({addCard: false, newCardTitle: ''});
  };

  addCard = () => {
    if (this.state.addCard) {
      return (
        <form className="add-list-form" onSubmit={this.handleCardSubmit}>
          <input
            type="input"
            name="newCardTitle"
            value={this.state.newCardTitle}
            placeholder="Enter a title for this card..."
            className="card-name-input"
            onChange={this.handleChange}
          />
          <input
            type="submit"
            value="Add Card"
            className="submit-list-button"
          />
        </form>
      );
    } else {
      return (
        <input
          type="button"
          value="+ Add another card"
          className="list-button"
          onClick={() => this.setState({addCard: true})}
        />
      );
    }
  };

  deleteCard = ({cardId}) => {
    api.deleteCard({listId: this.props.listId, cardId});
    this.setState({addCard: false});
  };

  submitNameChange = e => {
    e.preventDefault();
    this.props.updateName({
      listId: this.props.listId,
      name: this.state.newListName,
    });
    this.setState({newListName: '', editName: false});
  };

  render() {
    let cardName = (
      <div
        className="list-name"
        onClick={() => this.setState({editName: true})}
      >
        {this.props.name}
      </div>
    );
    if (this.state.editName) {
      cardName = (
        <form onSubmit={this.submitNameChange}>
          <input
            type="text"
            value={this.state.newListName}
            name="newListName"
            placeholder={this.props.name}
            onChange={this.handleChange}
          />
        </form>
      );
    }
    return (
      <div className="list-container">
        <div className="header-container">
          {cardName}
          <input
            type="button"
            value="X"
            className="list-button"
            onClick={() => this.props.deleteList(this.props.listId)}
          />
        </div>

        <div className="cards-container">
          {Object.values(this.props.cards).map(card => (
            <CardBox
              title={card.title}
              cardId={card.id}
              deleteCard={this.deleteCard}
              key={card.id}
            />
          ))}
        </div>
        {this.addCard()}
      </div>
    );
  }
}

export default ListBox;
