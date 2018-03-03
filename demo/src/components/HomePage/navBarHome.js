import React, { Component } from 'react';
import {Link} from 'react-router';

class NavBarHome extends Component {

  constructor(props) {
    super();
  }
  render() {   
    return (
      <div>


<Link to="/course" activeClassName="active">About</Link>
{" | "} 
      <p> In the Nav bar ....</p>
      <Link to="/about" className="btn btn-primary btn-lg">Learn more</Link>

      </div>

    );
  }
}

export default NavBarHome;
