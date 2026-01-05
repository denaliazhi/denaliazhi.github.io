import { design_projects } from "../data/design-projects";
import ProjectHeader2 from "../components/Project-Header-2";
import ProjectNav from "../components/Project-Nav";
import ImageCaption from "../components/Image-Caption";
import { useRef } from "react";

export default function AdiffGraphics() {
  const project = design_projects.adiff_graphics;
  const articleRef = useRef(null);

  return (
    <main className="project-page">
      <article ref={articleRef}>
        <ProjectHeader2
          title={project.client}
          role={project.role}
          scope={project.tags}
          desc={project.desc}
        />
        <ImageCaption
          id="social-media"
          imageStyle="modern-top"
          image={{
            src: "/design_projects/adiff-social-media.png",
            caption: "Social media assets",
          }}
        />
        <ImageCaption
          id="email-campaigns"
          imageStyle="modern-top"
          image={{
            src: "/design_projects/adiff-email.png",
            caption: "Email campaigns",
          }}
        />
        <ImageCaption
          id="website"
          imageStyle="modern-top"
          image={{
            src: "/design_projects/adiff-website.gif",
            caption: "Website",
          }}
        />
      </article>
      <ProjectNav
        anchorBase="adiff"
        sections={["Social Media Assets", "Email campaigns", "Website"]}
        articleRef={articleRef}
      />
    </main>
  );
}
