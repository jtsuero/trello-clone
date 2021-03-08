import List from './List';
import Card from './Card';

class api {
  constructor() {
    this.lists = {};
    this.cards = {};
    this.nextListId = 1;
    this.nextCardId = 1;
  }

  createList = name => {
    let newList = new List({name, id: this.nextListId});
    this.lists[this.nextListId] = newList;
    this.nextListId += 1;
    return newList;
  };

  updateList = ({listId, name}) => {
    this.lists[listId].name = name;
    return this.lists[listId];
  };

  getLists = () => {
    return Object.values(this.lists);
  };

  createCard = ({title, listId}) => {
    let newCard = new Card({title, id: this.nextCardId});
    this.cards[this.nextCardId] = newCard;
    this.lists[listId].cards[this.nextCardId] = newCard;
    this.nextCardId += 1;
    return newCard;
  };

  deleteCard = ({listId, cardId}) => {
    delete this.lists[listId].cards[cardId];
  };
}

const sharedApi = new api();
export default sharedApi;
