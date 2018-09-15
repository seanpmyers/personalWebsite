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
  auxCordPng,
  Footer,
  Title,
  Topbar,
} from '../../../Components'

class AuxCord extends React.Component {
  public render() {
    return (
      <section>
        <Title />
        <Topbar />
        <div className="blog">
          <div className="blog-canvas">
            <div className="blog-grid">
              <div className="blog-item">
                {createTitle("auxCord")}
                {createDate("June 3rd, 2018", "June 26th, 2018")}
                <img src={auxCordPng} className="blog-image" />
                {createSubtitle("Overview")}
                {createParagraph(
                  "auxCord is a web application for Spotify users, originally developed during Clemson University's 2018 hackathon. The application" +
                  "allows two users to sync their accounts, and then generates for both users that contains a mixture of their music preferences." +
                  "auxCord gets it's name from the idea's origin: when driving on a road trip with a friend, the auxiliary cord may be" +
                  "passed back in forth in order to share each person's preferred music. This app aims to find the music that both individuals" +
                  "are most likely to both enjoy and put it in one playlist for the user's convenience. auxCord won 'Best Cloud Based Hack' at Clemson's 2018 Hackathon."
                )}
                {createSubtitle("Development")}
                {createParagraph(
                  "Development for this application is still ongoing. Should development stop this blog will be updated accordingly."
                )}
                {createSubtitle("People")}
                <p className="blog-paragraph">
                  <ul className="blog-people">
                    <li>
                      {createLink("Angelo Carrabba", "http://angelo.carrabba.io/#/")}
                    </li>
                    <li>
                      {createLink("Christian Steinmetz", "http://www.christiansteinmetz.com/")}
                    </li>
                    <li>
                      {createLink("Courtney Shearer", "https://github.com/csheare")}
                    </li>
                    <li>
                      {createLink("Harold Hyte", "https://github.com/haroldhyte")}
                    </li>
                    <li>
                      {createLink("Preston Dunnavant", "https://www.dunnavant.live/")}
                    </li>
                  </ul>
                </p>
                {createSubtitle("Links")}
                <p className="blog-paragraph" >
                  <ul className="blog-people" >
                    <li>
                      {createLink("CU_hackit", "http://cuhack.it/")}
                    </li>
                    <li>
                      {createLink("Read the Devpost: Best Cloud Based Hack.", "https://devpost.com/software/auxcord")}
                    </li>
                    <li>
                      {createLink("Try auxCord now: http://auxcord.io!", "http://auxcord.io")}
                    </li>
                    <li>
                      {createLink("Check out the code on Github.", "https://github.com/csteinmetz1/auxCord")}
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

export default AuxCord;