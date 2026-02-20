import ProjectCard from "../components/Project-Card";
import { projects } from "../data/odin-projects";

export default function OdinProject() {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <div>
      {Object.values(projects).map((project) => {
        const simpleDate =
          months[project.date.getMonth()] + " " + project.date.getDate();
        return (
          <a href={project.repo} target="_blank">
            <ProjectCard
              project={{
                ...project,
                tags: [simpleDate, ...project.focus],
              }}
            />
          </a>
        );
      })}
    </div>
  );
}
