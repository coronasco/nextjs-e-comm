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
    <div className="mt-10">
      <div>
        <button>Featured</button>
        <button>On Sale</button>
        <button>Top Rated</button>
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
        <button class="embla__prev" onClick={scrollPrev}>
          Prev
        </button>
        <button class="embla__next" onClick={scrollNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Featured;
