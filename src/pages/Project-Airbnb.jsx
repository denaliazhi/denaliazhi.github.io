import { design_projects } from "../data/design-projects";
import ProjectHeader2 from "../components/Project-Header-2";
import ImageCaption from "../components/Image-Caption";
import { useRef } from "react";

export default function AirbnbReport() {
  const project = design_projects.airbnb_report;
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
            src: "/design-projects/airbnb-report-cover.png",
            caption: "Business report preview",
          }}
        />
        <iframe
          src="/design-projects/airbnb-report.pdf"
          width="auto"
          height="530px"
          //   style="border: none;"
        >
          <p>
            Your browser does not support PDFs.{" "}
            <a href="/design-projects/airbnb-report.pdf">Download the PDF</a>{" "}
            instead.
          </p>
        </iframe>
      </article>
    </main>
  );
}
