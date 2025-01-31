import { Link } from "react-router";

function Navigation() {
    return (
        <div class="nav-bar">
            <Link to="/">Landing Page</Link>
            <Link to="/privacy101/homepage">Homepage</Link>
            <Link to="/privacy101/learning-hub">Learning Hub</Link>
            <Link to="/privacy101/recommendations">Recommendations</Link>
        </div>
    );
}

export default Navigation;