import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class SliderPictures extends Component {
  render(){
    return (
      <Carousel autoPlay >
        <div>
          <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
          <p className="legend">Extérieure de Terrain</p>
        </div>
        <div>
          <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
          <p className="legend">Terrain</p>
        </div>
        <div>
          <img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
          <p className="legend">Gazon</p>
        </div>
        <div>
          <img src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" />
          <p className="legend">Parking</p>
        </div>
      </Carousel>
    );
  }
}


export default SliderPictures;