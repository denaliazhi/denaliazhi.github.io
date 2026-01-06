export default function OverlayCard({
  key_name,
  img,
  title,
  subtitle = false,
  tags = false,
}) {
  return (
    <article className="overlay-card" key={key_name}>
      <img
        src={img.src}
        alt={img.alt}
        width={img.width || "642"}
        height={img.height || "390"}
      />
      <div className="overlay">
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
        {tags && (
          <ul>
            {tags.map((tag) => (
              <li key={title + "-" + tag}>{tag}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
