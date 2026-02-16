// Overview for design project write-ups

export default function ProjectOverview({ contents }) {
  return (
    <section className="design-project-overview">
      <h2>Overview</h2>
      <h3>{contents.title}</h3>
      <p>{contents.desc}</p>
      {contents.callout && <p className="design-callout">{contents.callout}</p>}
    </section>
  );
}
