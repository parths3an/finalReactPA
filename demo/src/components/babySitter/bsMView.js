import React, { Component } from 'react';
import { Link } from 'react-router';
import NavBarBS from './navBarBS';

class BSMView extends Component{

    render()
    {
        return(
            <div>
                <NavBarBS />
                <h1> BS Message View </h1>
                </div>
        );    
    }
}
export default BSMView;