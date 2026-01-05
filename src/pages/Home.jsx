import Hero from "../components/Hero";
import ProjectsContainer from "../components/Projects-Container";
import { dev_projects } from "../data/dev-projects";

export default function Home() {
  return (
    <main className="home">
      <Hero selected="Developer" />
      <ProjectsContainer content={dev_projects} />
    </main>
  );
}
