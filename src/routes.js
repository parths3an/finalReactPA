import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import NavBarHome from './components/HomePage/navBarHome';
import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default
import SlideShow from './components/HomePage/slideShow';
import LoginSignUp from './components/HomePage/LoginSignUp';
import HomePage from './components/Home/HomePage';

import ParentHome from './components/parent/parentHome';
import PBsView from './components/parent/pBsView';
import PMView from './components/parent/pMView';
import PPYView from './components/parent/pPyView';
import PPView from './components/parent/pPView';

import BSHomePage from './components/babySitter/bsHomePage';
import BSMView from './components/babySitter/bsMView';
import BSPYView from './components/babySitter/bsPYView';
import BSPView from './components/babySitter/bsPView';
import BSJobsView from './components/babySitter/bsJobsView';


export default (
  <Route path="/" component={App}>
     <IndexRoute component={HomePage} />   
    <Route path="courses" component={CoursesPage} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="course/:id" component={ManageCoursePage} />
    <Route path="about" component={AboutPage} />
    <Route path="loginSignUp" component={LoginSignUp} />
    
    <Route path="parentHome" component={ParentHome} />
    <Route path="parentHome/pBsView" component={PBsView} />
    <Route path="parentHome/pMView" component={PMView} />
    <Route path="parentHome/pPyView" component={PPYView} />
    <Route path="parentHome/pPView" component={PPView} />

    <Route path="bsHomePage" component={BSHomePage} />
    <Route path="bsHomePage/bsJobsView" component={BSJobsView} />
    <Route path="bsHomePage/bsMView" component={BSMView} />
    <Route path="bsHomePage/bsPYView" component={BSPYView} />
    <Route path="bsHomePage/bsPView" component={BSPView} />
    
    


  </Route>
);
