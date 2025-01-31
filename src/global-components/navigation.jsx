import { Link } from "react-router";

function Navigation() {
    return (
        <div class="nav-bar">
            <Link to="/">Landing Page</Link>
            <Link to="/homepage">Homepage</Link>
            <Link to="/learning-hub">Learning Hub</Link>
            <Link to="/recommendations">Recommendations</Link>
        </div>
    );
}

export default Navigation;