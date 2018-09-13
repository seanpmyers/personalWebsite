import * as React from 'react';
import '../PostStyle.css';

import {
  createDate,
  createLink,
  createParagraph,
  createSubtitle,
  createTitle
} from '../PFunctions'

import {
  Footer,
  myWebsitePng,
  Title,
  Topbar,
} from '../../../Components'

class BlogMyWebsite extends React.Component {
  public render() {
    return (
      <section>
        <Title />
        <Topbar />
        <div className="blog">
          <div className="blog-canvas">
            <div className="blog-grid">
              <div className="blog-item">
                {createTitle("Personal Website")}
                {createDate("June 1st, 2018", "September 13th, 2018")}
                <img src={myWebsitePng} className="blog-image" />
                {createSubtitle("Overview")}
                {createParagraph(
                  "This is a website I have been devloping by myself since early 2018. I made this website in order to learn about web technologies and " +
                  "as tool to centralize all of my online activities. "
                )}
                {createSubtitle("Development")}
                {createParagraph(
                  "The initial code for this website consisted of HTML, CSS, and JavaScript. I hosted the site using Amazon Web Services. " +
                  "Development for this website is still ongoing. Should development stop this blog will be updated accordingly."
                )}
                {createSubtitle("People")}
                <p className="blog-paragraph">
                  <ul className="blog-people">
                    <li>
                      {createLink("Sean Myers", "https://seanmyers.xyz")}
                    </li>
                  </ul>
                </p>
                {createSubtitle("Links")}
                <p className="blog-paragraph" >
                  <ul className="blog-people" >
                    <li>
                      {createLink("Github Repository", "https://github.com/seanpmyers/personalWebsite")}
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    );
  }
}

export default BlogMyWebsite;