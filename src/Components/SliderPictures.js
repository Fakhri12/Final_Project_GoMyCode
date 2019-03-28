import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class SliderPictures extends Component {
  render(){
    return (
      <Carousel autoPlay >
        <div>
          <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" alt="" />
          <p className="legend">Extérieure de Terrain</p>
        </div>
        <div>
          <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" alt=""/>
          <p className="legend">Terrain</p>
        </div>
        <div>
          <img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" alt=""/>
          <p className="legend">Gazon</p>
        </div>
        <div>
          <img src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" alt=""/>
          <p className="legend">Parking</p>
        </div>
      </Carousel>
    );
  }
}


export default SliderPictures;