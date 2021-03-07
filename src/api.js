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
    console.log(this.lists)
    return newList;

  }
}


const sharedApi = new api();
export default sharedApi;
