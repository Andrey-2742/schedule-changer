import { Link } from "react-router-dom";
import "./styles/LinkButton.css";

function LinkButton({to, text, onClick}) {
    return (
        <Link className="link" to={to} onClick={onClick}>{text}</Link>
    );
}

export default LinkButton;
