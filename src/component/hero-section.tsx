export default function heroSection({ title, showFull = true }) {
  const mainContainer = {
    width: "100%",
    justifyItems: "center",
  };

  return (
    <section id="hero-section" className="container">
      <div className="left-section" style={mainContainer}>
        <h1 className="button button-primary">Hosting For All Businesses</h1>
        <div>{title}</div>
        <svg
          width="266"
          height="14"
          viewBox="0 0 266 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 11C46.6923 4.96301 163.462 -3.48877 265 11"
            stroke="url(#paint0_linear_1_276)"
            strokeWidth="6"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_276"
              x1="301.66"
              y1="-33.3189"
              x2="436.136"
              y2="-192.222"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E1345A" />
              <stop offset="1" stopColor="#6525AF" />
            </linearGradient>
          </defs>
        </svg>
        <div id="hero-card-holder">
          <div className="hero-card">
            <img src="./layout/server.png" alt="server icon" />
            <div>
              <h3 className="header-3">Shared Hosting</h3>
              <p>
                At Panda Hosting, we believe <br /> in simplifying technology to{" "}
                <br />
                empower
              </p>
              <img src="/layout/arrow-top-right.svg" alt="arrow icon" />
            </div>
          </div>
          <div className="hero-card">
            <img src="./layout/server.png" alt="server icon" />
            <div>
              <h3 className="header-3">Shared Hosting</h3>
              <p>
                At Panda Hosting, we believe <br /> in simplifying technology to{" "}
                <br />
                empower
              </p>
              <img src="/layout/arrow-top-right.svg" alt="arrow icon" />
            </div>
          </div>
          <div className="hero-card">
            <img src="./layout/server.png" alt="server icon" />
            <div>
              <h3 className="header-3">Shared Hosting</h3>
              <p>
                At Panda Hosting, we believe <br /> in simplifying technology to{" "}
                <br />
                empower
              </p>
              <img src="/layout/arrow-top-right.svg" alt="arrow icon" />
            </div>
          </div>
          <div className="hero-card">
            <img src="./layout/server.png" alt="server icon" />
            <div>
              <h3 className="header-3">Shared Hosting</h3>
              <p>
                At Panda Hosting, we believe <br /> in simplifying technology to{" "}
                <br />
                empower
              </p>
              <img src="/layout/arrow-top-right.svg" alt="arrow icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
