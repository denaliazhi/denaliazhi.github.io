import { useLocation } from "react-router";

export default function Hero({ selected }) {
  const location = useLocation().pathname;

  let desc;
  switch (location) {
    case "/":
      desc = "is a developer who enjoys crafting delightful experiences";
      break;
    case "/design":
      desc = "is a designer who helps brands tell memorable stories";
      break;
    case "/dabbles":
      desc = "is a dabbler in animation and the digital arts";
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
