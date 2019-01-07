import React, { Component} from 'react';
import './Home.scss';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            activePage: "home",
        };
        console.log('home props: ', this.props);
    }

    render(){
        return (
            <h1>Home coming soon</h1>
        );
    }
};

export default Home;
