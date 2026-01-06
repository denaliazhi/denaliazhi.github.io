import { design_projects } from "../data/design-projects";
import ProjectHeader2 from "../components/Project-Header-2";
import ImageCaption from "../components/Image-Caption";
import { useRef } from "react";

export default function AmenuveveCatalogue() {
  const project = design_projects.amenuveve_catalogue;
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
          imageStyle="modern-top"
          image={{
            src: "/design-projects/amenuveve-catalogue-cover.png",
            caption: "Product catalogue preview",
          }}
        />
        <iframe
          src="/design-projects/amenuveve-catalogue.pdf"
          width="auto"
          height="530px"
          //   style="border: none;"
        >
          <p>
            Your browser does not support PDFs.{" "}
            <a href="/design-projects/amenuveve-catalogue.pdf">
              Download the PDF
            </a>{" "}
            instead.
          </p>
        </iframe>
      </article>
    </main>
  );
}
