import './App.css';
import ListBoard from './ListBoard';
import Navbar from './Navbar';
import ListBoardNav from './ListBoardNav';

function App() {
  return (
    <div className="App">
      <div className="backdrop"></div>
      <Navbar />
      <ListBoardNav />
      <ListBoard />
    </div>
  );
}

export default App;
