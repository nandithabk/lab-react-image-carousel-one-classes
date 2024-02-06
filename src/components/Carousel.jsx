import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  prevSlide = () => {
    const lastIndex = images.length - 1;
    const { currentIndex } = this.state;
    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentIndex - 1;

    this.setState({
      currentIndex: index,
    });
  };

  nextSlide = () => {
    const lastIndex = images.length - 1;
    const { currentIndex } = this.state;
    const shouldResetIndex = currentIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentIndex + 1;

    this.setState({
      currentIndex: index,
    });
  };

  render() {
    const { title, subtitle, img } = images[this.state.currentIndex];
    return (
      <div className="carousel">
        <div className="align-arrowLeft">
          <ArrowBackIosIcon onClick={this.prevSlide} className="arrow-left" />
        </div>
        <div className="image-container">
          <img src={img} alt={title} className="image" />
          <div className="text-overlay">
            <div className="title">
              <h2>{title}</h2>
            </div>
            <div className="subtitle">
              <p>{subtitle}</p>
            </div>
          </div>
        </div>
        <div className="align-arrowRight">
          <ArrowForwardIosIcon
            onClick={this.nextSlide}
            className="arrow-right"
          />
        </div>
      </div>
    );
  }
}

export default Carousel;