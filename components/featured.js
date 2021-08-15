import { useEffect, useCallback } from "react";
import { items } from "../data/items";
import Item from "./item";
import { useEmblaCarousel } from "embla-carousel/react";

function Featured(props) {
  const [emblaRef, embla] = useEmblaCarousel({
    slidesToScroll: 2,
    skipSnaps: false
  });

  const onSelect = useCallback(() => {
    if (!embla) return;
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  const scrollPrev = useCallback(() => {
    if (embla) embla.scrollPrev();
  }, [embla]);

  const scrollNext = useCallback(() => {
    if (embla) embla.scrollNext();
  }, [embla]);

  return (
    <div className="mt-[50px] lg:mt-[100px] px-4 md:px-0 container mx-auto">
      <div className="flex justify-center mb-10 border-b pb-5">
        <button className="cat-btn">Featured</button>
        <button className="cat-btn">On Sale</button>
        <button className="cat-btn">Top Rated</button>
      </div>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
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
          <button class="embla__prev" onClick={scrollPrev}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </button>
          <button class="embla__next" onClick={scrollNext}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
