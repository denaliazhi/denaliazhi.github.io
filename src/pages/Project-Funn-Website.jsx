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
            worlds that educate and inspire its users. This project followed its
            launch of two products on the App Store: Gemorize, a gem-themed
            memory puzzle, and Spell Crush, an underwater vocabulary adventure.
          </p>
          <p className="design-callout">
            My <span className="bold">task</span> was to redesign its website in
            order to increase conversion rates for these games.
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
            An audit of the existing design revealed several opportunities to
            improve the user experience, including the following:
          </p>

          <ImageCaption
            imageStyle="modern-right"
            image={{
              src: "/design-projects/funn-website/audit-1.png",
              caption: (
                <>
                  <h3>A need for visual balance</h3>
                  <p>
                    High-saturation colors and distorted assets induced eye
                    fatigue and undermined the brand's credibility.
                  </p>
                </>
              ),
              alt: "Hero section of existing website",
            }}
          />
          <ImageCaption
            imageStyle="modern-right"
            image={{
              src: "/design-projects/funn-website/audit-2.png",
              caption: (
                <>
                  <h3>Lack of organization and hierarchy</h3>
                  <p>
                    Content for games was interspersed instead of organized into
                    distinct sections, impeding readability and ease of
                    navigation.
                  </p>
                </>
              ),
              alt: "Product screenshots on existing website",
            }}
          />
          <ImageCaption
            imageStyle="modern-right"
            image={{
              src: "/design-projects/funn-website/audit-3.png",
              caption: (
                <>
                  <h3>Hidden or ineffective CTAs</h3>
                  <p>
                    The use of unlabeled linked images for desired actions
                    reduced the likelihood of conversions. Moreover, text in all
                    caps created a confrontational rather than inviting feel.
                  </p>
                </>
              ),
              alt: "Images of merch on existing website",
            }}
          />

          <p className="design-callout">
            The <span className="bold">challenge</span> was to bring cohesion,
            clarity, and professionalism to the site while preserving its
            playful spirit.
          </p>
        </ProjectSection>
        <hr />
        <ProjectSection section="Structure" title="Fitting form to function">
          <p>
            The new design would account for the studio's outreach strategy and
            its typical user's journey, which surfaced during early discussions.
          </p>
          <ProjectQuote
            img={{
              src: "design-projects/funn-website/marvin-profile.png",
              alt: "Profile photo for Marvin",
            }}
            title={["Marvin", "Founder"]}
            quote={
              <p>
                I go to different places and talk to our potential users. I have
                a QR code that people can scan, and it will take them to the
                website.
              </p>
            }
          />
          <p>
            The website would build on in-person conversations by providing
            clear and accessible CTAs while generating intrigue around the games
            for both direct and organic visitors.
          </p>
        </ProjectSection>
        <ImageCaption
          imageStyle="modern"
          image={{
            src: "/design-projects/funn-website/funn-wireframe.png",
            caption: "Wireframe with copy",
          }}
        />
        <hr />
        <ProjectSection section="Visuals" title="Preserving a playful spirit">
          <p>
            I pared down the colors of the website into a palette that
            represented both the studio's logo and its games, which was then
            applied consistently across the website. The palette balanced
            vibrant hues with muted pastels for a look that was exciting yet not
            overwhelming.
          </p>
          <ImageCaption
            imageStyle="modern"
            image={{
              src: "/design-projects/funn-website/funn-brand-kit.png",
              caption: "Brand kit",
            }}
          />
          <p>
            Initially, the client considered both a dark and a light theme for
            the website, representing Gemorize and Spell Crush, respectively. I
            create mockups in order to visualize these options, working with the
            client to steer the direction of the design into its final form.
            Ultimately, a light theme better fit the studio's mission and
            redesign goals.
          </p>
          <ImageCaption
            imageStyle="modern"
            image={{
              src: "/design-projects/funn-website/funn-mockups.png",
              caption: "Mockups",
            }}
          />
        </ProjectSection>
        <hr />
        <ProjectSection section="The Website" title="Putting it together">
          <p>
            The studio was inspired by the creators of the hit game Candy Crush
            and wanted a colorful and content-packed website similar to
            King.com. The redesign for Funn Interactive would honor this
            original inspiration, featuring full-page visuals and animated
            elements, while applying best practices to improve the user
            experience.{" "}
          </p>
          <p>
            The final page is a vivid and immersive window into its game worlds
            that encourages users to push play.
          </p>
          <img src="/design-projects/funn-website/spell-crush-demo.gif" />
        </ProjectSection>
      </article>
      <ProjectNav
        anchorBase="funn"
        sections={[
          "Overview",
          "Timeline",
          "Challenge",
          "Structure",
          "Visuals",
          "The Website",
        ]}
        articleRef={articleRef}
      />
    </main>
  );
}
