// Section header for design project write-ups

export default function ProjectSection({ section, title, children }) {
  return (
    <section
      id={section.toLowerCase().replace(" ", "-")}
      className="design-project-section"
    >
      <h2>{section.toUpperCase()}</h2>
      {title && <h3>{title}</h3>}
      {children}
    </section>
  );
}
