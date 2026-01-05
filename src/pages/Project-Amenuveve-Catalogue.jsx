import { design_projects } from "../data/design-projects";
import ProjectHeader2 from "../components/Project-Header-2";
import ProjectNav from "../components/Project-Nav";
import ImageCaption from "../components/Image-Caption";
import { useRef } from "react";

export default function AmenuveveCatalogue() {
  const project = design_projects.amenuveve_catalogue;
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
          id="catalogue-preview"
          imageStyle="modern-top"
          image={{
            src: "/design_projects/amenuveve-catalogue-cover.png",
            caption: "Product catalogue preview",
          }}
        />
        <iframe
          src="/design_projects/amenuveve-catalogue.pdf"
          width="auto"
          height="530px"
          //   style="border: none;"
        >
          <p>
            Your browser does not support PDFs.{" "}
            <a href="/design_projects/amenuveve-catalogue.pdf">
              Download the PDF
            </a>{" "}
            instead.
          </p>
        </iframe>
        {/* <ImageCaption
          id="catalogue-viewer"
          imageStyle="modern-top"
          image={{
            src: "/design_projects/amenuveve-catalogue-viewwer.png",
            caption: "Catalogue viewer",
          }}
        /> */}
      </article>
    </main>
  );
}
