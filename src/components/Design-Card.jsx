export default function DesignCard({
  key_name,
  img,
  bg_img,
  title,
  subtitle = false,
  tags = false,
}) {
  console.log(bg_img);
  return (
    <article
      className="design-card"
      id={key_name}
      key={key_name}
      style={{
        backgroundImage: `url(${bg_img.src})`,
        backgroundSize: "cover",
      }}
    >
      <div>
        <img
          src={img.src}
          alt={img.alt}
          width={img.width || "550"}
          height={img.height || "360"}
        />
        <div>
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>
      </div>
      <div>
        {tags && (
          <ul className="tags">
            {tags.map((tag) => (
              <li key={title + "-" + tag}>{tag}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
