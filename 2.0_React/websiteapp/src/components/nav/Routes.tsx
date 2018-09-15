import * as React from 'react';
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from 'react-router-dom'
import {
  About,
  AuxCord,
  Blog,
  BlogMyWebsite,
  BlogTuoMang,
  Error,
  Home,
  Projects
} from '../Components'

function createLink(textEN: string, textZH: string, route: string, navlinkID: string) {
  const link =
    <NavLink to={route} style={{ textDecoration: 'none' }} id={navlinkID} >
        {textEN}
    </NavLink>
  return link;
}

class Routes extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" component={Home} exact={true} strict={true} />
            <Route path="/About" component={About} exact={true} strict={true} />
            <Route path="/Blog" component={Blog} exact={true} strict={true} />
            <Route path="/Projects" component={Projects} exact={true} strict={true} />
            <Route path="/Projects/auxCord" component={AuxCord} exact={true} strict={true} />
            <Route path="/Projects/Personal_Website" component={BlogMyWebsite} exact={true} strict={true} />
            <Route path="/Projects/TuoMang" component={BlogTuoMang} exact={true} strict={true} />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export {
  Routes,
  createLink
};