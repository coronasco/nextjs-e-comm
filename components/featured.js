import { items } from "../data/items";
import Item from "./item";

function Featured() {
  return (
    <div className="my-[50px] lg:my-[100px] px-4 md:px-0 container mx-auto">
      <div className="flex justify-center mb-10 border-b pb-5">
        <button className="cat-btn">Featured</button>
        <button className="cat-btn">On Sale</button>
        <button className="cat-btn">Top Rated</button>
      </div>
      <div className="whitespace-nowrap overflow-x-scroll scrollbar-hide">
        <div className="flex space-x-5 lg:space-x-10 w-max">
          {items.map(x => {
            return (
              <Item key={x.key} title={x.name} price={x.price} image={x.img} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Featured;
