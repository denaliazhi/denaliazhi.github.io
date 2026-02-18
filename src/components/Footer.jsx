export default function Footer() {
  return (
    <footer>
      <div>
        <h2>Thanks for stopping by.</h2>
        <a href="/Secret">
          <p>( Pssst...this site was made by a squirrel 🐿️ )</p>
        </a>
      </div>
      <div className="socials">
        <h3>Reach me via</h3>
        <a
          id="linkedin"
          href="https://www.linkedin.com/in/denaliazhi/"
          aria-label="LinkedIn"
        >
          LinkedIn
        </a>
        <a id="github" href="https://github.com/denaliazhi" aria-label="Github">
          Github
        </a>
      </div>
    </footer>
  );
}
