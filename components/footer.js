import Link from "next/link";

function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="mt-10 lg:mt-20 mb-5 lg:mb-10">
      <div className="px-4 md:px-0 container mx-auto">
        <div>
          <div className="flex flex-col md:flex-row md:space-x-10 divide-x xl:justify-between">
            <div className="md:w-[30%]">
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
              <p className="text-sm text-gray-500 my-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. A ex
                est ipsam commodi animi sunt? Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Est, doloremque?
              </p>
            </div>
            <div className="mt-10 md:mt-0 pl-5 md:pl-10">
              <h3 className="font-bold text-sm lg:text-lg mb-3">
                Useful Links
              </h3>
              <div className="flex flex-col">
                <Link href="/">
                  <a className="footer-link">About FlyShop</a>
                </Link>
                <Link href="/">
                  <a className="footer-link">How to shop on FlyShop</a>
                </Link>
                <Link href="/">
                  <a className="footer-link">FAQ</a>
                </Link>
                <Link href="/">
                  <a className="footer-link">Contact Us</a>
                </Link>
                <Link href="/">
                  <a className="footer-link">Log In</a>
                </Link>
              </div>
            </div>
            <div className="mt-10 md:mt-0 pl-5 md:pl-10">
              <h3 className="font-bold text-sm lg:text-lg mb-3">
                Customer Service
              </h3>
              <div className="flex flex-col">
                <Link href="/">
                  <a className="footer-link">Payment Methods</a>
                </Link>
                <Link href="/">
                  <a className="footer-link">Money back Guarantee!</a>
                </Link>
                <Link href="/">
                  <a className="footer-link">Returns</a>
                </Link>
                <Link href="/">
                  <a className="footer-link">Shipping</a>
                </Link>
                <Link href="/">
                  <a className="footer-link">Terms & Conditions</a>
                </Link>
                <Link href="/">
                  <a className="footer-link">Privacy Policy</a>
                </Link>
              </div>
            </div>
            <div className="mt-10 md:mt-0 pl-5 md:pl-10">
              <h3 className="font-bold text-sm lg:text-lg mb-3">My Account</h3>
              <div className="flex flex-col">
                <Link href="/">
                  <a className="footer-link">Sign In</a>
                </Link>
                <Link href="/">
                  <a className="footer-link">View Cart</a>
                </Link>
                <Link href="/">
                  <a className="footer-link">My Wishlist</a>
                </Link>
                <Link href="/">
                  <a className="footer-link">Track My Order</a>
                </Link>
                <Link href="/">
                  <a className="footer-link">Help</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 pt-5 border-t">
          <p className="text-sm text-gray-500">
            Copyright © {year} FlyShop. All Rights Reserved. Developed by{" "}
            <span className="text-gray-700">Daniel Zaharia</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
