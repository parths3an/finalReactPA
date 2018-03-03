import React, { Component } from 'react';
import { component } from 'react-router/lib/PropTypes';
import NavBarHome from './navBarHome';
import SlideShow from './slideShow';
import FooterHome from './footerHome';


class HomePage extends Component{
    render(){
        return(
            <div>
                <h1> Home Page </h1>
                <NavBarHome />
                <SlideShow />
                <FooterHome />
            </div>
        );
    }
}