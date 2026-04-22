import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <header className="nav">
      <NavLink to="/" className="nav-brand">
        simon thuaud
      </NavLink>
      <nav className="nav-links">
        <NavLink
          to="/about"
          className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
        >
          about
        </NavLink>
      </nav>
    </header>
  );
}
