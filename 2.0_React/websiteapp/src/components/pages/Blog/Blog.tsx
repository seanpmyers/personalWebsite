import * as React from 'react';
import './Blog.css';

import {
  Footer,
  Title,
  Topbar
} from '../../Components'

let postNumber = 0;

class Blog extends React.Component {
  public createpost(text: string, date: string, url: string) {
    postNumber++;
    const element =
      <a href={url} id="blog-link">
        Blog Post #{postNumber}: {text} - {date}
      </a>
    return element;
  }

  public render() {
    return (
      <div className="blog">
        <Title />
        <Topbar />
        <Footer />
        <div className="blog-canvas">
          <div className="blog-grid">
            <div className="blog-item">
              <h1 className="blog-title">
                Blog
					    </h1>
              <h2 className="blog-date">
                Last updated June 3rd, 2018
					    </h2>
              <p className="blog-paragraph">
                This section of the site is where you can find my writeups about projects and my other interests.
					    </p>
              <h3 className="blog-subtitle2">
                All Blog Posts
					    </h3>
              <div>
                <p className="blog-paragraph">
                  {this.createpost("My Personal Website", "June 3rd, 2018", "/Projects/Personal_Website")}
                  <br />
                  {this.createpost("auxCord", "June 3rd, 2018", "/Projects/auxCord")}
                  <br />
                  {this.createpost("TuoMang", "September 14th, 2018", "/Projects/TuoMang")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default Blog;