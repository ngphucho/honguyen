import React from "react";
import Carousel from "react-material-ui-carousel";
import CarouselItem from "../CarouselItem";

export default function MyCarousel({items}) {
  return (
    <Carousel sx={{m:1}} autoPlay={true} animation="slide">
      {items.map((item, i) => (
        <CarouselItem key={i} item={item}/>
      ))}
    </Carousel>
  );
}
