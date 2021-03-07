import './ListBox.css';
import React, {Component} from 'react';

class ListBox extends Component {
  constructor() {
    super();
    this.state = {
      addCard: false,
      newCardTitle: '',
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  };

  addCard = () => {
    if (this.state.addCard) {
      return (
        <form className="add-list-form" onSubmit={this.handleListSubmit}>
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

  render() {
    return (
      <div className="list-container">
        <div className="header-container">
          <div className="list-name">{this.props.name}</div>
          <input type="button" value="..." className="list-button" />
        </div>

        <div className="card-container"></div>
        {this.addCard()}
      </div>
    );
  }
}

export default ListBox;
