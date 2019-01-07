import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header/Header';
import './App.scss';

const Index = () => <h2>Home</h2>;
const Music = () => <h2>Music Stuff Goes here</h2>;
const Resume = () => <h2>Stunning online resume</h2>;
const Arcade = () => <h2>Welcome to the TylerBriskie.com Arcade and casino!</h2>;


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            activePage: "home",
        };

        console.log("app props: ", this.props);
    }

    render() {
        return(
            <div className="App">
                <Router>
                    <div>
                        <Header />
                        <Route path="/" exact component={Index} />
                        <Route path="/music/" component={Music} />
                        <Route path="/resume/" component={Resume} />
                        <Route path="/arcade/" component={Arcade} />
                    </div>
                </Router>
            </div>
        )
    }
}


export default App;

