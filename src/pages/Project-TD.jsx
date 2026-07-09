import { design_projects } from "../data/design-projects-2";
import ProjectHeader2 from "../components/Project-Header-2";
import ImageCaption from "../components/Image-Caption";

export default function TD() {
  const project = design_projects.td_bank;

  return (
    <main className="design-project">
      <ProjectHeader2
        title="TD Bank"
        subhead="Multi-Channel Projects"
        desc={[
          "Designed print and digital pieces for TD Bank, maintaining a cohesive feel across channels",
          "Print: flyers, postcards, and other direct mail",
          "Digital: emails, social media posts, whitepapers, product guides",
        ]}
        tags={[
          "Graphic Design",
          "Print Media",
          "Email",
          "Social Media",
          "Adobe InDesign",
          "MJML",
        ]}
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
