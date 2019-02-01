import React, { Component} from 'react';
import './Resume.scss';

class Resume extends Component {
    render(){
        return (
          <div className="resume-page-container">
              <article className="scrollable">
                  <section className="experience">
                      <header>
                          <h1>Vertafore <span>2017 - Present</span></h1>
                      </header>
                      <p>Here's stuff about vertafore</p>
                  </section>
                  <section className="experience">
                      <header>
                          <h1>Galvanize Web Development Immersive Bootcamp <span>2016-2017</span></h1>
                      </header>
                  </section>
              </article>
              <aside id="skills-and-proficiencies">
                  <h1>Skills and Proficiencies</h1>
                  <div id="skill-table">
                      <div className="skill-single">
                          <h3>Java</h3>
                          <div className="skill-level 8"></div>
                      </div>
                  </div>
              </aside>
          </div>

        );
    }

};

export default Resume;
