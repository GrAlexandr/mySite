import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';

import NavBar from './headerComponent/navBar';
import HomePage from './pages/homePage';
import About from './pages/about';
import Skills from './pages/skills';
import Contacts from './pages/contacts';
import Feedback from './pages/feedback';
import Footer from './footerComponent/footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrap">
          <NavBar />
          <Route name="home" exact path="/" component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/feedback" component={Feedback} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;