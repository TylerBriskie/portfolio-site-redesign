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
                      <p>Vertafore Inc. makes software for professionals in the insurance business.  The larger company in what is essentially a duopoly, Vertafore has had an easy time the last 40 years, growing mostly through acquisition and buyouts.</p>
                      <p>As such, Vertafore's priority has never been on innovation, and I felt myself lucky to be made a part of Project Titan a few months after being hired.  Titan was Vertafore's attempt at moving to a modern, microservice based architecture, and being part of it was an awesome experience.  I got to design and implement microservices from the ground up in Java and Spring, as well as be a part of the team that created the UI from scratch with React and Redux.</p>

                      <p>Eventually, after losing our second director in a year, my team was moved off the Titan project onto a legacy product that desperately needed help.  We spent the next several months updating a massive enterprise app, including...</p>
                      <ul>
                          <li>Migrating from WebLogic to Apache Tomcat</li>
                          <li>Migrating from Oracle DB to PostgreSQL</li>
                          <li>Migrating from SVN to git</li>
                          <li>Began moving away from older javascript frameworks (ExtJS, DeftJS, AngularJS 1.6) to a comprehensive Angular solution</li>
                      </ul>
                      <p>I learned a ton in my 2 years at Vertafore, and I'm excited for new challenges at my next position.</p>

                  </section>
                  <section className="experience">
                      <header>
                          <h1>Galvanize Web Development Bootcamp <span>2016-2017</span></h1>
                      </header>
                      <p>My decision to attend Galvanize's 24 week bootcamp will go down as one of the most important, life changing decisions I ever made.
                          The 11 years since graduating college with a music major were a blur.  I knew I couldn't work as a musician and
                          bartender the rest of my life, but computers had always just been a hobby, never something I thought I could learn well enough to do for a living.  </p>
                      <p>On my mother and girlfriends encouragement, I decided to take a plunge and learn how to become a web developer.  I loved it right away.  My classmates and instructors were awesome, and on top of learning a new life-changing job skill, I forged friendships that will last the rest of my life.  24 weeks and 1000 hours of coursework later, I came out a stronger, more confident person who couldn't wait to dive into a new challenge.</p>

                      <p>I will always be thankful for my time at Galvanize, and for making the decision to attend.</p>


                  </section>
                  <section className="experience">
                      <header>
                          <h1>Illegal Pete's <span>2013-2016</span></h1>
                      </header>
                      <p>Illegal Pete's is a Colorado institution.  I'm not sure I've ever met a fellow native who can't come up with at least one anecdote taking place at one of their 9 front range locations.</p>
                      <p>Pete is truly a great guy.  He runs an awesome company, helps the community, is great to his staff and customers.  I can't think of a single bad thing to say about my time here, except that it was the hardest job I've ever had.  My brothers and sisters from the burrito line can attest that working a 10 hour Illegal Pete's shift is not easy.</p>
                      <p>Dealing with constant, demanding customers, while keeping cool under pressure in a 100 degree kitchen is not for the faint of heart.  More than anything working here taught me to be humble, and the importance of trust when you're part of a team.</p>

                  </section>
                  <section className="experience">
                      <header>
                          <h1>Fat Jacks <span>2012 - 2013</span></h1>
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
                          <h1>Fat Jacks <span>2012 - 2013</span></h1>
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

                  </section><section className="experience">
                  <header>
                      <h1>Fat Jacks <span>2012 - 2013</span></h1>
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
