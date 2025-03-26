import Link from "next/link";
import Script from "next/script";

export default function login() {
  return (
    <>
      <Script id="auth-bg-img" strategy="beforeInteractive">
        {`
          const authBg = document.getElementById("auth-bg");
          const h = ((authBg.offsetWidth / 100)*142)+'px';
          authBg.style.height = h;
          // Your JavaScript code here
        `}
      </Script>
      <div className="container flex">
        <div id="auth-bg">
          <div>
            <h3 className="header-3">Welcome to PandaHost</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div>
            <h3 className="header-3">Web Hosting</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <div id="auth">
          <div className="log">
            <div>
              <img src="/layout/panda logo.png" alt="panda logo image" />
            </div>
            <div className="log-buttons">
              <button className="button button-primary button-sharper">
                Sign Up
              </button>
              <button className="button-sharper button not-active">
                Sign In
              </button>
            </div>
            <div>
              <label htmlFor="email">Email Id</label>
              <input
                type="email"
                name="email"
                id="email"
                className="input-text"
                placeholder="Enter Email"
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="input-text"
                placeholder="Enter Password"
              />
            </div>
            <div className="log-cond">
              <img
                className="log-cond-img"
                src="/layout/check.svg"
                alt="check icon"
              />{" "}
              Password Strength : Weak <br />
              <img
                className="log-cond-img"
                src="/layout/check.svg"
                alt="check icon"
              />{" "}
              Cannot contain your name or email address <br />
              <img
                className="log-cond-img"
                src="/layout/check.svg"
                alt="check icon"
              />{" "}
              At least 8 characters <br />
              <img
                className="log-cond-img"
                src="/layout/check.svg"
                alt="check icon"
              />{" "}
              Contains a number or symbol <br />
            </div>
            <br />
            <br />
            <button className="button button-primary button-sharper full">
              Create Account
            </button>
            <div className="flex social-log-header">
              <div className="line"></div> OR <div />
              <div className="line"></div>
            </div>
            <div className="social-log">
              <button className="button button-sharper">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.52 12.2727C23.52 11.4218 23.4436 10.6036 23.3018 9.81818H12V14.46H18.4582C18.18 15.96 17.3345 17.2309 16.0636 18.0818V21.0927H19.9418C22.2109 19.0036 23.52 15.9273 23.52 12.2727Z"
                    fill="#4285F4"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.001 24C15.241 24 17.9573 22.9254 19.9428 21.0927L16.0646 18.0818C14.9901 18.8018 13.6155 19.2272 12.001 19.2272C8.87553 19.2272 6.23007 17.1163 5.28643 14.28H1.27734V17.3891C3.25189 21.3109 7.31007 24 12.001 24Z"
                    fill="#34A853"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.28545 14.28C5.04545 13.56 4.90909 12.7909 4.90909 12C4.90909 11.2091 5.04545 10.44 5.28545 9.71999V6.6109H1.27636C0.463636 8.2309 0 10.0636 0 12C0 13.9364 0.463636 15.7691 1.27636 17.3891L5.28545 14.28Z"
                    fill="#FBBC05"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.001 4.77273C13.7628 4.77273 15.3446 5.37818 16.5883 6.56727L20.0301 3.12545C17.9519 1.18909 15.2355 0 12.001 0C7.31007 0 3.25189 2.68909 1.27734 6.61091L5.28643 9.72C6.23007 6.88364 8.87553 4.77273 12.001 4.77273Z"
                    fill="#EA4335"
                  />
                </svg>
              </button>
              <button className="button button-sharper">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5547 5.53846C13.638 5.53846 14.9959 4.8061 15.8045 3.82962C16.5369 2.94469 17.0709 1.70884 17.0709 0.472982C17.0709 0.30515 17.0556 0.137317 17.0251 0C15.8198 0.0457724 14.3703 0.808646 13.5006 1.8309C12.8141 2.60903 12.1885 3.82963 12.1885 5.08074C12.1885 5.26383 12.219 5.44692 12.2343 5.50795C12.3106 5.5232 12.4326 5.53846 12.5547 5.53846ZM8.7403 24C10.2203 24 10.8764 23.0083 12.7225 23.0083C14.5992 23.0083 15.0111 23.9695 16.6589 23.9695C18.2762 23.9695 19.3595 22.4743 20.3818 21.0095C21.5261 19.3312 21.999 17.6834 22.0296 17.6071C21.9228 17.5766 18.8255 16.3102 18.8255 12.7552C18.8255 9.67324 21.2667 8.28481 21.404 8.178C19.7867 5.85887 17.3303 5.79784 16.6589 5.79784C14.8433 5.79784 13.3633 6.89638 12.4326 6.89638C11.4256 6.89638 10.0982 5.85887 8.5267 5.85887C5.53624 5.85887 2.5 8.33058 2.5 12.9994C2.5 15.8983 3.62905 18.965 5.01748 20.9485C6.20756 22.6268 7.24507 24 8.7403 24Z"
                    fill="black"
                  />
                </svg>
              </button>
              <button className="button button-sharper">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.5 2H3.5V11H12.5V2Z" fill="#F25022" />
                  <path d="M12.5 12H3.5V21H12.5V12Z" fill="#00A4EF" />
                  <path d="M22.5 2H13.5V11H22.5V2Z" fill="#7FBA00" />
                  <path d="M22.5 12H13.5V21H22.5V12Z" fill="#FFB900" />
                </svg>
              </button>
            </div>
            <div>
              <span>
                By signing up to create an account I accept Company’s{" "}
              </span>
              <Link href="/terms-of-service">Terms of use</Link> &{" "}
              <Link href="/privacy">Privacy Policy</Link>.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
