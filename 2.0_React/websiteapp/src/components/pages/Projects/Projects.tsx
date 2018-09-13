import * as React from 'react';
import './Projects.css';

import {
  NavLink
} from 'react-router-dom'

import {
  auxCordPng,
  Footer,
  myWebsitePng,
  Title,
  Topbar,
  tuoMangPng,
} from '../../Components'

const createProject = (title: string, date: string, description: string, url: string, imgurl: string) => {
  const text =
    <div className="project-item">
      <div className="project-thumbnail">
        <NavLink to={url} style={{ textDecoration: 'none' }} id="">
          <img src={imgurl} className="project-image" />
        </NavLink>
      </div>
      <p className="project-date">
        {date}
      </p>
      <p className="project-title">
        <NavLink to={url} style={{ textDecoration: 'none' }} id="">
          {title}
        </NavLink>
      </p>
      <p className="project-description">
        {description}
      </p>
      <p className="project-blog_link">
        <NavLink to={url} style={{ textDecoration: 'none' }} id="">
          Read more →
        </NavLink>
      </p>
    </div>
    ;
  return (
    text
  );
}

class Projects extends React.Component {
  public render() {
    return (
      <section>
        <Title />
        <Topbar />
        <div className="project">
          <div className="project-canvas">
            <div className="project-grid">
              {createProject(
                "Personal Website",
                "June 3rd, 2018",
                "A website I made from scratch to learn about front end development and as a way to consolidate my online activities.",
                "/Projects/Personal_Website",
                myWebsitePng
              )}
              {createProject(
                "auxCord",
                "June 5rd, 2018",
                "My contribution to the web app my friends and I made during Clemson's 2018 hackathon.",
                "/Projects/auxCord",
                auxCordPng
              )}
              {createProject(
                "脱盲 TuoMang",
                "August 7th, 2018",
                "A web app for learning to read Chinese.",
                "/Projects/TuoMang",
                tuoMangPng
              )}

            </div>
          </div>
        </div>
        <Footer />
      </section>
    );
  }
}

export default Projects;