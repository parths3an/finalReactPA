import React, {Component} from 'react';
import { Link } from 'react-router';
import NavBar from './navBar';
import ReqBox from './reqBox';
import MessageBox from './messageBox'

class ParentHome extends Component{

    render()
    {
        return (
            <div>
                <NavBar />
                <ReqBox />
                <MessageBox />
                </div>
        );
    }
}
export default ParentHome;