import { dev_projects } from "../data/dev-projects";
import ProjectHeader from "../components/Project-Header";
import ProjectNav from "../components/Project-Nav";
import Carousel from "../components/Carousel";
import Callout from "../components/Callout";
import TwoCol from "../components/Two-Col";
import OneCol from "../components/One-Col";
import Accordion from "../components/Accordion";
import ButtonBar from "../components/Button-Bar";
import { useRef } from "react";

export default function Orbitl() {
  const project = dev_projects.orbitl;
  const articleRef = useRef(null);

  return (
    <main className="orbitl project-page">
      <article ref={articleRef}>
        <ProjectHeader
          title={project.title}
          date={project.date}
          type={project.type}
          tools={project.tools}
        />
        <Carousel images={project.images_featured}></Carousel>

        <OneCol id="background">
          <h2>Background</h2>
          <p>
            Orbitl was an early-stage startup that wanted to
            <span className="highlight">
              {" "}
              establish its online presence and collect leads
            </span>{" "}
            while limiting its exposure to competitors .
          </p>
          <table className="project-details">
            <thead>
              <tr>
                <th>Project Type</th>
                <th>Timeframe</th>
                <th>Scope</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Initial website</td>
                <td>1 week</td>
                <td>
                  <ul>
                    <li>Design</li>
                    <li>Branding</li>
                    <li>Copywriting</li>
                    <li>Development</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </OneCol>
        <hr />
        <OneCol id="design">
          <h2>Design</h2>
          <h3 id="wireframes">Wireframes</h3>
          <p>
            Based on the client's requirements, I designed two views for its
            initial website.
          </p>
          <img
            src="projects/orbitl-wireframes.png"
            alt="Wireframes for landing page and home page of website"
            height="458"
            width="756"
          />
          <TwoCol
            id="view-comparison"
            ratio={[1, 1]}
            col1={
              <>
                <h4>Landing page</h4>
                <p>Default view for all users</p>
                <div>
                  <h5>Actions</h5>
                  <ul>
                    <li>Schedule demo</li>
                    <li>Join waitlist</li>
                    <li>Sign in</li>
                  </ul>
                  <h5>Goals</h5>
                  <ul>
                    <li>Collect leads</li>
                    <li>Limit competitor access</li>
                  </ul>
                </div>
              </>
            }
            col2={
              <>
                <h4>Home page</h4>
                <p>Password-protected view</p>
                <div>
                  <h5>Actions</h5>
                  <ul>
                    <li>Schedule demo</li>
                    <li>Submit general inquiry</li>
                  </ul>
                  <h5>Goals</h5>
                  <ul>
                    <li>Build credibility</li>
                    <li>Establish brand identity</li>
                    <li>Showcase product features</li>
                  </ul>
                </div>
              </>
            }
          />
        </OneCol>
        <OneCol id="branding">
          <h3>Branding</h3>
          <p>
            I worked with the client to define a brand identity that would
            connect with scientists and academic researchers. We selected colors
            and fonts to strike a balance between knowledge, authority, and
            approachability.
          </p>
          <TwoCol
            id="visual-elements"
            ratio={[1, 2]}
            col1={
              <ul id="colors">
                <li>#254D32</li>
                <li>#94BFA7</li>
                <li>#222E50</li>
                <li>#5299D3</li>
              </ul>
            }
            col2={
              <ul id="fonts">
                <li>
                  <p>Focus on breakthroughs, not busywork</p>
                  <p>Heading 1</p>
                </li>
                <li>
                  <p>Manage your entire process in one place</p>
                  <p>Heading 2</p>
                </li>
                <li>
                  <p>Meet Orb, your AI assistant</p>
                  <p>Heading 3</p>
                </li>
                <li>
                  <p>
                    Ask questions, find historical data, and understand
                    experimental trends with intelligent insights.
                  </p>
                  <p>Body</p>
                </li>
              </ul>
            }
          />
        </OneCol>
        <OneCol id="copywriting">
          <h3>Copywriting</h3>
          <p>
            The client wanted to use language that was " concise" but also to
            "show that [they] cared" about their fellow scientists. Accordingly,
            I distilled their existing messaging into short, personable
            statements for the web.
          </p>
          <Accordion heading="Example">
            <div className="copy">
              <h4>Original copy</h4>
              <p>
                Academic scientists are bogged down by repetitive, low-value
                tasks that drain time and slow scientific progress. Managing
                experiments, data, and collaboration across fragmented systems
                makes it difficult to stay organized and reproduce results. In a
                world that needs science to solve its largest problems, we
                cannot afford for research to move slowly. Orbitl is an
                intelligent, AI-native platform that supports the entire
                research journey — from finding funding and exploring literature
                to running experiments, analyzing data, and publishing results.
              </p>
            </div>
            <div className="copy">
              <h4>Website copy</h4>
              <p>
                The world needs science to solve its biggest problems.
                Scientists shouldn't have to solve a fragmented system for
                experiments, data, and collaborations.
              </p>
              <p>
                Orbitl supports you throughout your research journey, making
                it easier to stay organized and reproduce results.
              </p>
            </div>
          </Accordion>
        </OneCol>
        <OneCol id="digital-assets">
          <h3>Digital assets</h3>
          <p>
            Finally, the client stated, "A lot of software in the research space
            is outdated. We want to build a solution that's sleek, modern, and
            intuitive." I designed assets that would match the product's desired
            look and feel to its website.
          </p>
          <img
            src="projects/orbitl-custom-assets.png"
            alt="A custom illustration of the product dashboard"
          />
        </OneCol>
        <OneCol id="mockups">
          <h3>Mockups</h3>
          <p>
            After rounds of feedback and refinement, I assembled the elements of
            the website into a cohesive and compelling pitch for the product.
          </p>
          <img src="projects/orbitl-mockups.png" alt="Website mockups" />
        </OneCol>
        <hr />
        <OneCol id="development">
          <h2>Development</h2>
          <p>
            I developed the website using HTML, CSS, and JS. The result is
            mobile responsive.
          </p>
          {/* <p>
            Due to time constraints, backend functionalities such as a waitlist
            sign up were enabled through links to third party platforms instead
            of built into the website.
          </p>
          <p>
            The website is hosted on Github Pages under a custom domain. The
            next stage is to migrate the website to Wordpress to enable
            analytics and plugins.
          </p> */}
          <img
            src="projects/orbitl-walkthrough.gif"
            alt="Walkthrough of website"
          />
        </OneCol>
        {/* <OneCol id="testimonial">
          <h2>Testimonial</h2>
        </OneCol> */}
      </article>
      <ProjectNav
        anchorBase="orbitl"
        sections={[
          "Background",
          [
            "Design",
            [
              "Wireframes",
              "Branding",
              "Copywriting",
              "Digital Assets",
              "Mockups",
            ],
          ],
          "Development",
          // "Testimonial",
        ]}
        articleRef={articleRef}
      />
    </main>
  );
}
