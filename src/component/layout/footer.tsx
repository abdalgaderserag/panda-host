export default function Footer() {
    return(
        <footer className="container">
        <div id="footer-logo">
          <img
            src="/layout/panda logo.png"
            alt="footer panda logo"
            className="panda-logo"
          />
          <div id="copyright">© Copyright Panda Host 2025</div>
        </div>

        <div id="footer-links">
          <div>
            <h4>Site</h4>
            <a href="#">Hosting</a>
            <a href="#">SharedHosting</a>
            <a href="#">Pricing</a>
            <a href="#">Blog</a>
            <a href="#">Community</a>
            <a href="#">Careers</a>
          </div>

          <div>
            <h4>Support</h4>
            <a href="#">Help Pages</a>
            <a href="#">PandaHost</a>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Security</a>
          </div>

          <div>
            <h4>Social</h4>
            <a href="#">Twitter</a>
            <a href="#">Facebook</a>
            <a href="#">Linkedin</a>
            <a href="#">Youtube</a>
          </div>
        </div>
      </footer>
    );
}
