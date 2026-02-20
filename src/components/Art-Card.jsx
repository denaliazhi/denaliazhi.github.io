export default function ArtCard({ key_name, content }) {
  return (
    <article className="art-card" id={key_name} key={key_name}>
      <img
        src={content.img.src}
        alt={content.img.alt}
        width="550"
        height="360"
      />
      <div className="tooltip">
        <div>
          <h2>{content.title}</h2>
          <p>{content.subtitle}</p>
        </div>
        {content.desc && <p>{content.desc}</p>}

        {content.tags && (
          <ul className="tags">
            {content.tags.map((tag) => (
              <li key={content.title + "-" + tag}>{tag}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
