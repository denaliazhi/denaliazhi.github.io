import { useState, useEffect } from "react";
import { useLocation } from "react-router";

export default function HeaderNav({ items }) {
  const location = useLocation().pathname;

  const [isOpen, setIsOpen] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const BREAKPOINT = 600;

  useEffect(() => {
    if (screenWidth < BREAKPOINT) {
      // Collapse menu if screen-width changes to below breakpoint
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const modes = [
    { name: "Designer", url: "design" },
    { name: "Developer", url: "" },
    { name: "Dabbler", url: "dabbles" },
  ];

  const menuItems = [{ name: "About", url: "about" }];

  return (
    <nav>
      <button
        className={isOpen ? "nav-icon x-mark" : "nav-icon"}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={handleClick}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>

      {screenWidth > BREAKPOINT && (
        <ul className="mode-nav">
          {modes.map((m) => (
            <a key={m.name} href={`/${m.url}`}>
              <li className={location === `/${m.url}` ? "selected-mode" : null}>
                {m.name}
              </li>
            </a>
          ))}
        </ul>
      )}

      {isOpen && (
        <ul className="nav-items">
          {screenWidth < BREAKPOINT &&
            modes.map((m) => (
              <a key={m.name} href={`/${m.url}`}>
                <li>{m.name}</li>
              </a>
            ))}
          <hr />
          {menuItems.map((m) => (
            <a key={m.name} href={`/${m.url}`}>
              <li>{m.name}</li>
            </a>
          ))}
        </ul>
      )}
    </nav>
  );
}
