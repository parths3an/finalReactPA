import React, { Component } from 'react';
import { Link } from 'react-router';
import NavBarBS from './navBarBS';

class BSPYView extends Component{

    render()
    {
        return(
            <div>
                <NavBarBS />
                <h1> BS Payment</h1>
                </div>
        );    
    }
}
export default BSPYView;