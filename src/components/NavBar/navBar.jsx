import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="bottom-nav">
      <Link to="/feed" className="nav-btn">
        <span className="icon">🏠</span>
      </Link>

      <Link to="/conversations" className="nav-btn oval">
       💬
      </Link>

      <Link to="/createPost" className="nav-btn">
        <span className="icon">➕</span>
      </Link>

      <Link to="/profile" className="nav-btn oval">
        👤
      </Link>
    </nav>
  );
};

export default Navbar;
