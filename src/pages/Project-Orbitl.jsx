import { design_projects } from "../data/design-projects";
import ProjectHeader2 from "../components/Project-Header-2";
import ProjectNav from "../components/Project-Nav";
import ProjectSection from "../components/Project-Section";
import ProjectTimeline from "../components/Project-Timeline";
import ProjectQuote from "../components/Project-Quote";
import ImageCaption from "../components/Image-Caption";
import { useRef } from "react";

export default function Orbitl() {
  const project = design_projects.orbitl_website;
  const articleRef = useRef(null);

  return (
    <main className="project-page orbitl-website design-project">
      <article ref={articleRef}>
        <ProjectHeader2
          title={project.client}
          desc={project.subtitle}
          img={{
            src: "/design-projects/orbitl-website/orbitl-hero-img.png",
            alt: "Laptop and mobile view",
          }}
          metadata={[
            { field: "Type", value: "Freelance" },
            { field: "Role", value: "Web Designer" },
            { field: "Timeline", value: "Nov 2025 - Present" },
            { field: "Tools", value: "Figma, WordPress" },
          ]}
        />
        <ProjectSection section="Overview" title={project.title}>
          <p>
            Orbitl is an AI-native startup on a mission to fix the tedium and
            fragmentation of modern science workflows.
          </p>
          <p className="design-callout">
            My <span className="bold">task</span> was to translate this vision
            into a cohesive brand identity and a compelling landing page.
          </p>
        </ProjectSection>
        <hr />
        <ProjectSection section="Timeline">
          <ProjectTimeline
            contents={[
              {
                days: "1 - 2",
                events: [
                  {
                    title: "Discovery call",
                    desc: (
                      <p>Understand client's needs, product, and audience</p>
                    ),
                  },
                  {
                    title: "Branding workshop",
                    desc: (
                      <p>Define brand personality using mission and values</p>
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
        </ProjectSection>

        <hr />
        <ProjectSection
          section="Challenge"
          title="Balancing facts and feelings"
        >
          <p>
            The primary goal of the landing page was to generate leads among
            scientists and investors, suggesting a minimalist design focused on
            creating clarity and credibility around the product. At the same
            time, the branding needed to feel personal rather than
            transactional.
          </p>

          <ProjectQuote
            img={{
              src: "design-projects/orbitl-website/shree-headshot.png",
              alt: "Headshot of Shree Patel",
            }}
            title={["Shree", "Co-founder"]}
            quote={
              <p>
                Scientists aren't companies who care about "ROI."{" "}
                <span className="bold">
                  They're people who want the bandwidth to focus on what excites
                  them.
                </span>{" "}
                Orbitl stands for a return to curiosity and exploration instead
                of burnout.
              </p>
            }
          />

          <p className="design-callout">
            The <span className="bold">challenge</span> was to build a concise
            landing page that had both logical and emotional appeal. The page
            needed to utilize the limited content of a pre-seed startup and be
            ready to publish within one week.
          </p>
        </ProjectSection>
        <hr />
        <ProjectSection section="Messaging" title="Establishing credibility">
          <p>
            As a pre-seed startup without success metrics, Orbitl's{" "}
            <span className="bold">
              founding story would serve as a crucial source of credibility
            </span>
            . Both founders were scientists, who were driven to create the
            product by their frustrations with lab work and a desire to improve
            the experience for their peers.
          </p>
          <p>
            I channeled that desire into messaging that was{" "}
            <span className="bold">direct, knowledgeable, and empathetic.</span>
          </p>
          <ImageCaption
            imageStyle="modern"
            image={{
              src: "/design-projects/orbitl-website/orbitl-wireframes.png",
              caption: "Wireframes with copy",
            }}
          />
        </ProjectSection>
        <hr />
        <ProjectSection
          section="Visuals"
          title="Blending traditional and modern elements"
        >
          <p>
            <span className="bold">Typography. </span>Serif headers mirror the
            style of research publications, evoking a sense of{" "}
            <span className="bold">trust and authority</span>, while a
            sans-serif body modernizes the look.
          </p>
          <ImageCaption
            imageStyle="modern"
            image={{
              src: "/design-projects/orbitl-website/orbitl-typography.png",
              caption: "A mix of serif and sans-serif fonts",
            }}
          />
          <p>
            <span className="bold">Colors. </span>The color palette symbolizes{" "}
            <span className="bold">
              knowledge, curiosity, exploration, and discovery
            </span>
            . A dark green was selected as the primary color for Orbitl's logo
            and CTAs to differentiate it from competitors.
          </p>
          <ImageCaption
            imageStyle="modern"
            image={{
              src: "/design-projects/orbitl-website/orbitl-colors.png",
              caption: "Colors evoking scientific values",
            }}
          />
        </ProjectSection>
        <hr />
        <ProjectSection section="Website demo" title="Pitching the product">
          <p>
            The final page positions Orbitl as an innovative solution to a
            longstanding problem in science. Its layout mirrors a classic pitch
            so that investors can easily identify the product's core features
            and the competency of its founding team. Beyond these practical
            points, its aspirational branding aims to connect more deeply with
            the scientific community and garner excitement about the future of
            research.
          </p>
          <ImageCaption
            imageStyle="modern"
            image={{
              src: "/design-projects/orbitl-website/orbitl-demo.png",
              caption: "Blah",
            }}
          />
        </ProjectSection>
      </article>
      <ProjectNav
        anchorBase="orbitl"
        sections={[
          "Overview",
          "Timeline",
          "Challenge",
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
