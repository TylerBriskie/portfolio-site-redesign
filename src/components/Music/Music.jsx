import React, { Component} from 'react';
import './Music.scss';

class Music extends Component {
    componentDidMount(){
        console.log('music props: ', this.props);
    }
    render(){
        return (
            <h1>Music page, coming soon...</h1>
        );
    }

};

export default Music;
