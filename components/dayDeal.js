import Link from "next/link";
import Countdown from "react-countdown";
import { items } from "../data/items";

function DealOfTheDay() {
  return (
    <div className="py-[50px] lg:py-[100px] bg-gray-100">
      <div className="px-4 md:px-0 container mx-auto">
        <div>
          {items.map(x => {
            if (x.reate.sale) {
              return (
                <div className="bg-gray-50 p-4 lg:flex max-w-4xl mx-auto">
                  <div className="lg:w-[50%] lg:p-10">
                    <p className="text-sm text-red-400">Limited Quantities</p>
                    <h2 className="text-2xl font-bold text-gray-700">
                      Deal of the Day
                    </h2>
                    <div className="py-5">
                      <h3 className="text-lg font-bold text-gray-700">
                        {x.name}
                      </h3>
                      <div>
                        <span className="text-lg text-green-600 font-bold mr-3">
                          {x.price}
                        </span>
                        <span className="text-red-400 line-through">
                          {x.salePrice}
                        </span>
                      </div>
                      <p className="mb-10 text-sm font-bold text-gray-500">
                        Ends in <Countdown date={Date.now() + 1000000000} />
                      </p>
                      <Link href="/shop">
                        <a className="px-4 py-2 border border-gray-300 text-sm font-bold hover:text-gray-100 hover:bg-gray-900 transition-all duration-300">
                          Shop Now
                        </a>
                      </Link>
                    </div>
                  </div>
                  <img
                    src={x.img}
                    alt="item"
                    className="mt-5 lg:mt-0 lg:w-[50%] w-full object-cover h-[450px]"
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default DealOfTheDay;
