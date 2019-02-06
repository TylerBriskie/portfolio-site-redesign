import React, { Component} from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody } from 'react-accessible-accordion';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Music.scss';
import photo_01 from "../../assets/music_01.jpg";
import photo_02 from "../../assets/music_02.jpg";
import photo_03 from "../../assets/music_03.jpg";


class Music extends Component {
    componentDidMount(){
        console.log('music props: ', this.props);
    }
    render(){
        return (
            <div id="music-page-container">
              <Accordion>
                <AccordionItem
                      className="music-section gin-doctors"
                      expanded={true}>
                  <AccordionItemTitle>
                    Gin Doctors
                  </AccordionItemTitle>
                  <AccordionItemBody>
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
                  </AccordionItemBody>

                </AccordionItem>
                <AccordionItem className="music-section the-golden-robe">
                  <AccordionItemTitle>The Golden Robe</AccordionItemTitle>
                  <AccordionItemBody>
                    <p>In 2018 I began writing some electronic music that would eventually become a project known as The Golden Robe, a retrowave / outrun style throwback to the sights and sounds of my childhood</p>
                    <iframe
                      width="100%"
                      height="300"
                      scrolling="no"
                      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/561773829&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">

                    </iframe>

                  </AccordionItemBody>
                </AccordionItem>
                <AccordionItem className="music-section personal">
                  <AccordionItemTitle>Compositions</AccordionItemTitle>
                </AccordionItem>
                <AccordionItem className="music-section pxlman">
                  <AccordionItemTitle>PXLMAN</AccordionItemTitle>
                  <AccordionItemBody>

                    I spent a year or so as the live drummer for PXLMAN, the brainchild of my good friend Randy Washington.  Featuring a sound somewhere between electro-soul and electronic funk, and an incredible live show featuring lights, costumes, and improvisational elements.
                    A rotating cast of musicians included a DJ, several percussionists, horns, guitar and bass ensured each live performance was truly unique.
                  </AccordionItemBody>
                </AccordionItem>
                <AccordionItem className="music-section young-cities">
                  <AccordionItemTitle>Young Cities</AccordionItemTitle>
                  <AccordionItemBody>

                  </AccordionItemBody>
                </AccordionItem>
                <AccordionItem className="music-section me-llamo-rosa">
                  <AccordionItemTitle>Me Llamo Rosa</AccordionItemTitle>
                  <AccordionItemBody>

                  </AccordionItemBody>
                </AccordionItem>
              </Accordion>
            </div>
        );
    }

};

export default Music;
