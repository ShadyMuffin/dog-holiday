// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import SignUpButton from "./SignUpButton";

function Navbar() {
  return (
    <div className="p-10 gap-3 sm:grid-cols-1 grid md:grid-cols-1 lg:grid-cols-3">
      <div className=" font-mono font-semibold text-xl m-auto flex flex-row gap-3 items-center justify-evenly p-4 text-center w-52 md:w-52 lg:w-auto">
        <Link to="/" className="col-span-1">
          <img
            className="xs:w-full lg:w-2/4 flex-shrink-0"
            src="./src/img/logo1.png"
            alt=""
          />
        </Link>
      </div>
      <div className=" gap-3 pl-auto text-center mx-auto items-center font-mono font-bold grid md:grid-cols-2 uppercase px-auto">
        <Link
          to="/"
          className=" md:text-2xl text-xl lg:text-3xl px-5 mx-auto rounded-lg ease-in-out duration-300 hover:bg-gray-600 hover:text-yellow-300 p-4"
        >
          Home
        </Link>

        <Link
          to="/contact"
          className=" md:text-2xl text-xl lg:text-3xl px-5 rounded-lg ease-in-out mx-auto duration-300 hover:bg-gray-600 hover:text-yellow-300 p-4"
        >
          Contact
        </Link>
      </div>
      <div className="flex gap-5 place-self-center">
        <LoginButton />
        <SignUpButton />
      </div>
    </div>
  );
}

export default Navbar;
