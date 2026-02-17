import Hero from "../components/Hero";
import ProjectsContainer from "../components/Projects-Container";
import OdinProject from "./The-Odin-Project";
import { dev_projects } from "../data/dev-projects";

export default function Home() {
  return (
    <main className="home">
      <Hero />
      <ProjectsContainer content={dev_projects} />
      <section className="odin projects">
        <h2>How did I get here?</h2>
        <p>
          Between May and October 2025, I taught myself how to build a
          full-stack app via{" "}
          <a href="https://www.theodinproject.com/about" target="__blank">
            The Odin Project
          </a>
          — a self-paced, open source curriculum for web developers. This
          gallery highlights my progress over five months.
        </p>
        <OdinProject />
      </section>
    </main>
  );
}
