import * as React from 'react';
import './Home.css';

import {
  createLink
} from '../../nav/Routes'

import {
  face,
  Footer,
  Title,
  Topbar
} from '../../Components'

class Home extends React.Component {
  public render() {
    return (
      <div className="homeBody">
        <Title />
        <Topbar />
        <section className="bodyContent">
          <div className="center">
            <div className="center2">
              <img className="facePic" src={face} />
              <p className="homeContent" id="indexP">
                Welcome to my home on the internet.
                <br />
                <br /> Download my&nbsp;
                <strong>
                  <a href="" download={true} id='links'>
                    resume
                  </a>
                </strong> here.
                <br />
                <br /> For general information concerning this site, check out&nbsp;
                {createLink('my blog post', '/Projects/Personal_Website', 'links')}
                .
                <br /> You can find write ups on projects I have worked on under&nbsp;
                {createLink('Projects', '/Projects', 'links')}.

                <br /> If you're interested in what I've been up to recently, go to my&nbsp;
                {createLink('Blog', '/Blog', 'links')}.
                <br />
                <br /> My social media and other links can be found at the bottom of the page.
                <br />
                <br /> Thanks for stopping by.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Home;