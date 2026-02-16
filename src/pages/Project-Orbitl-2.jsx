import { design_projects } from "../data/design-projects";
import ProjectHeader2 from "../components/Project-Header-2";
import ProjectNav from "../components/Project-Nav";
import ProjectOverview from "../components/Project-Overview";
import ProjectTimeline from "../components/Project-Timeline";
import ImageCaption from "../components/Image-Caption";
import { useRef } from "react";

export default function Orbitl2() {
  const project = design_projects.orbitl_website;
  const articleRef = useRef(null);

  return (
    <main className="project-page design-project">
      <article ref={articleRef}>
        <ProjectHeader2
          title={project.client}
          desc={project.subtitle}
          img={{
            src: "/design-projects/orbitl-hero-img.png",
            alt: "Laptop and mobile view",
          }}
          metadata={[
            { field: "Type", value: "Freelance" },
            { field: "Role", value: "Web Designer" },
            { field: "Timeline", value: "Nov 2025 - Present" },
            { field: "Tools", value: "Figma, WordPress" },
          ]}
        />
        <ProjectOverview
          contents={{
            title: project.title,
            desc: "Orbitl is an AI-native startup on a mission to fix the tedium and fragmentation of modern science workflows.",
            callout:
              "My task was to translate this vision into a cohesive brand identity and a compelling landing page.",
          }}
        />
        <hr />
        <ProjectTimeline
          contents={[
            {
              days: "1 - 2",
              events: [
                {
                  title: "Discovery call",
                  desc: (
                    <p>
                      Understand client's needs, product, and target audience
                    </p>
                  ),
                },
                {
                  title: "Branding workshop",
                  desc: (
                    <p>Define brand personality based on mission and values</p>
                  ),
                },
              ],
            },
            {
              days: "3 - 4",
              events: [
                {
                  title: "Copywriting",
                  desc: <p>Write and edit content</p>,
                },
                {
                  title: "Wireframes",
                  desc: <p>Determine content layout</p>,
                },
                {
                  title: "Visual branding",
                  desc: (
                    <ul>
                      <li>Select fonts / color palette</li>
                      <li>Create custom assets</li>
                    </ul>
                  ),
                },
              ],
            },
            {
              days: "5 - 7",
              events: [
                {
                  title: "Mockups",
                  desc: <p>Refine and finalize design</p>,
                },

                {
                  title: "Development",
                  desc: (
                    <ul>
                      <li>Build site in WordPress</li>
                      <li>Integrate plug-ins</li>
                      <li>Test and deploy site</li>
                    </ul>
                  ),
                },
              ],
            },
          ]}
        />

        {/* <ImageCaption
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
        /> */}
        {/* <OneCol id="testimonial">
          <h2>Testimonial</h2>
        </OneCol> */}
      </article>
      <ProjectNav
        anchorBase="orbitl"
        sections={[
          "Overview",
          "Timeline",
          "The Challenge",
          "Messaging",
          "Visuals",
          "Website Demo",
          "Summary",
          // "Testimonial",
        ]}
        articleRef={articleRef}
      />
    </main>
  );
}
