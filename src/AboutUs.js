import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Programmers from "./Programmers";
import Drivers from "./Drivers";


class AboutUs extends Component {
  reset = () => {
    this.props.history.replace("/blogs");
  };

  render() {
    return (
      <div>
        <h1>About Us</h1>
        <ui>
            <li><Link to="/aboutus/programmers">Programmers</Link></li>
            <li><Link to="/aboutus/divers">Drivers</Link></li>
        </ui>

        <div>
            <Route path="/aboutus/programmers" component={Programmers}/>
            <Route path="/aboutus/divers" component={Drivers}/>
        </div>
      </div>
    );
  }
}

export default AboutUs;
<h1>About Us</h1>;
