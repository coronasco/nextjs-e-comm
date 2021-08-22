import { Tabs } from "./tabs";
import { items } from "../data/items";
import Item from "./item";

function Featured() {
  const featured = items.map(x => {
    if (x.reate.featured) {
      return <Item key={x.key} title={x.name} price={x.price} image={x.img} />;
    }
  });

  const sale = items.map(x => {
    if (x.reate.sale) {
      return <Item key={x.key} title={x.name} price={x.price} image={x.img} />;
    }
  });

  const topRated = items.map(x => {
    if (x.reate.rated) {
      return <Item key={x.key} title={x.name} price={x.price} image={x.img} />;
    }
  });
  return (
    <div className="my-[50px] lg:my-[100px] px-4 md:px-0 container mx-auto">
      <Tabs>
        <div label="Featured">
          <div className="flex space-x-5 lg:space-x-10 w-max">{featured}</div>
        </div>
        <div label="On Sale">
          <div className="flex space-x-5 lg:space-x-10 w-max">{sale}</div>
        </div>
        <div label="Top Rated">
          <div className="flex space-x-5 lg:space-x-10 w-max">{topRated}</div>
        </div>
      </Tabs>
    </div>
  );
}

export default Featured;
