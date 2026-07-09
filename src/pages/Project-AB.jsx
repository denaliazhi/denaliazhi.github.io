import { design_projects } from "../data/design-projects-2";
import ProjectHeader2 from "../components/Project-Header-2";
import ImageCaption from "../components/Image-Caption";

export default function AB() {
  const project = design_projects.associated_bank;

  return (
    <main className="design-project">
      <ProjectHeader2
        title="Associated Bank"
        subhead="Promotional Postcard"
        desc={[
          "Designed a promotional postcard to be mailed to customers across the U.S.",
          "Visually emphasized the bonus offer and call to action",
        ]}
        tags={["Graphic Design", "Print Media", "Adobe InDesign"]}
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
