function Info() {
  return (
    <div className="bg-gray-900 text-gray-100 py-[50px] lg:py-[100px]">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col justify-between md:flex-row space-y-10 md:space-y-0">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-11 w-11"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
            <div className="ml-2">
              <p>Free Shipping</p>
              <p className="font-thin text-sm">orders $100 or more</p>
            </div>
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-11 w-11"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <div className="ml-2">
              <p>Free Returns</p>
              <p className="font-thin text-sm">within 30 days</p>
            </div>
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-11 w-11"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="ml-2">
              <p>Get 20% Off 1 Item</p>
              <p className="font-thin text-sm">when you sign up</p>
            </div>
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-11 w-11"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <div className="ml-2">
              <p>We Support You</p>
              <p className="font-thin text-sm">24/7 amazing services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
