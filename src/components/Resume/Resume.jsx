import React, { Component} from 'react';
import SkillMeter from './SkillMeter/SkillMeter';
import './Resume.scss';

class Resume extends Component {
    render(){
        return (
          <div className="resume-page-container">
              <article id="resume-work-experience">
                  <section className="experience">
                      <header>
                          <h1>Vertafore <span>2017 - Present</span></h1>
                      </header>
                      <p>Here's stuff about vertafore</p>
                      <p>Here's stuff about vertafore</p>

                      <p>Here's stuff about vertafore</p>
                      <p>Here's stuff about vertafore</p>
                      <p>Here's stuff about vertafore</p>
                      <p>Here's stuff about vertafore</p>
                      <p>Here's stuff about vertafore</p>
                      <p>Here's stuff about vertafore</p>
                      <p>Here's stuff about vertafore</p>
                      <p>Here's stuff about vertafore</p>

                  </section>
                  <section className="experience">
                      <header>
                          <h1>Galvanize Web Development Immersive Bootcamp <span>2016-2017</span></h1>
                      </header>
                      <p>Here's stuff about g school</p>
                      <p>Here's stuff about other stuff</p>
                      <p>Here's stuff about hey i need it</p>
                      <p>Here's stuff about bands i was in</p>

                  </section>
                  <section className="experience">
                      <header>
                          <h1>Illegal Pete's <span>2013-2016</span></h1>
                      </header>
                      <p>Here's stuff about g school</p>
                      <p>Here's stuff about other stuff</p>
                      <p>Here's stuff about hey i need it</p>
                      <p>Here's stuff about bands i was in</p>

                  </section>
              </article>
              <aside id="skills-and-proficiencies">
                  <h1>Skills and Proficiencies</h1>
                  <div id="skill-table">
                      <div className="skill-single">
                          <h3>Java</h3>
                          <SkillMeter color="blue" percent={80}></SkillMeter>
                      </div>
                  </div>
              </aside>
          </div>

        );
    }

};

export default Resume;
