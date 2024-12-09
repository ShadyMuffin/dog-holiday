// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-3">
      <div className=" font-mono font-semibold text-xl m-auto flex flex-row gap-3 items-center justify-evenly p-4 text-center w-52 md:w-52 lg:w-auto">
        <Link to="/" className="col-span-1">
          <img
            className="xs:w-full lg:w-3/4 flex-shrink-0"
            src="./src/img/logo1.png"
            alt=""
          />
        </Link>
      </div>
      <div className="mt-5 md:pl-64 lg:pl-64 pl-auto text-center mx-auto gap-20 col-span-2 sm:place-content-left items-center text-3xl font-mono font-bold grid md:grid-cols-2">
        <Link
          to="/"
          className="rounded-lg ease-in-out duration-300 hover:bg-gray-600 hover:text-yellow-300 p-4"
        >
          Home
        </Link>

        <Link
          to="/contact"
          className="rounded-lg ease-in-out duration-300 hover:bg-gray-600 hover:text-yellow-300 p-4"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
