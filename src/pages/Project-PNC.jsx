import { design_projects } from "../data/design-projects-2";
import ProjectHeader2 from "../components/Project-Header-2";
import ImageCaption from "../components/Image-Caption";

export default function PNC() {
  const project = design_projects.pnc_bank;

  return (
    <main className="design-project">
      <ProjectHeader2
        title="PNC Bank"
        subhead="Flyer"
        desc={[
          "Redesigned a printed promotional flyer",
          "Incorporated fresh copy and brand elements to give it a lighter, modern look",
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
