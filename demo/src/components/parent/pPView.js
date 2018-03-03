import React, { Component } from 'react';
import { Link } from 'react-router';
import NavBar from './navBar';

class PPView extends Component{

    render()
    {
        return(
            <div>
                <NavBar />
                <h1> Parent Profile</h1>
                </div>
        );    
    }
}
export default PPView;