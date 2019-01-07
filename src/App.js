import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Music from './components/Music/Music';
import Arcade from './components/Arcade/Arcade';

import './App.scss';



class App extends Component {
    constructor(props){
        super(props);
        this.setActive = this.setActive.bind(this);
        this.state = {
            activePage: "home",
        };
    }

    setActive(page){
        console.log("setting active page: ", page);
        this.state.activePage = page;
    }
    componentDidMount(){
        console.log('app reloading');
    }

    render() {
        return(
            <Router>
                <div className="App">
                    <div>
                        <Header activePage = {this.state.activePage} setActive={this.setActive} />
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/music/" component={Music} />
                            <Route path="/projects/" component={Projects} />
                            <Route path="/resume/" component={Resume} />
                            <Route path="/arcade/" component={Arcade} />
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}


export default App;

