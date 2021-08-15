function Item({ title, price, image }) {
  return (
    <div className="border border-gray-100 w-[300px] group">
      <div className="h-[300px] overflow-hidden">
        <div className="relative">
          <img
            src={image}
            alt="image"
            className="w-full object-cover h-[300px] transition-all group-hover:scale-105 duration-300"
          />
          <div className="absolute top-3 left-3 text-white p-2 bg-gray-900 rounded-full transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer hover:scale-110 hover:bg-gray-100 hover:text-gray-900">
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
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <div className="absolute text-gray-50 text-sm p-2 bottom-3 left-3 flex items-center bg-gray-900 rounded-full transform translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer hover:scale-110 hover:bg-gray-100 hover:text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to Cart
          </div>
        </div>
      </div>
      <div className="relative z-50 text-gray-900 mt-5 p-4">
        <div className="text-lg">{title}</div>
        <div className="text-gray-700 font-bold text-sm">{price}</div>
      </div>
    </div>
  );
}

export default Item;
