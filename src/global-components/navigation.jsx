import "../styles/navigation.css"
import { Link } from "react-router";
import { NavLink } from "react-router";

function Navigation() {
    return (
        <div class="nav-bar">
            <NavLink to="/">Landing Page</NavLink>
            <NavLink to="/homepage">Homepage</NavLink>
            <NavLink to="/learning-hub">Learning Hub</NavLink>
            <NavLink to="/recommendations">Recommendations</NavLink>
        </div>
    );
}

export default Navigation;