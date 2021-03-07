import React, {Component} from 'react';
import ListBox from './ListBox';

class Home extends Component {


  displayLists = () => {
    return (
      <div>
        <ListBox name='name' cards='card1' />
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.displayLists()}
      </div>
    )
  }
}

export default Home;
