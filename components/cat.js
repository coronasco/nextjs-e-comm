import React from "react";

function Cat({ title, sub, img }) {
  return (
    <div className="border p-5 relative w-full h-[400px] md:h-[250px] lg:h-[300px] xl:h-[450px] overflow-hidden group">
      <div className="relative z-10">
        <div className="text-white text-lg uppercase tracking-wider">
          {title}
        </div>
        <div className="text-gray-400">{sub}</div>
      </div>
      <img src={img} alt="image" className="absolute top-0 left-0 z-0" />
    </div>
  );
}

export default Cat;
