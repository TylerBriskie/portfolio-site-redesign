import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            activePage: "home",
        }

        console.log("header props: ", this.props);
    }


    render(){
        return (
            <header className="site-header">
                <div className="nav-button-container">
                    <Link className="nav-button" to="/projects/">Software</Link>
                    <Link className="nav-button" to="/music/">Music</Link>
                    <Link className="nav-button" to="/resume/">Graphic Design</Link>
                    <Link className="nav-button" to="/arcade/">Arcade</Link>
                </div>
            </header>
        );
    }

};

export default Header;
