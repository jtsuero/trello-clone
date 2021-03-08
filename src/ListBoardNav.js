import './ListBoardNav.css';
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

const ListBoardNav = () => {
  const [menuActive, toggleMenu] = useState(true);

  const sideMenu = () => {
    if (menuActive) {
      return (
        <div className="side-menu-container">
          <div className="side-menu-header">Menu</div>
          <div className="side-menu-link">About this board</div>
          <div className="side-menu-link">Change background</div>
          <div className="side-menu-link">Search Cards</div>
          <div className="side-menu-link">Stickers</div>
          <div className="side-menu-link">Butler</div>
        </div>
      );
    }
  };
  return (
    <div className="nav-container">
      <div className="list-board-left-cluster">
        <div className="nav-board-clicky">Trello Clone</div>
        <FontAwesomeIcon
          icon={faStar}
          className="nav-board-clicky nav-board-clicky-icon"
        />
        <div className="nav-board-clicky">Personal</div>
        <div className="nav-board-clicky">Private</div>
        <div className="nav-board-clicky">Invite</div>
      </div>
      <div className="list-board-right-cluster">
        <div className="nav-board-clicky">Butler</div>
        <div
          className="nav-board-clicky"
          onClick={() => toggleMenu(!menuActive)}
        >
          Show Menu
        </div>
      </div>
      {sideMenu()}
    </div>
  );
};

export default ListBoardNav;
