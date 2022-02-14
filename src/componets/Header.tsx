import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav className="nav-bar">
        <ul className="nav-bar__list">
          <li className="nav-bar__item">
            <NavLink to="/quotes" className="nav-bar__link">
              All Quotes
            </NavLink>
          </li>
          <li className="nav-bar__item">
            <NavLink to="/random" className="nav-bar__link">
              Random Quote
            </NavLink>
          </li>
          <li className="nav-bar__item">
            <NavLink to="/addQuote" className="nav-bar__link">
              Add a quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
