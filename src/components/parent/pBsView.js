import React, { Component } from 'react';
import { Link } from 'react-router';
import NavBar from './navBar';

class PBsView extends Component{

    render()
    {
        return(
            <div>
                <NavBar />
                <h1> Find a Baby Sitter...</h1>
                </div>
        );    
    }
}
export default PBsView;