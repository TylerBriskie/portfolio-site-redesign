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
            <article id="projects-page-container">
                <h1>Web Developer Projects</h1>
                <section className="groupie">
                    <h2>Groupie.</h2>
                    <h3>Start a band.  Take over the world.</h3>
                    <p>Groupie, my capstone project at Galvanize, is an app developed in React Native</p>
                </section>
            </article>
        );
    }

};

export default Projects;
