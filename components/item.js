function Item({ title, price, image }) {
  return (
    <div className="w-full sm:w-[200px] p-4 text-white embla__slide md:flex-2">
      <img
        src={image}
        alt="image"
        className="w-full h-full object-cover h-[300px]"
      />
      <div className="relative z-50 text-gray-900 mt-5">
        <div className="text-lg">{title}</div>
        <div className="text-gray-700 font-bold text-sm">{price}</div>
      </div>
    </div>
  );
}

export default Item;
