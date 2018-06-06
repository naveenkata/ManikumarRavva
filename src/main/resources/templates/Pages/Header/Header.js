import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../Home/Home'

import MemberUpdate from '../MemberUpdate/MemberUpdate';
import Enrollment from '../Enrollment/Enrollment';
import AuditReport from '../AuditReport/AuditReport';
import ErrorCategory from '../ErrorCategory/ErrorCategory';
import MemberSearch from '../MemberSearch/MemberSearch';
import Provider from '../Provider/Provider';


import '../../css/header.css';
import 'font-awesome/css/font-awesome.min.css';


class Header extends Component {
    render() {

        return (
            <div className="pt-2 px-3" >
                <div className="row" style={{ backgroundColor: 'white' }}>
                    <div className="col-xl-1 col-lg-2 col-sm-3 col-5">
                        <img src="images/logowithmontana.gif" alt="logo" style={{ maxHeight: '80px' }} />
                    </div>
                    <button className="d-sm-none navbar-toggler col-3 offset-4 collapsed" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="col-xl-10 col-lg-9 col-sm-8 col-6">
                        <h2 style={{ float: 'left', marginTop: '15px', color: 'rgb(51, 122, 183)' }}> Retail Dashboard</h2>
                    </div>
                    <div className="col-sm-1 col-6">
                        <button type="button" className="btn btn-default " style={{ float: 'right', border: 'none' }}>
                            <span className="fa fa-user" style={{ color: '#337ab7', fontSize: '33px', cursor: 'pointer', top: '2px' }}></span>
                            <br />i386182</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
