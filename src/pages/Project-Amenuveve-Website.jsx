import { design_projects } from "../data/design-projects";
import ProjectHeader2 from "../components/Project-Header-2";
import ProjectNav from "../components/Project-Nav";
import ProjectSection from "../components/Project-Section";
import ProjectQuote from "../components/Project-Quote";
import ImageCaption from "../components/Image-Caption";
import { useRef } from "react";

export default function AmenuveveWebsite() {
  const project = design_projects.amenuveve_website;
  const articleRef = useRef(null);

  return (
    <main className="project-page amenuveve-website design-project">
      <article ref={articleRef}>
        <ProjectHeader2
          title={project.client}
          desc={project.subtitle}
          img={{
            src: "/design-projects/amenuveve-website/amenuveve-website-cover.png",
            alt: "Website home page",
          }}
          metadata={[
            { field: "Type", value: "Concept" },
            { field: "Role", value: "Web Designer" },
            { field: "Timeline", value: "Dec 2025 (1 week)" },
            { field: "Tools", value: "Figma" },
          ]}
        />
        <ProjectSection section="Overview" title={project.title}>
          <p>
            Amenuveve is a nonprofit that supports the development of Woadze
            Tsatoe, a village in Ghana. I designed a vibrant site to capture
            life in the village and illustrate the power of giving to potential
            donors.
          </p>
        </ProjectSection>
        <ImageCaption
          id="preview"
          imageStyle="modern-top"
          image={{
            src: "/design-projects/amenuveve-website/amenuveve-all-pages.png",
            caption: "Preview of redesigned pages",
          }}
        />
        <ImageCaption
          id="home-page"
          imageStyle="modern-top"
          image={{
            src: "/design-projects/amenuveve-website/amenuveve-home.png",
            caption: "Home page",
          }}
        />
        <ImageCaption
          id="donation-page"
          imageStyle="modern-top"
          image={{
            src: "/design-projects/amenuveve-website/amenuveve-donation.png",
            caption: "Donation page",
          }}
        />
        <ImageCaption
          id="about-page"
          imageStyle="modern-top"
          image={{
            src: "/design-projects/amenuveve-website/amenuveve-about.png",
            caption: "About page",
          }}
        />
        <ImageCaption
          id="impact-page"
          imageStyle="modern-top"
          image={{
            src: "/design-projects/amenuveve-website/amenuveve-impact.png",
            caption: "Impact page",
          }}
        />
        <ImageCaption
          id="get-involved-page"
          imageStyle="modern-top"
          image={{
            src: "/design-projects/amenuveve-website/amenuveve-get-involved.png",
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
