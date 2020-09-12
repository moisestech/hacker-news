import React, { useContext } from "react";
import ThemeContext from "../../contexts/theme";
import { NavLink } from "react-router-dom";

import ThemeButton from "./components/ThemeButton";
import NavHeader from "./components/NavHeader";

const activeStyle = { color: "white" };

function NavButtons() {
  return (
    <ul className="row nav">
      <li>
        <NavLink exact to="/" activeStyle={activeStyle} className="nav-link">
          Top
        </NavLink>
      </li>
      <li>
        <NavLink to="/new" activeStyle={activeStyle} className="nav-link">
          New
        </NavLink>
      </li>
    </ul>
  );
}

export default function Nav({ toggleTheme }) {
  const theme = useContext(ThemeContext);
  return (
    <nav className="row space-between">
      <NavHeader />
      <NavButtons />
      <ThemeButton theme={theme} toggleTheme={toggleTheme} />
    </nav>
  );
}
