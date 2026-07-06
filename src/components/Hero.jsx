import { useLocation } from "react-router";

export default function Hero({ selected }) {
  const location = useLocation().pathname;

  let desc;
  switch (location) {
    case "/":
      desc = "develops tools for learning and play";
      break;
    case "/design":
      desc = "designs physical goods and digital experiences";
      break;
    case "/dabbles":
      desc = "dabbles in animation and other arts";
      break;
  }
  return (
    <>
      <section className="hero">
        <h1>Denalia</h1>
        <p>{desc}</p>
      </section>
    </>
  );
}
