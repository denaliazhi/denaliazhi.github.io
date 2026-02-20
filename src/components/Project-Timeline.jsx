//Timeline for design project write-ups

export default function ProjectTimeline({ contents }) {
  return (
    <section className="design-project-timeline">
      <div>
        {contents.map((period) => (
          <div>
            <h3>
              Days <span className="bold">{period.days}</span>
            </h3>
            {period.events.map((event) => (
              <div>
                <h4>{event.title}</h4>
                {event.desc}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
