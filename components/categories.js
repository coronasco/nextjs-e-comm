import { categories } from "../data/category";
import Cat from "./cat";

function Categories(props) {
  return (
    <div className="grid md:grid-cols-3">
      {categories.map(x => {
        return <Cat title={x.key} sub={x.subtitle} img={x.image} />;
      })}
    </div>
  );
}

export default Categories;
