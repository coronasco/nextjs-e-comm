import Link from "next/link";
import { useState } from "react";

function Header() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="bg-white fixed w-full z-50 border-b border-gray-200 ">
      <div className="hidden md:flex bg-gray-900 text-gray-100 py-2 text-sm">
        <div className="px-4 md:px-0 container mx-auto flex justify-between">
          <p>
            Free shipping for standard order over{" "}
            <span className="font-bold">$100.00</span>
          </p>
          <div className="flex gap-5">
            <Link href="/help">Help & FAQs</Link>
            <Link href="/account">My Account</Link>
            <select defaultValue="language" className="bg-gray-900">
              <option name="english">En</option>
              <option name="romana">Ro</option>
              <option name="italiano">It</option>
            </select>
            <select defaultValue="currency" className="bg-gray-900">
              <option name="euro">€</option>
              <option name="dollar">$</option>
            </select>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-0 container mx-auto">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
            <span className="font-bold ml-2">FlyShop</span>
          </div>
          <div className="hidden md:flex gap-5 text-gray-600">
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/shop">
              <a>Shop</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </div>
          <div className="flex gap-3 text-gray-500">
            <div className="hover:text-gray-900 transition-all cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div className="hover:text-gray-900 transition-all cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <div className="hover:text-gray-900 transition-all cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
          </div>
          <div
            className="h-[16px] w-5 flex flex-col justify-between md:hidden"
            onClick={handleClick}
          >
            <div
              className={`${
                active
                  ? "rotate-45 translate-y-[7px] duration-500 transition-all"
                  : ""
              } m-btn-line`}
            ></div>
            <div
              className={`${
                active
                  ? "transformt translate-x-[-10px] duration-500 opacity-0 transition-all"
                  : ""
              } m-btn-line`}
            ></div>
            <div
              className={`${
                active
                  ? "-rotate-45 translate-y-[-7px] duration-500 transition-all"
                  : ""
              } m-btn-line`}
            ></div>
          </div>
        </div>
      </div>
      <div className={`${active ? "bg-gray-200 py-10 md:hidden" : "hidden"}`}>
        <div className="px-4 md:px-0 container mx-auto">
          <div className="flex flex-col gap-4">
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/shop">
              <a>Shop</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </div>
          <div className="mt-10">
            <div className="flex flex-col gap-3">
              <Link href="/help">Help & FAQs</Link>
              <Link href="/account">My Account</Link>
              <select defaultValue="language" className="bg-gray-200">
                <option name="english">En</option>
                <option name="romana">Ro</option>
                <option name="italiano">It</option>
              </select>
              <select defaultValue="currency" className="bg-gray-200">
                <option name="euro">€</option>
                <option name="dollar">$</option>
              </select>
            </div>
            <p className="mt-5">
              Free shipping for standard order over{" "}
              <span className="font-bold">$100.00</span>
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
