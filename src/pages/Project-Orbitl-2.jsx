import { design_projects } from "../data/design-projects";
import ProjectHeader2 from "../components/Project-Header-2";
import ProjectNav from "../components/Project-Nav";
import ImageCaption from "../components/Image-Caption";
import { useRef } from "react";

export default function Orbitl2() {
  const project = design_projects.orbitl_website;
  const articleRef = useRef(null);

  return (
    <main className="project-page">
      <article ref={articleRef}>
        <ProjectHeader2
          title={project.title}
          role={project.role}
          scope={project.tags}
          desc={project.desc}
        />
        <ImageCaption
          id="preview"
          imageStyle="modern-top"
          image={{
            src: "/design-projects/orbitl-cover-3.png",
            caption: "Laptop and mobile view",
          }}
        />
        <ImageCaption
          id="landing-page"
          imageStyle="modern-top"
          image={{
            src: "/design-projects/orbitl-landing-page.png",
            caption: "Landing Page",
          }}
        />
        <ImageCaption
          id="home-page"
          imageStyle="modern-top"
          image={{
            src: "/design-projects/orbitl-home-page.png",
            caption: "Home Page",
          }}
        />
        <ImageCaption
          id="mobile-view"
          imageStyle="modern-top"
          image={{
            src: "/design-projects/orbitl-mobile.png",
            caption: "Mobile view",
          }}
        />
        {/* <OneCol id="testimonial">
          <h2>Testimonial</h2>
        </OneCol> */}
      </article>
      <ProjectNav
        anchorBase="orbitl"
        sections={[
          "Preview",
          "Landing Page",
          "Home Page",
          "Mobile View",
          // "Testimonial",
        ]}
        articleRef={articleRef}
      />
    </main>
  );
}
