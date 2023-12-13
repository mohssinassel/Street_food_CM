import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
export default function Sidebar({links}) {
    return (
        <div className="sidebar">
            {links.map(link => (
                <Link className="sidebar-link" to={link.path} key={link.name}>
                    <FontAwesomeIcon icon={link.icon} />
                    {link.name}</Link>
            ))}
        </div>
    )
}