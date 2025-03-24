import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav id="nav-bar" className="container">
        <div id="logo">
          <Link href="/">
            <img
              className="panda-logo"
              src="/layout/panda logo.png"
              alt="panda logo"
            />
          </Link>
        </div>

        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/about-us">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/hosting" className="hosting">
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
          </Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div id="nav-actions">
          <img src="/layout/globe.svg" alt="globe icon" />
          <button className="button button-secondary">Login</button>
        </div>
      </nav>
    </header>
  );
}
