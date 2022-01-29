import { Link } from 'react-router-dom';
import { GoPerson } from 'react-icons/go';

const Navbar = () => (
  <nav id="navbar">
    <h1 id="main-logo">
      <img src="/android-chrome-512x512.png" alt="logo" />
      Biblioteca
    </h1>
    <div className="nav-links">
      <Link to="/"> Books </Link>
      <Link to="/categories">Categories</Link>
    </div>

    <div id="icon-person">
      <GoPerson />
    </div>
  </nav>
);

export default Navbar;
