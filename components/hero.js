import React from "react";
import Link from "next/link";

function Hero() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className="bg-gray-50 flex flex-col h-screen justify-center">
      <div className="px-4 md:px-0 container mx-auto">
        <h2 className="text-4xl">Collection {year}</h2>
        <h1 className="text-6xl font-bold">New Arrivals</h1>
        <Link href="/shop">
          <a className="border border-gray-400 px-5 py-3 block w-40 text-center mt-10 transition-all hover:bg-gray-900 hover:text-gray-100">
            Shop Now
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
