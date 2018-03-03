import React, { Component } from 'react';
import { Link } from 'react-router';
import NavBarBS from './navBarBS';

class BSJobsView extends Component{

    render()
    {
        return(
            <div>
                <NavBarBS />
                <h1> BS Jobs</h1>
                </div>
        );    
    }
}
export default BSJobsView;