export default function HoverableText({ img, children }) {
  return (
    <div className="hoverable-text">
      <img src={img.src} alt={img.alt} />
      {children}
    </div>
  );
}
