import { Link } from "react-router-dom";
import { useContext, useEffect} from "react";
import { UserContext } from "./UserContext";
import '../src/App.css'

export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        // setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="logo">MJ Blog</Link>
      <nav>
        {username && (
          <>
            <div className="items">
              <Link to="/" className="item">Home</Link>
              <Link to="/about" className="item">About</Link>
              <Link to="/blog" className="item">Blog</Link>
              <Link to="/contact" className="item">Contact</Link>
            </div>
            <Link to="/create">Write a Blog</Link>
            <a href="/" onClick={logout} className="logout">Logout [{username}]</a>
          </>
        )}
        {!username && (
          <>
            <div className="items">
              <Link to="/" className="item">Home</Link>
              <Link to="/about" className="item">About</Link>
              <Link to="/blog" className="item">Blog</Link>
              <Link to="/contact" className="item">Contact</Link>
            </div>
            <nav>
              <Link to="/login">Login</Link>
              <Link to="/register" className="register">Register</Link>
            </nav>
          </>
        )}
      </nav>
    </header>
  );
}
