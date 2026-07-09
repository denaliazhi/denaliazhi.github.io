// Header for design project write-ups

export default function ProjectHeader2({ title, subhead, desc, tags }) {
  return (
    <section className="design-project-header">
      <a href="/design">
        <p>&lt; Back</p>
      </a>

      <h1>
        {title} / {subhead && <span className="design-subhead">{subhead}</span>}
      </h1>
      <ul>
        {desc.map((line) => (
          <li>{line}</li>
        ))}
      </ul>
      <h2>Skills & Tools</h2>
      <ul className="tags">
        {tags.map((tg) => (
          <li>{tg}</li>
        ))}
      </ul>
    </section>
  );
}
