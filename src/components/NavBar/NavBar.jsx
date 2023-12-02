import "./NavBar.css";
import logo from "../../assets/images/logo-removebg-preview.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul className="nav-bar">
        <li className="logo">
          <Link to="/">
            <img src={logo} />
          </Link>
        </li>
        <input type="checkbox" id="check" />
        <span className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <label htmlFor="check" className="close-menu">
            <i className="fas fa-times"></i>
          </label>
        </span>
        <label htmlFor="check" className="open-menu">
          <i className="fas fa-bars"></i>
        </label>
      </ul>
    </nav>
  );
};

export default NavBar;
