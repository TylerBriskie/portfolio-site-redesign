import React, { Component} from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Music.scss';
import photo_01 from "../../assets/music_01.jpg";
import photo_02 from "../../assets/music_02.jpg";
import photo_03 from "../../assets/music_03.jpg";
import photo_04 from "../../assets/music_04.jpg";


class Music extends Component {
    componentDidMount(){
        console.log('music props: ', this.props);
    }
    render(){
        return (
            <div id="music-page-container">
                <Carousel dynamicHeight={true}
                          showArrows={false}
                          showIndicators={false}
                          showStatus={false}
                          infiniteLoop={true}
                          width="40vw"
                          emulateTouch={true}
                          showThumbs={false}
                          autoPlay={true}
                          interval={5000}
                          transitionTime={500}
                          className="carousel-container">
                    <div className="carousel-image">
                        <img src={photo_01} />
                    </div>
                    <div className="carousel-image">
                        <img src={photo_02} />
                    </div>
                    <div className="carousel-image">
                        <img src={photo_03} />
                    </div>
                </Carousel>
                <iframe width="100%" height="450" scrolling="no" frameBorder="no" allow="autoplay"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/681715908&color=%2300aabb&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            </div>
        );
    }

};

export default Music;
