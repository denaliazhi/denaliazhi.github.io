import Hero from "../components/Hero";
import ArtCard from "../components/Art-Card";
import { dabbles_projects } from "../data/dabbles-projects";

export default function Dabbles() {
  const projects = dabbles_projects;
  return (
    <main className="home dabbles">
      <Hero />
      <section className="dabbles-projects">
        {Object.entries(projects).map(([key, value]) => (
          <ArtCard key_name={key} content={value} />
        ))}
      </section>
    </main>
  );
}
