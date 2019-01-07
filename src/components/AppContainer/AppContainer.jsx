import React, { Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Music from './components/Music/Music';
import Arcade from './components/Arcade/Arcade';

import './AppContainer.scss';

class AppContainer extends Component {
    render(){
        return (
            <h1>Music page, coming soon...</h1>
        );
    }

};

export default AppContainer;
