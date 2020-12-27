import React, {Component} from 'react';
import './component.styles.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

import Calculator from './extentions/Calculator.componant'

import { MdExtension } from 'react-icons/md'

export default class Extentions extends Component {
    render() {
        return(
            <Router>
                <h4 className="row m-0 p-3 text-dark"><MdExtension className="mr-2"/> Extentions</h4>
                <div className="row m-0 px-3">
                    {/* <Calculator/> */}
                </div>
            </Router>
        );
    }
}