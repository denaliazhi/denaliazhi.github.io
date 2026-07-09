import { design_projects } from "../data/design-projects-2";
import ProjectHeader2 from "../components/Project-Header-2";
import ImageCaption from "../components/Image-Caption";

export default function LumiBags() {
  const project = design_projects.lumi_bags;

  return (
    <main className="design-project">
      <ProjectHeader2
        title="Lumi"
        subhead="Pouches"
        desc={[
          "Designed several lines of packaging for Lumi, a CBD gummy brand",
          "Fit content to different dielines, maintaining a clean and consistent look across all flavors and pouch sizes",
          "Communicated directly with EPAC printing service to ensure seamless design hand-off",
        ]}
        tags={["Packaging Design", "Adobe Illustrator"]}
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
