import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {loading && <LoadingDots interval={100} dots={20}/>}
      {" | "} 
      <Link to="/loginSignUp" activeClassName="active">Login/SignUp</Link>
      {" | "} 
      <Link to="/parentHome" activeClassName="active"> Parent Home</Link>
      {" | "} 
      <Link to="/bsHomePage" activeClassName="active"> Baby Sitter Home</Link>
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
