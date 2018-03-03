import React, { Component } from 'react';
import {Link} from 'react-router';


class FooterHome extends Component {
  render() {
    return (

      <div className="FooterHome">

<div className="footer card">
<Link to="/about"> About </Link>
      
        <a href="contact.html">Contact</a>
    </div>
     
      </div>

    );
  }
}

export default FooterHome;
