import './Navbar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrello} from '@fortawesome/free-brands-svg-icons';
import {
  faEllipsisH,
  faHome,
  faPlus,
  faInfoCircle,
  faBell,
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="left-cluster">
        <FontAwesomeIcon icon={faEllipsisH} className="nav-icon" />
        <FontAwesomeIcon icon={faHome} className="nav-icon" />
        <FontAwesomeIcon icon={faTrello} className="nav-icon" />
      </div>
      <div className="middle-cluster">
        <FontAwesomeIcon icon={faTrello} className="logo-icon" />
        <div className="logo-name">Trello</div>
      </div>
      <div className="right-cluster">
        <FontAwesomeIcon icon={faPlus} className="nav-icon" />
        <FontAwesomeIcon icon={faInfoCircle} className="nav-icon" />
        <FontAwesomeIcon icon={faBell} className="nav-icon" />
      </div>
    </div>
  );
};

export default Navbar;
