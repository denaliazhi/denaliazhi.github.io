import Hero from "../components/Hero";
import OverlayCard from "../components/Overlay-Card";
import { design_projects } from "../data/design-projects";

export default function Design() {
  const projects = design_projects;
  return (
    <main className="home design">
      <Hero
        selected="Designer"
        caption="I help brands tell memorable stories"
      />
      <section className="design-projects">
        {Object.entries(projects).map(([key, value]) => (
          <OverlayCard key_name={key} content={value} />
        ))}
      </section>
    </main>
  );
}
