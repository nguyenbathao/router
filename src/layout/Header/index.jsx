import { Link } from "react-router-dom";
import "./style.css"

const Header = () =>{
    return (
        <div className="header">
            <ul>
                <li>
                    <Link to = "/">Home</Link>
                </li>
                <li>
                    <Link to = "/about">About</Link>
                </li>
                <li>
                    <Link to = "/contact">Contact</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header