import { design_projects } from "../data/design-projects-2";
import ProjectHeader2 from "../components/Project-Header-2";
import ImageCaption from "../components/Image-Caption";

export default function ISC() {
  const project = design_projects.island_service_company;

  return (
    <main className="design-project">
      <ProjectHeader2
        title="Island Service Company"
        subhead="Website"
        desc={[
          "Redesigned the home page for a full-service contractor based in Lake Winnepesaukee",
          "Created a modern, approachable feel through both copy and visuals",
        ]}
        tags={["Web Design", "Figma"]}
      />
      {project.images.map((img) => (
        <ImageCaption
          imageStyle="modern"
          image={{
            src: `/design-covers/${img.name}.png`,
            alt: img.alt,
            caption: img.alt,
          }}
        />
      ))}
    </main>
  );
}
