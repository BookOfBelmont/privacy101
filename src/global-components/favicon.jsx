import "../styles/favicon.css";
import Title from "./title";
import { ReactComponent as Icon } from "./lock-icon.svg";

let x = window.innerWidth;
let y = window.innerHeight;
let base;

if (x > y) {
    base = y / 2;
} else {
    base = x / 2;
}

function Favicon() {
    return (
        <div className="favicon">
            <Title />
            <Icon height={base} width={base} />
        </div>
    );
}

export default Favicon;