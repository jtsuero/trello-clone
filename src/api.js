import List from './List';

class api {
  constructor() {
    this.listIds = {};
    this.lists = {};
    this.nextListId = 1;
  }

  createList = (name) => {
    let newList = new List({name, id: this.nextListId})
    this.lists[this.nextListId] = newList;
    this.nextListId += 1;
    return newList;

  }

  getLists = () => {
    return Object.values(this.lists);
  }
}


const sharedApi = new api();
export default sharedApi;
