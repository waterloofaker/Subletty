import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';


import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react';

import rOne from './pics/RoomOne.jpg'
import rTwo from './pics/RoomTwo.jpg'
import rThree from './pics/RoomThree.jpg'

var slideShow = true;

function changeSlide() {
    slideShow = false;
    console.log("ran");
}

function AutomaticSlide() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };

    return (
        <div class="c-wrapper">
            <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        src={rOne}
                        alt="Slide One"
                        width="100%"
                        height="60%"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={rTwo}
                        alt="Second slide"
                        width="60%"
                        height="60%"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={rThree}
                        alt="Third slide"
                        width="60%"
                        height="60%%"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default AutomaticSlide