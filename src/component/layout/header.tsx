export default function Header() {
  return (
    <header>
      <nav id="nav-bar" className="container">
        <div id="logo">
          <img
            className="panda-logo"
            src="/layout/panda logo.png"
            alt="panda logo"
          />
        </div>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#" className="hosting">
            Hosting
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </a>
          <a href="#">Contract</a>
        </div>

        <div id="nav-actions">
          <img src="/layout/globe.svg" alt="globe icon" />
          <button className="button button-secondary">Login</button>
        </div>
      </nav>
    </header>
  );
}
