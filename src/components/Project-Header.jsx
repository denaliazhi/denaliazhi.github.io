export default function ProjectHeader({
  title,
  date = false,
  desc = false,
  type,
  tools,
}) {
  return (
    <section className="project-header">
      <a href="/">
        <p>&lt; Back</p>
      </a>
      <div>
        <h1>{title}</h1>
        {date && <p>{date}</p>}
      </div>
      <hr />
      <ul className="tags">
        {tools.map((tool) => (
          <li key={`${title} - ${tool}`}>{tool}</li>
        ))}
        {/* {type.map((item) => (
          <li key={`${title} - ${item}`}>{item}</li>
        ))} */}
      </ul>
      {desc && <p>{desc}</p>}
    </section>
  );
}
