import React, { Component} from 'react';
import './Projects.scss';

class Projects extends Component {
    constructor(props){
        super(props)
        console.log('projects props: ', this.props);
    }
    componentDidMount(){
        console.log("projects mounted, props: ", this.props);
    }

    render(){
        return (
            <h1>Projects, coming soon</h1>
        );
    }

};

export default Projects;
