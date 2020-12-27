import React, {Component} from 'react';
import Logo from '../images/logo.svg';
import './component.styles.css';

export default class Home extends Component {
    render() {
        return(
            <div>
                <img src={Logo} className="rounded mx-auto d-block logo-watermark" alt="logo"/>
            </div>
        );
    }
}