import { useLocation } from "react-router";
import HeaderNav from "./Header-Nav";

export default function Header() {
  const location = useLocation().pathname;

  const modes = [
    { name: "Designer", url: "design" },
    { name: "Developer", url: "" },
    { name: "Dabbler", url: "dabbles" },
  ];

  return (
    <header>
      <a href="/" className="logo icon">
        <span></span>
      </a>
      <div>
        <p>enalia</p>
        <p>hi</p>
      </div>

      <ul className="mode-nav">
        {modes.map((m) => (
          <a key={m.name} href={`/${m.url}`}>
            <li className={location === `/${m.url}` ? "selected-mode" : null}>
              {m.name}
            </li>
          </a>
        ))}
      </ul>

      <HeaderNav items={["About"]} />
    </header>
  );
}
