import React, {Component} from 'react';
import { Link } from 'react-router';

class MessageBox extends Component{

    constructor()
{
    super();
    this.state = {
        currDisplay: 'block',
        currVisibility: ''
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.editReq = this.editReq.bind(this);
    this.deleteReqS1  = this.deleteReqS1.bind(this);
    this.deleteReqS2  = this.deleteReqS2.bind(this);
}
openModal() {
  this.setState({currDisplay: 'block'});
}

closeModal() {
    this.setState({currDisplay: 'none'});
}

editReq() {
    this.setState({currDisplay: 'block'});
}

deleteReqS1()
{
this.closeModal();
this.setState({currVisibility: 'hidden'});
}

deleteReqS2()
{
  this.closeModal();
  this.setState({currVisibility: 'hidden'});
}
    
render()
{
        return(
            <div>
                <h1> Rendering from message Box </h1>
                <div className="container">
        <div className="messageBox">
            <div className="upcomingJobs">
                <p className="insideText">Upcoming Jobs</p>
            </div>
            <div className="calendarImage">
                <img src="../images/calendar.png" alt="../images/calendar.png" />
            </div>
            <div id="confirmedReq">
                <p className="s1">
                    Date: 01/27/18
                    <br /> Day: Satuday
                    <br /> From: 5:00pm
                    <br /> To: 7:00pm
                    <br /> Status: Confirmed
                </p>
                <button className="changeBtn" onClick={this.editReq}>Edit Request</button>
                <button className="cancelBtn" onClick={this.deleteReqS1}>Cancel Request</button>
            </div>
            <div id="pendingReq">
                <p className="s2">
                    Date: 01/28/18
                    <br /> Day: Sunday
                    <br /> From: 7:00pm
                    <br /> To: 9:00pm
                    <br /> Status: Pending
                </p>
                <button className="PchangeBtn" onClick={this.editReq}>Edit Request</button>
            <button className="PcancelBtn" onClick={this.deleteReqS2}>Cancel Request</button>
            </div>
        </div>
    </div>

    <div id="simpleModal" className="modal">
        <div className="modal-content"></div>
            <span className="closeBtn" onClick={this.closeModal}>&times;</span>
            <form className="smallForm">
            Date: <input type="date" id ="dateInput" required /> <br/> 
            <p>From: <input type="time" id ="timeFromInput" required /></p><br/> 
            <p>To:   <input type="time" id ="timeTOInput"  required /></p><br/> 
            <div id="updateRequest"><input type="button"  value="Update" name="updateRequest" /></div>
            </form>
        </div>

                </div>
        );
}
}
export default MessageBox;