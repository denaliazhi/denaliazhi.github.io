export default function OverlayCard({ key_name, content }) {
  return (
    <a href={`/${key_name.replace("_", "-")}`}>
      <article className="overlay-card" key={key_name}>
        <img
          src={content.cover_img.src}
          alt={content.cover_img.alt}
          width={content.width || "642"}
          height={content.height || "390"}
        />
        <div className="overlay">
          <h2>{content.client}</h2>
          <p>{content.client_category}</p>
          <ul>
            {content.tags.map((tag) => (
              <li key={content.client + "-" + tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </article>
    </a>
  );
}
