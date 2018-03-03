import React, { Component } from 'react';
import { Link } from 'react-router';
import NavBarBS from './navBarBS';

class BSHomePage extends Component{

    render()
    {
        return(
            <div>
                <NavBarBS />
                <h1> BS Home </h1>
                </div>
        );    
    }
}
export default BSHomePage;