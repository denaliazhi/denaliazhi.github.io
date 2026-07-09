import { design_projects } from "../data/design-projects-2";
import ProjectHeader2 from "../components/Project-Header-2";
import ImageCaption from "../components/Image-Caption";

export default function LumiTrifold() {
  const project = design_projects.lumi_trifold;

  return (
    <main className="design-project">
      <ProjectHeader2
        title="Lumi"
        subhead="Trifold"
        desc={[
          "Designed a trifold for Lumi, a CBD gummy brand",
          "Customized product mockups and graphics featured in the brochure",
        ]}
        tags={["Graphic Design", "Print Media", "Adobe Illustrator"]}
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
