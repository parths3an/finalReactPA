import React, {Component} from 'react';
import { Link } from 'react-router';

class ReqBox extends Component{

    render()
    {
        return (
            <div>
                <h1> Rendering from ReqBox</h1>
                <div className="requestBox">
        <div className="rBox">
            <a href="./parent-BabySitterView.html">
                <button className="rBox">
                    <span className="reqBtn"> Request A Baby Sitter
                    </span>
                </button>
            </a>
        </div>
        <div className="editReqBox">
            <a href="./parent-messageView.html">
                <button className="editReqBtn">
                    <span className="editBtn">Edit Request</span>
                </button>
            </a>
        </div>
    </div> 

                </div>
        );
    }
}
export default ReqBox;