export default function ImageCaption({
  id = null,
  image,
  imageStyle = "scrapbook",
  dimensions = {
    height: 200,
    width: "auto",
  },
}) {
  return (
    <figure className={`image-caption ${imageStyle}`} id={id}>
      {imageStyle === "modern-top" ? (
        <figcaption>{image.caption}</figcaption>
      ) : null}
      <img
        src={image.src}
        alt={image.alt}
        height={dimensions.height}
        width={dimensions.width}
      />
      {imageStyle === "modern-top" ? null : (
        <figcaption>{image.caption}</figcaption>
      )}
    </figure>
  );
}
