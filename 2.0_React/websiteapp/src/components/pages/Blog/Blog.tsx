import * as React from 'react';
import './Blog.css';


class Blog extends React.Component {
  public render() {
    return (
      <div className="blog">
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
                Most Recent Posts
					    </h3>
              <div>
                <p className="blog-paragraph">
                  <a href="blog-posts/blog-personalWebsite" id="blog-link">
                    1. Blog Post #2: My Personal Website - June 3rd, 2018
							    </a>
                  <br />
                  <a href="blog-posts/blog-auxCord" id="blog-link">
                    2. Blog Post #1: auxCord - June 3rd, 2018
							      </a>
                  <br />
                  <br />
                  <a href="blog-posts/blog-list" id="blog-link">
                    See Full List →
							    </a>
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