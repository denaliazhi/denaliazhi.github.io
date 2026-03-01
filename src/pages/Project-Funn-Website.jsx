import { design_projects } from "../data/design-projects";
import ProjectHeader2 from "../components/Project-Header-2";
import ProjectNav from "../components/Project-Nav";
import ProjectSection from "../components/Project-Section";
import ProjectTimeline from "../components/Project-Timeline";
import ProjectQuote from "../components/Project-Quote";
import ImageCaption from "../components/Image-Caption";
import { useRef } from "react";

export default function FunnWebsite() {
  const project = design_projects.funn_website;
  const articleRef = useRef(null);

  return (
    <main className="project-page funn-website design-project">
      <article ref={articleRef}>
        <ProjectHeader2
          title={project.client}
          desc={project.subtitle}
          img={{
            src: "/design-projects/funn-website/funn-website-cover.png",
            alt: "Website home page",
          }}
          metadata={[
            { field: "Type", value: "Concept" },
            { field: "Role", value: "Web Designer" },
            { field: "Timeline", value: "Jan 2025 (1 week)" },
            { field: "Tools", value: "Figma, WordPress" },
          ]}
        />
        <ProjectSection section="Overview" title={project.title}>
          <p>
            Funn Interactive (Funn) is an indie game studio, crafting digital
            worlds that educate and inspire its users. This project built on its
            launch of two products on the App Store: Gemorize, a gem-themed
            memory puzzle, and Spell Crush, an underwater vocabulary adventure.
          </p>
          <p className="design-callout">
            My <span className="bold">task</span> was to redesign its existing
            website in order to increase conversion rates for these games.
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
                    title: "Design Audit",
                    desc: (
                      <p>Evaluate existing site and identify pain points</p>
                    ),
                  },
                ],
              },
              {
                days: "3 - 4",
                events: [
                  {
                    title: "Design iteration",
                    desc: <p>Review mockups and workshop selected design</p>,
                  },
                ],
              },
              {
                days: "5 - 6",
                events: [
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
        <ProjectSection
          section="Challenge"
          title="Keeping Color, Adding Clarity"
        >
          <p>
            An audit of the existing website uncovered several opportunities to
            improve the user experience.
          </p>

          <ImageCaption
            imageStyle="modern-right"
            image={{
              src: "/design-projects/funn-website/website-audit-1.png",
              caption: (
                <>
                  <h3>Lack of visual balance and hierarchy</h3>
                  <p>
                    The design featured many high-saturation colors and
                    distorted assets, which induced eye fatigue and undermined
                    the brand's credibility.
                  </p>
                </>
              ),
            }}
          />
          <ImageCaption
            imageStyle="modern-right"
            image={{
              src: "/design-projects/funn-website/website-audit-2.png",
              caption: (
                <>
                  <h3>No logical flow to content</h3>
                  <p>
                    Content for its products were interspersed instead of
                    contained to their own sections, obscuring the distinct
                    features of each game.
                  </p>
                </>
              ),
            }}
          />
          <ImageCaption
            imageStyle="modern-right"
            image={{
              src: "/design-projects/funn-website/website-audit-3.png",
              caption: (
                <>
                  <h3>Hidden or ineffective CTAs</h3>
                  <p>
                    CTAs were hidden in the form of linked images or placed in
                    awkward positions. Related copy was written in all caps,
                    creating a confrontational rather than persuasive
                    impression.
                  </p>
                </>
              ),
            }}
          />

          <p className="design-callout">
            The <span className="bold">challenge</span> was to instill cohesion,
            clarity, and professionalism into the site while staying true to the
            colorful and immersive feel of its core products.
          </p>
        </ProjectSection>

        <hr />
      </article>
      <ProjectNav
        anchorBase="funn"
        sections={["Preview"]}
        articleRef={articleRef}
      />
    </main>
  );
}
