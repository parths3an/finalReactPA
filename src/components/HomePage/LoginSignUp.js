import React from 'react';
import { Link, browserHistory } from 'react-router';
import './loginSignUp.css';
import AboutPage from '../about/AboutPage';
import {BrowserHistory} from 'react-router-dom';


class LoginSignUp extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      clickedLogin: 'false',
      currDisLogin: 'none',
      clickedSignUp: 'false',
      currDisSignUp: 'none',
      userName: '',
      pw: '',
      loggedIn: 'false',
      firstName: '',
      lastName: '',
      emailAdd: ''
        };
   this.handlePwChange = this.handlePwChange.bind(this);
   this.handleUNChange = this.handleUNChange.bind(this);
    this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
    this.handleFN = this.handleFN.bind(this);
    this.handleLN = this.handleLN.bind(this);
    this.handleEA = this.handleEA.bind(this);
    this.handleSubmitSignUp = this.handleSubmitSignUp.bind(this);
  }
    handleUNChange(event)
    {
      this.setState({userName: event.target.value});
    }
   
    handlePwChange(event)
   {
      this.setState({pw: event.target.value});
   }
   
   handleSubmitLogin(event) 
   {
     
     if(this.state.userName === 'parth' && this.state.pw === 'asdf')
     {
       alert('Getting your profile...');
       this.closeModalLogin();
       this.setState({loggedIn: 'true'});
       //TODO: Render the parent login page...
       BrowserHistory.push("/about");
     }
    else 
    {
      alert('Please enter correnct username and password!');
      this.setState({userName: ''});
      this.setState({pw: ''});
      this.setState({currDis: 'block'});
    }
    event.preventDefault();
  }
  //Function for the SignUp
  handleFN(event)
    {
      this.setState({firstName: event.target.value});
    }

    handleLN(event)
    {
      this.setState({lastName: event.target.value});
    }

    handleEA(event)
    {
      this.setState({emailAdd: event.target.value});
    }
  handleSubmitSignUp(event) 
   {
      this.setState({userName: event.target.value});
   }

  render() {

    //Opening the modal 
    const changeStyleToBlockLogin = () => {
      this.setState({
        clickedLogin: 'true',
        currDisLogin: 'block'
      }); 
    };

    const changeStyleToBlockSignUp = () => {
      this.setState({
        clickedSignUp: 'true',
        currDisSignUp: 'block'
      }); 
    };
    //closing the modal using the x button 
    const closeModalLogin = () =>
    {
      this.setState({
        currDisLogin: 'none'
      });
    };

    const closeModalSignUp = () =>
    {
      this.setState({
        currDisSignUp: 'none'
      });
    };
    return(
      <div>
        <button onClick={changeStyleToBlockLogin} >Login</button>
        <button onClick={changeStyleToBlockSignUp} >Sign Up</button>

        <div id="id01" className="modal" style={{ display: this.state.currDisLogin }}>
          <span
            className="close" title="Close Modal" onClick={closeModalLogin}>&times;</span>
          <form className="modal-content animate" onSubmit={this.handleSubmitLogin}>

            <div className="container">
              <label htmlFor="uname"><b>Username</b></label>
              <input type="text" placeholder="Enter Username" value={this.state.userName} onChange={this.handleUNChange}  required />

              <label htmlFor="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" value={this.state.pw} onChange={this.handlePwChange} required />

              <button type="submit" value="Submit">Login</button>
             <div>

               </div>
              <label>
                <input type="checkbox" checked="checked" name="remember" /> Remember me
      </label>
            </div>

            <div className="container">
              <button type="button" className="cancelbtn" onClick={closeModalLogin}>Cancel</button>
              <span className="psw">Forgot <a href="#">password?</a></span>
            </div>
          </form>
        </div>
        


        <div id="id01" className="modal" style={{ display: this.state.currDisSignUp }}>
          <span
            className="close" title="Close Modal" onClick={closeModalSignUp}>&times;</span>
          <form className="modal-content animate" onSubmit={this.handleSubmitSignUp}>

            <div className="container">
            <label htmlFor="uname"><b>First Name</b></label>
              <input type="text" placeholder="Enter First Name" value={this.state.firstName} onChange={this.handleFN}  required />

              <label htmlFor="uname"><b>Last Name</b></label>
              <input type="text" placeholder="Enter Last Name" value={this.state.lastName} onChange={this.handleLN}  required />

              <label htmlFor="uname"><b>Email</b></label>
              <input type="text" placeholder="Enter Email" value={this.state.emailAdd} onChange={this.handleEA}  required />

              <label htmlFor="uname"><b>Username</b></label>
              <input type="text" placeholder="Enter Username" value={this.state.userName} onChange={this.handleUNChange}  required />

              <label htmlFor="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" value={this.state.pw} onChange={this.handlePwChange} required />

              <button type="submit" value="Submit">Sign Up</button>
             <div>

               </div>
              
            </div>

            <div className="container">
              <button type="button" className="cancelbtn" onClick={closeModalSignUp}>Cancel</button>
              <span className="psw">Forgot <a href="#">password?</a></span>
            </div>
          </form>

        </div> 
      </div>

    );
  }
}
export default LoginSignUp;