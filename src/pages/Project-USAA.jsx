import { design_projects } from "../data/design-projects-2";
import ProjectHeader2 from "../components/Project-Header-2";
import ImageCaption from "../components/Image-Caption";

export default function USAA() {
  const project = design_projects.usaa;

  return (
    <main className="design-project">
      <ProjectHeader2
        title="USAA"
        subhead="Direct Mail"
        desc={[
          "Designed a multi-panel self-mailer for USAA",
          "Spotlighted the bonus offer and call-to-action, allowing readers to easily grasp the benefits of a checking account and take the steps to apply",
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
