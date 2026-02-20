import Hero from "../components/Hero";
import DesignCard from "../components/Design-Card";
import { design_projects } from "../data/design-projects";

export default function Design() {
  const projects = design_projects;
  return (
    <main className="home design">
      <Hero />
      <section className="design-projects">
        {Object.entries(projects).map(([key, value]) => (
          <a
            key={key}
            href={
              value.client === "FuNn Interactive"
                ? null
                : `/${key.replace("_", "-")}`
            }
            className={value.client === "FuNn Interactive" ? "wip" : null}
          >
            <DesignCard
              key_name={key.replace("_", "-")}
              img={value.img}
              bg_img={value.bg_img}
              title={value.title}
              subtitle={value.subtitle}
              tags={value.tags}
            />
          </a>
        ))}
      </section>
    </main>
  );
}
