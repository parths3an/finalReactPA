import React, { Component } from 'react';
import { Link } from 'react-router';
import NavBarBS from './navBarBS';

class BSPView extends Component{

    render()
    {
        return(
            <div>
                <NavBarBS />
                <h1> BS Profile</h1>
                </div>
        );    
    }
}
export default BSPView;