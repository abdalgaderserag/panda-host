export default function partner() {
  return (
    <section id="pricing">
      <h2 className="header-2">Our Partner</h2>
      <h3 className="header-3">
        Over 100+ Company <br />
        Trust us
      </h3>
      <marquee id="lazy-text" direction="left" behavior="scroll">
        <div>
          <img src="/layout/star.svg" alt="star" />
          <span>Web Hosting</span>
          <img src="/layout/star.svg" alt="star" />
          <span>Vps Hosting</span>
          <img src="/layout/star.svg" alt="star" />
          <span>Shared Hosting</span>
          <img src="/layout/star.svg" alt="star" />
          <span>Domain Name</span>
          <img src="/layout/star.svg" alt="star" />
          <span>Search Domain</span>
          <img src="/layout/star.svg" alt="star" />
          <span>Web Hosting</span>
        </div>
      </marquee>
    </section>
  );
}
