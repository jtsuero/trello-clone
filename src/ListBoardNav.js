import './ListBoardNav.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

const ListBoardNav = () => {
  return (
    <div className="nav-container">
      <div className="list-board-left-cluster">
        <div className="nav-board-clicky">Trello Clone</div>
        <FontAwesomeIcon icon={faStar} className="nav-board-clicky" />
        <div className="nav-board-clicky">Personal</div>
        <div className="nav-board-clicky">Private</div>
        <div className="nav-board-clicky">Invite</div>
      </div>
      <div className="list-board-right-cluster">
        <div className="nav-board-clicky">Butler</div>
        <div className="nav-board-clicky">Show Menu</div>
      </div>
    </div>
  );
};

export default ListBoardNav;
