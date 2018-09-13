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
  Title,
  Topbar,
  tuoMangPng
} from '../../../Components'

class BlogTuoMang extends React.Component {
  public render() {
    return (
      <section>
        <Title />
        <Topbar />
        <div className="blog">
          <div className="blog-canvas">
            <div className="blog-grid">
              <div className="blog-item">
                {createTitle("脱盲 TuoMang")}
                {createDate("September 13th, 2018", "September 13th, 2018")}
                <img src={tuoMangPng} className="blog-image" />
                {createSubtitle("Overview")}
                {createParagraph(
                  "This is a web application I am developing to help myself and possibly others to improve the Chinese reading ability." +
                  "Reading is a huge part of being literate, and an efficient method of improving overall linguistic ability. However " + 
                  "when attempting to read in a language you are just starting to learn, there is probably a high number of words you are " +
                  "unfamiliar with. One way to deal with this is to keep a dictionary at hand, taking note of each new words meaning." +
                  "However this alone is not enough in my experience, as with a language such as Chinese, a simple definition of the word is " +
                  "enough to decipher the true meaning of any particular sentence or phrase. Therefore this application attempts to provide " +
                  "readers additional tools to help understand each unfamiliar word, phrase, or sentence."
                )}
                {createSubtitle("Development")}
                {createParagraph(
                  "This project's development has just only begun and is not expected to be available for some time. " +
                  "If you are interested in this idea you can follow my progress on github. Any updates I deem noteworthy will also be posted here on my blog."
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
                      {createLink("Github Repository", "https://github.com/seanpmyers/TuoMang")}
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

export default BlogTuoMang;