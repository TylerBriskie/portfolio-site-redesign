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
                          width="50vw"
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
            </div>
        );
    }

};

export default Music;
