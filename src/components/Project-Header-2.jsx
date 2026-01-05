export default function ProjectHeader2({ title, role, scope, desc = false }) {
  return (
    <section className="design-project-header">
      <a href="/design">
        <p>&lt; Back</p>
      </a>
      <h1>{title}</h1>
      <hr />
      <div>
        <h2>Role</h2>
        <p>{role}</p>
      </div>
      <div>
        <h2>Scope</h2>
        <ul className="tags">
          {scope.map((skill) => (
            <li key={`${title} - ${skill}`}>{skill}</li>
          ))}
        </ul>
      </div>
      {desc && <p>{desc}</p>}
    </section>
  );
}
