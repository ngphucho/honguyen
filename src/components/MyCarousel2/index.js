import React from "react";
import Carousel from "react-material-ui-carousel";
import CarouselItem2 from "../CarouselItem2";

export default function MyCarousel2({ items, index }) {
  return (
    <Carousel
      autoPlay={true}
      indicators={false}
      animation="fade"
      duration={1500}
      sx={{height: "300px", borderRadius: "20px"}}
    >
      {items.map((item, i) => (
        <CarouselItem2 key={i} item={item} index={index} />
      ))}
    </Carousel>
  );
}
