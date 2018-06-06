import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../Home/Home'

import MemberUpdate from '../MemberUpdate/MemberUpdate';
import Enrollment from '../Enrollment/Enrollment';
import AuditReport from '../AuditReport/AuditReport';
import ErrorCategory from '../ErrorCategory/ErrorCategory';
import MemberSearch from '../MemberSearch/MemberSearch';
import Provider from '../Provider/Provider';
import data from './data'

import '../../css/header.css';
import 'font-awesome/css/font-awesome.min.css';


class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = { currentView: '' };
  }


  componentWillMount() {
    this.changeLocation()
    window.addEventListener('popstate', this.changeLocation.bind(this))
  }

  // update state based on the URL
  changeLocation() {
    const path = window.location.pathname.split('/')
    const currentView = path[path.length - 1]
    this.setState({ currentView })
  }
  navigateToRoute(route) {
    this.setState({ currentView: route })
  }

  render() {
   

    return (
      <Router>
        <div >
          <nav className="navbar navbar-expand-sm navbar-light" style={{ width: '100%' }} >
            <div className="navbar-header" style={{ width: '100%' }}>
              <div id="navbar" style={{ backgroundColor: 'rgb(51, 122, 183)' }} class="collapse navbar-collapse mr-auto">
                <ul class="navbar-nav mr-auto" id="navbar"  >
                  {data.links.map(index => {
                    return <li onClick={() => this.navigateToRoute(index.view)} className={(this.state.currentView === index.view) ? "nav-item active" : "nav-item"}>
                      <Link to={(index.view)} className="nav-link"><i className={(index.className)}></i>{(index.label)}</Link>
                    </li>;
                  })}
                </ul>
                <form class="form-inline d-inline-block">
                  <span class="input-group-append">
                    <input class="form-control py-1" type="search" placeholder="Search" id="example-search-input" />
                    <button class="btn" type="button">
                      <i class="fa fa-search"></i>
                    </button>
                  </span>
                </form>
              </div>
            </div>
          </nav>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/enrollment' component={Enrollment} />
            <Route path='/memberUpdate' component={MemberUpdate} />
            <Route path='/provider' component={Provider} />
            <Route path='/auditReport' component={AuditReport} />
            <Route path='/errorCategory' component={ErrorCategory} />
            <Route path='/memberSearch' component={MemberSearch} />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default Nav;
