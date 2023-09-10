import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="overlayMenu">
      <ul>
        <li>
          <Link to={process.env.PUBLIC_URL + "/about"}>About</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/project"}>Project</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/skill"}>Skill</Link>
        </li>
        {/* <li>
          <Link to="/script">Script</Link>
        </li> */}
        <li>
          <Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
