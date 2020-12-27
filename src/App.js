import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'

import { BsArrowsFullscreen } from 'react-icons/bs'
import { BsFullscreenExit } from 'react-icons/bs'
import { MdExtension } from 'react-icons/md'


import Student from './components/Student.component'
import Home from './components/Home.componant'
import Security from './components/Security.componant'
import Extentions from './components/Extentions.componant'


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      btnFullScreen: <BsArrowsFullscreen className="text-light"/>,
      mouseX: null,
      mouseY: null
    }
  }

  render() {

    function getFullScreenElement() {
      return document.fullscreenElement
        || document.webkitFullscreenElement
        || document.mozFullscreenElement
        || document.msFullscreenElement;
    }

    function toggleFullScreen() {
      if(getFullScreenElement()){
        document.exitFullscreen()
        this.setState({
          btnFullScreen: <BsArrowsFullscreen className="text-light"/>
        })
      } else {
        document.documentElement.requestFullscreen().catch(console.log);
        this.setState({
          btnFullScreen: <BsFullscreenExit className="text-light"/>
        })
      }
    }

    

    return(
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex">
            <Link to={'/'} className="navbar-brand">Shilpa Academy</Link>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li><Link to={'/'} className="nav-link">Home</Link></li>
                <li><Link to={'/student'} className="nav-link">Students</Link></li>
                <li><Link to={'/security'} className="nav-link">Security Portal</Link></li>
              </ul> 
            </div>
            <Link to={'/extentions'} className="nav-link ml-auto p-2 text-light"><MdExtension/></Link>
            <Link className="nav-link ml-auto p-2" onClick={toggleFullScreen.bind(this)}>{this.state.btnFullScreen}</Link>
          </nav>
        </div>
        <div className="full-screen-fluid">
          <Switch>
            <Route exact path="/"><Home/></Route>
            <Route path="/student" component={Student}/>
            <Route path="/security" component={Security}/>
            <Route path="/extentions" component={Extentions}/>
          </Switch>
        </div>
        <div className="row col-12 py-2 bg-dark m-0 justify-content-center">
            <p className="text-light copyright m-0">&copy; 2021 Script99 </p>
        </div>
      </Router>
    );
  }
}

export default App;