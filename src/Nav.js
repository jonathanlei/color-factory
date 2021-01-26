import { NavLink } from "react-router-dom";
import "./Nav.css";

/** 
 * Nav renders a NavLink to add a new color.
 * 
 * state: none
 * props: none
 * 
 * App -> Nav
 **/  
function Nav() {
  return (
    <nav className="Nav">
      <h2>Welcome to the color factory.</h2>
      <NavLink to="/colors/new">Add a color</NavLink>
    </nav>
  );
}

export default Nav;
