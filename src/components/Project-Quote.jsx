// Quote for project write-ups

export default function ProjectQuote({ img, title, quote }) {
  return (
    <div className="quote">
      <img src={img.src} alt={img.alt} />
      <div>
        <p>
          <span className="bold">{title[0]}</span>, {title[1]}
        </p>
        {quote}
      </div>
    </div>
  );
}
