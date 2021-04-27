import { Link } from "react-router-dom";
import './styles.css';

const Navbar = () => {
    return (
        <nav className="main-navbar">
            <Link to="/" className="nav-logo-text">Bootcamp DevSuperior</Link>
        </nav>
    );
}

export default Navbar;

