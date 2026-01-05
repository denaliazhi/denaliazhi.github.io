import { design_projects } from "../data/design-projects";
import ProjectHeader2 from "../components/Project-Header-2";
import ProjectNav from "../components/Project-Nav";
import ImageCaption from "../components/Image-Caption";
import { useRef } from "react";

export default function AmenuveveWebsite() {
  const project = design_projects.amenuveve_website;
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
          id="preview"
          imageStyle="modern-top"
          image={{
            src: "/design_projects/amenuveve-all-pages.png",
            caption: "Preview of redesigned pages",
          }}
        />
        <ImageCaption
          id="home-page"
          imageStyle="modern-top"
          image={{
            src: "/design_projects/amenuveve-home.png",
            caption: "Home page",
          }}
        />
        <ImageCaption
          id="donation-page"
          imageStyle="modern-top"
          image={{
            src: "/design_projects/amenuveve-donation.png",
            caption: "Donation page",
          }}
        />
        <ImageCaption
          id="about-page"
          imageStyle="modern-top"
          image={{
            src: "/design_projects/amenuveve-about.png",
            caption: "About page",
          }}
        />
        <ImageCaption
          id="impact-page"
          imageStyle="modern-top"
          image={{
            src: "/design_projects/amenuveve-impact.png",
            caption: "Impact page",
          }}
        />
        <ImageCaption
          id="get-involved-page"
          imageStyle="modern-top"
          image={{
            src: "/design_projects/amenuveve-get-involved.png",
            caption: "Get involved page",
          }}
        />
      </article>
      <ProjectNav
        anchorBase="amenuveve"
        sections={[
          "Preview",
          "Home Page",
          "Donation Page",
          "About Page",
          "Impact Page",
          "Get Involved Page",
        ]}
        articleRef={articleRef}
      />
    </main>
  );
}
