import Artifacts from "../components/Artifacts";
import { toolkit } from "../data/toolkit";
import HoverableText from "../components/Hoverable-Text";

export default function About() {
  return (
    <main className="about">
      <div id="letter-to-user">
        <h1>Hi, I'm Denalia.</h1>
        <p>
          I love to solve puzzles— whether the puzzle is a 1,000-piece{" "}
          <HoverableText
            img={{
              src: "/about/costco-puzzle.png",
              alt: "Dowdle's 1000-piece Costco jigsaw puzzle",
            }}
          >
            🔍 jigsaw of Costco
          </HoverableText>{" "}
          (America's favorite warehouse) or something a bit more complex like
          “How do we turn our vision for this product into reality?”
        </p>{" "}
        <p>
          I've tackled this question in many forms: as a designer for startups
          and a nonprofit, as a{" "}
          <HoverableText
            img={{
              src: "/about/bloomberg-puzzle.png",
              alt: "Denalia shaking hands with Michael Bloomberg",
            }}
          >
            🔍 data analyst
          </HoverableText>{" "}
          for a multinational company, as a freelancer (team of 1), and as a
          collaborator (team of 30+).{" "}
        </p>
        <p>
          With a{" "}
          <HoverableText
            img={{
              src: "/about/nyu-puzzle.png",
              alt: "Graduation photo outside NYU building",
            }}
          >
            🔍 background
          </HoverableText>{" "}
          spanning the arts, business, and computer science, I am a translator—
          bridging the gaps between creative ideas, strategic communication, and
          technical execution— for at its heart, solving a puzzle is an act of
          translation.
        </p>
      </div>
      <Artifacts></Artifacts>
    </main>
  );
}
