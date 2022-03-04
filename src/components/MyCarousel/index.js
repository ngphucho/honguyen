import React from "react";
import Carousel from "react-material-ui-carousel";
import CarouselItem from "../CarouselItem";

export default function MyCarousel({ items, index }) {
  return (
    <Carousel
      autoPlay={false}
      indicators={false}
      animation="slide"
    >
      {items.map((item, i) => (
        <CarouselItem key={i} item={item} index={index} />
      ))}
    </Carousel>
  );
}
