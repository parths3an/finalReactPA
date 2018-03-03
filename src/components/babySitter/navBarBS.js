import React, {Component} from 'react';
import { Link } from 'react-router';

class NavBarBS extends Component{
    render(){
        return(
            <div>
            <div className="logo">
                <img src="../images/logo.png" alt="../images/logo.png" />
            </div>
      <Link to="/bsHomePage" activeClassName="active">Home</Link>
      {" | "}
      <Link to="/bsHomePage/bsJobsView" activeClassName="active"> Jobs</Link>
      {" | "}
      <Link to="bsHomePage/bsMView" activeClassName="active">Message</Link>
      {" | "}
      <Link to="bsHomePage/bsPYView" activeClassName="active">Payment</Link>
      {" | "}
      <Link to="bsHomePage/bsPView" activeClassName="active">Profile</Link>
            
            <div className="userName">
                Welcome, John!
                <div className="btn">
                        <Link to= "loginSignUp">Sign Out</Link>
                </div>
            </div>
        </div>
    ); 
    }
}
export default NavBarBS;