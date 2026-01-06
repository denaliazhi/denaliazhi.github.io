import Hero from "../components/Hero";
import OverlayCard from "../components/Overlay-Card";
import { dabbles_projects } from "../data/dabbles-projects";

export default function Dabbles() {
  const projects = dabbles_projects;
  return (
    <main className="home dabbles">
      <Hero
        selected="Dabbler in the arts"
        caption="I play around in my free time"
      />
      <section className="dabbles-projects">
        {Object.entries(projects).map(([key, value]) => (
          <OverlayCard
            key_name={key}
            img={value.img}
            title={value.title}
            subtitle={value.subtitle}
            tags={[value.desc]}
          />
        ))}
      </section>
    </main>
  );
}
