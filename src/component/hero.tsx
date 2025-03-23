export default function hero() {
  return (
    <section id="hero-section" className="container">

      <div className="left-section">
        <h1 className="button button-primary">Hosting For All Businesses</h1>
        <div>
          Up to 79% Off: <br />
          Everything You <br /> Need to Grow Online
        </div>
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
        <p>
          Launch your website starting at US$ 2.49/month <br />
          <span>+ 2 additional months and free domain</span>
        </p>
        <div className="call-to-action">
          <button className="button button-primary">Get Started</button>
          <button className="button button-secondary">56:02:21:02</button>
        </div>
        <svg
          className="shield-image"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
          />
        </svg>
        <span>30 Day Money Back Guarantee</span>
      </div>
      <div className="right-section">
        <img src="/layout/Hero-Image.png" alt="hero image" />
      </div>
    </section>
  );
}
