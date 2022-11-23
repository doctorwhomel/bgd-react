import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  CarouselControlProps,
} from "reactstrap";
import FeatImg1 from "../app/assets/img/Sirens-Shanty-Screenshot-wide.jpg";
import FeatImg2 from "../app/assets/img/Sirens-Shanty-Screenshot-wide.jpg";
import FeatImg3 from "../app/assets/img/Sirens-Shanty-Screenshot-wide.jpg";

const items = [
  {
    src: FeatImg1,
    altText: "Slide 1",
    key: 1,
  },
  {
    src: FeatImg2,
    altText: "Slide 2",
    key: 2,
  },
  {
    src: FeatImg3,
    altText: "Slide 3",
    key: 3,
  },
];

function Example(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.key}
        style={{ width: "100vw" }}
      >
        <img className="d-block w-100" src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Example;
