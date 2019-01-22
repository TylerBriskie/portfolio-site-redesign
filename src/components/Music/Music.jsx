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
                <div className="music-section gin-doctors">
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
                <div className="music-section the-golden-robe">
                  <h3>The Golden Robe</h3>
                  <p>In 2018 I began writing some electronic music that would eventually become a project known as The Golden Robe, a retrowave / outrun style throwback to the sights and sounds of my childhood</p>
                  <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/561773829&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                </div>
                <div className="music-section personal">
                  <h3>Compositions</h3>
                </div>
                <div className="music-section pxlman">
                  <h3>Pxlman</h3>
                </div>
                <div className="music-section young-cities">
                  <h3>Young Cities</h3>
                </div>
            </div>
        );
    }

};

export default Music;
