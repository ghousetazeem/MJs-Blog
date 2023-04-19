import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <Link to="/" className="logo">MJ'S Blog</Link>
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
        </header>
    );
}
