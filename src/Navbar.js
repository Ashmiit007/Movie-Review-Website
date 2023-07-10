import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Movie Terminal</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{ 
        }}>New Review</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;
