import React, {Component} from 'react';
import { Link } from 'react-router';

class NavBar extends Component{

    render()
    {
        return (
            <div>
            <div className="logo">
                <img src="../images/logo.png" alt="../images/logo.png" />
            </div>
      <Link to="/parentHome" activeClassName="active">Home</Link>
      {" | "}
      <Link to="/parentHome/pBsView" activeClassName="active">Find a Baby Sitter</Link>
      {" | "}
      <Link to="/parentHome/pMView" activeClassName="active">Message</Link>
      {" | "}
      <Link to="/parentHome/pPyView" activeClassName="active">Payment</Link>
      {" | "}
      <Link to="/parentHome/pPView" activeClassName="active">Profile</Link>
            
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
export default NavBar;