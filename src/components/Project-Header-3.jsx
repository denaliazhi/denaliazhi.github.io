export default function ProjectHeader3({
  title,
  subhead,
  desc,
  img,
  metadata,
}) {
  return (
    <section className="design-project-header">
      <a href="/design">
        <p>&lt; Back</p>
      </a>
      <h1>
        {title} / {subhead && <span className="design-subhead">{subhead}</span>}
      </h1>
      <p>{desc}</p>
      <img src={img.src} alt={img.alt} width="672" height="350" />
      <div className="design-project-metadata">
        {metadata.map((item) => (
          <div>
            <h2>{item.field.toUpperCase()}</h2>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
