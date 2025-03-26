export default function resetPassword() {
  return (
    <>
      <section className="container">
        <br />
        <br />

        <div id="password-reset">
          <h3 className="header-3">Reset Password</h3>
          <div>
            <p>
              If there is an account for this email, a password reset <br />{" "}
              link has been sent. If you did not receive the email, <br /> make
              sure you entered your email correctly.
            </p>
          </div>
          <div>
            <label htmlFor="email">Email ID</label>
            <input
              type="email"
              name="email"
              id="email"
              className="input-text"
            />
          </div>
          <br />
          <button className="button button-primary button-sharper full">
            Reset Password
          </button>
        </div>
        <br />
        <br />
        <br />
      </section>
    </>
  );
}
