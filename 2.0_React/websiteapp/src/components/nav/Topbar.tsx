import * as React from 'react';
import "roboto-fontface"
import "./Topbar.css"

import {
  createLink
} from '../nav/Routes'

class Topbar extends React.Component {
  public render() {
    return (
      <div className="topbarWrapper" id="">
        <ul className="topbarList">
          <li className="topbarLink" >
            {createLink('Home', '/', 'linkStyle')}
          </li>
          <li className="topbarLink" >
            {createLink('Blog', '/Blog', 'linkStyle')}
          </li>
          <li className="topbarLink" >
            {createLink('Projects', '/Projects', 'linkStyle')}
          </li>
          <li className="topbarLink" >
            {createLink('About', '/About', 'linkStyle')}
          </li>
        </ul>
      </div>
    );
  }
}

export default Topbar;