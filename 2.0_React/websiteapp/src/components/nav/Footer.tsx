import * as React from 'react';
import "roboto-fontface"
import "./Footer.css"


class Footer extends React.Component {
  public render() {
    return (
      <section className="footer">
        <div className="footer-canvas">
          <div className="navbar-grid">
            <a href="https://www.facebook.com/spmyers22" target="_blank" className="footer-item" id="Facebook">
              Facebook
				    </a>
            <a href="https://twitter.com/spmyers22" target="_blank" className="footer-item" id="Twitter">
              Twitter
				    </a>
            <a href="https://www.linkedin.com/in/spmyers/" target="_blank" className="footer-item" id="Linkedin">
              Linkedin
				    </a>
            <a href="https://github.com/seanpmyers" target="_blank" className="footer-item" id="Github">
              Github
				    </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;