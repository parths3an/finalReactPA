import React, { Component } from 'react';
import { Link } from 'react-router';
import NavBar from './navBar';

class PMView extends Component{

    render()
    {
        return(
            <div>
                <NavBar />
                <h1> Parent Message Chat Box</h1>
                </div>
        );    
    }
}
export default PMView;