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
            { field: "Role", value: "Product Designer" },
            { field: "Timeline", value: "Nov 2025 - Present" },
            { field: "Tools", value: "Figma, Canva, WordPress" },
          ]}
        />

        <ProjectQuote
          img={{
            src: "design-projects/orbitl-website/shree-headshot.png",
            alt: "Headshot of Shree Patel",
          }}
          title={["Shree", "Co-founder"]}
          quote={
            <p>
              Denalia is fantastic at explaining her design process. It's
              reassuring to know that we're working with someone who cares so
              deeply about what we're building. We felt like she could read our
              minds. She took our vision— how we wanted to inspire people— and
              turned it into something tangible that inspires even us when we
              look at it.
            </p>
          }
        />

        <hr />
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
          <p>The timeline for the initial landing page was just one week.</p>
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
            .
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
        <ProjectSection section="Evolution" title="Adapting to shifting needs">
          <p>
            After one week, an early version of the website was published with a
            waitlist sign up screen and a password-protected home page in order
            to collect leads and build interest in Orbitl while limiting the
            information exposed to competitors. I have since continued to work
            with its founders to refine its branding and content.
          </p>
          <img
            src="/design-projects/orbitl-website/orbitl-mockup-versions.png"
            alt="Mockups of website"
          />
        </ProjectSection>
        <hr />
        <ProjectSection section="Demo" title="Pitching beyond a product">
          <p>
            The website positions Orbitl as an innovative solution to a
            longstanding problem in science. Its layout mirrors a classic pitch
            so that investors can easily identify the product's core features
            and the competency of its founding team. Beyond this practicality,
            its aspirational branding connects more deeply with the scientific
            community and garners excitement about the future of research.
          </p>
          <img src="/design-projects/orbitl-website/orbitl-mockup.png" />
          {/* <p>
            I've continued to work on the website since its first launch. You
            can view the latest design here:
          </p>
          <a href="https://orbitl.info">Visit the live website</a> */}
        </ProjectSection>
        <hr />
        <ProjectSection section="Pitch Deck" title="Unifying the brand">
          <p>
            In addition to its website, I redesigned Orbitl's pitch deck to
            establish consistency across channels.
          </p>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 0,
              paddingTop: "56.2500%",
              paddingBottom: 0,
              boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
              marginTop: "1.6em",
              marginBottom: "0.9em",
              overflow: "hidden",
              borderRadius: "8px",
              willChange: "transform",
            }}
          >
            <iframe
              loading="lazy"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                border: "none",
                padding: 0,
                margin: 0,
              }}
              src="https://www.canva.com/design/DAG-QGHBzm4/KkAvqN2qb_f-rf8YUNXv5A/view?embed"
              allow="fullscreen"
            ></iframe>
          </div>
        </ProjectSection>
      </article>
      <ProjectNav
        anchorBase="orbitl"
        sections={[
          [
            "The Website",
            [
              "Overview",
              "Timeline",
              "Challenge",
              "Messaging",
              "Visuals",
              "Evolution",
              "Demo",
            ],
          ],
          "Pitch Deck",
        ]}
        articleRef={articleRef}
      />
    </main>
  );
}
