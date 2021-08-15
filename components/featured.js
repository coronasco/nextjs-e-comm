import { useState, useEffect, useCallback } from "react";
import { items } from "../data/items";
import Item from "./item";
import { useEmblaCarousel } from "embla-carousel/react";
import { PrevButton, NextButton } from "./emblaCarouselButtons";

function Featured({ slides }) {
  const [viewportRef, embla] = useEmblaCarousel({
    slidesToScroll: 2,
    skipSnaps: false
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className="mt-[50px] lg:mt-[100px] px-4 md:px-0 container mx-auto">
      <div className="flex justify-center mb-10 border-b pb-5">
        <button className="cat-btn">Featured</button>
        <button className="cat-btn">On Sale</button>
        <button className="cat-btn">Top Rated</button>
      </div>
      <div className="embla">
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {items.map(x => {
              return (
                <Item
                  key={x.key}
                  title={x.name}
                  price={x.price}
                  image={x.img}
                />
              );
            })}
          </div>
        </div>
        <div className="flex justify-between mt-3 mb-10">
          <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
          <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        </div>
      </div>
    </div>
  );
}

export default Featured;
