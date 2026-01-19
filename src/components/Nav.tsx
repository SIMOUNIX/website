import { NavLink } from "react-router-dom";
import { categories } from "../lib/categories";

const navItems = [
  { to: "/", label: "Home" },
  ...categories.map((category) => ({
    to: category.path,
    label: category.label,
  })),
];

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-brand">simounix</div>
      <nav className="nav-links">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
