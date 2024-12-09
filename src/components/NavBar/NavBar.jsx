import { Link } from 'react-router-dom';

const NavBar = ({ user }) => {
  return (
    <>
      { user ? (
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="">Sign Out</Link></li>
          </ul>
        </nav>
      ) : (
        <nav>
          <ul>
            <li><Link to="/signin">Sign In</Link></li>
          </ul>
        </nav>
      )}
    </>
  )
}

export default NavBar;
