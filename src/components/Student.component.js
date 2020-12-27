import React, {Component} from 'react';
import './component.styles.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Create from './student/create.componant';
import View from './student/view.componant';

import { FaUserPlus, FaSearch } from 'react-icons/fa';

export default class Student extends Component {
    render() {
        return(
            <Router>
                <div className="row col-12">
                    <div className="full-screen-fluid col-2 bg-light py-2">
                        <h6>Navigation</h6>
                        <ul className="nav nav-pills flex-column">
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link active"><FaSearch/> View Data</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/create'} className="nav-link"><FaUserPlus/> Register</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-10 full-screen-fluid">
                        <Switch>
                            <Route exact path="/"><View/></Route>
                            <Route path="/create" component={Create}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}