import * as React from 'react';
import './About.css';

import {
Footer,
Title,
Topbar
} from '../../Components'

class About extends React.Component {
  public render() {
    return (
      <div className="homeBody">
        <Title />
        <Topbar />
        <section className="bodyContent">
          <div className="center">
            <div className="center2">
            <h1 className="about-title">
                About
            </h1>
              <p className="aboutContent" id="indexP">
                Hello.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default About;