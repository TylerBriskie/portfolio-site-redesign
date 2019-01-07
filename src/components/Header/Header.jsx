import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            activePage: "home",
        }

    }

    handleClick(page){
        this.state.activePage = page;
        console.log('setting state: ', this.state);
    }

    render(){
        const currentPage = this.state.activePage;
        return (
            <header className={`site-header nav-${currentPage}`}>
                <div className="nav-button-container">
                    <Link className={`nav-button${currentPage === 'projects' ? ' active' : ''}`} to="/projects/" onClick={() => this.handleClick('projects')}>Web Design</Link>
                    <Link className={`nav-button${currentPage === 'music' ? ' active' : ''}`} to="/music/" onClick={() => this.handleClick('music')}>Music</Link>
                    <Link className={`nav-button${currentPage === 'resume' ? ' active' : ''}`} to="/resume/" onClick={() => this.handleClick('resume')}>Resume</Link>
                    <Link className={`nav-button${currentPage === 'arcade' ? ' active' : ''}`} to="/arcade/" onClick={() => this.handleClick('arcade')}>Arcade</Link>
                </div>
            </header>
        );
    }

};

export default Header;
