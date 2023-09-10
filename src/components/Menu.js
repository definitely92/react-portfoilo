import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="overlayMenu">
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/skill">Skill</Link>
        </li>
        {/* <li>
          <Link to="/script">Script</Link>
        </li> */}
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
