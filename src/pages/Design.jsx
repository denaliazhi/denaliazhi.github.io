import OverlayCard from "../components/Overlay-Card";
import { design_projects } from "../data/design-projects";

export default function Design() {
  const projects = design_projects;
  return (
    <main className="design">
      <h1>Denalia Zhi</h1>
      <section id="design-projects-container">
        {Object.entries(projects).map(([key, value]) => (
          <OverlayCard key_name={key} content={value} />
        ))}
      </section>
    </main>
  );
}
