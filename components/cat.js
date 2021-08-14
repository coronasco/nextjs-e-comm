import React from "react";
import Link from "next/link";

function Cat({ title, sub, img }) {
  return (
    <div className="border p-3 lg:p-10 relative w-full h-[400px] md:h-[250px] lg:h-[300px] xl:h-[450px] 2xl:h-[600px] overflow-hidden group">
      <div className="relative z-10">
        <div className="text-white text-lg 2xl:text-3xl uppercase tracking-wider">
          {title}
        </div>
        <div className="text-gray-400">{sub}</div>
      </div>
      <img
        src={img}
        alt="image"
        className="absolute top-0 left-0 z-0 w-full h-[100%] group-hover:scale-110 transition-all object-cover object-top duration-300"
      />
      <Link href="/shop">
        <a className="absolute z-50 bottom-10 text-gray-900 px-4 py-2 bg-gray-100 translate-y-[40px] opacity-0 pointer-events-none group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300">
          Shop Now
        </a>
      </Link>
    </div>
  );
}

export default Cat;
