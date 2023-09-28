import Car from "./Car";
import cars from "../data.json";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CarListStyle.css'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#741906"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#741906"}}
      onClick={onClick}
    />
  );
}


export default function CaarList({ addToCart, removeItem, onItemQuantityChange, updateCarQuantity, carQuantities }){
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          nextArrow: null,
          prevArrow: null,
        }
      },
    ]
  };
  
  return (
    <div className="cars">
      <div className='cars-title'>
        <h1 className='cars-big-title'> CARS </h1>
        <p className='cars-small-title'> Cars </p>
      </div>
      <div className="car-list">
        <Slider {...settings}>
          {cars.cars.map((car) => (
            <Car key={car.id} car={car} addToCart={addToCart} removeItem={removeItem} onItemQuantityChange={onItemQuantityChange} updateCarQuantity={updateCarQuantity} carQuantities={carQuantities}/>
          ))}
        </Slider>
      </div>
    </div>
  );
}
