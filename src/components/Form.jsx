import React from "react";
import Flag from "../assets/image.png";

const Form = () => {
  return (
    <section>
      {/* Yellow Bar */}
      <div className="h-8 bg-yellow-600 flex items-center overflow-hidden p-2 text-white lg:h-10">
        <div className="w-full scroll-text">
          <img
            className="w-8 mr-2 inline filter invert brightness-0"
            src={Flag}
            alt="Flag"
          />
          Britain's only weekly property
          <img
            className="w-8 ml-2 inline filter invert brightness-0"
            src={Flag}
            alt="Flag"
          />
        </div>
      </div>

      {/* Auction Info Bar */}
      <div
        className="w-full h-10 flex items-center text-white sm:justify-between justify-center px-16 z-10"
        style={{ backgroundColor: "hsl(288,4%,20%)" }}
      >
        <p className="hidden sm:block">
          Our live auction starts in a few weeks{" "}
          <span className="text-yellow-600 inline pl-1">(learn more)</span>
        </p>
        <p className="font-bold">
          Call on{" "}
          <span className="text-yellow-600 inline pl-1">0208 432 7330</span>
        </p>
      </div>

      {/* Auction Timetable */}
      <div className="relative">
        <div
          className="bg-yellow-600 flex justify-center rounded-b-lg py-1 absolute mr-1 w-40 sm:w-44"
          style={{ right: "0", top: "0" }}
        >
          <p className="text-white font-bold w-15">Auction Timetable</p>
        </div>
      </div>

      {/* Form Section */}
      <form className="max-w-lg mx-auto p-6 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.2),0_2px_10px_rgba(0,0,0,0.2)] shadow-gray-950 rounded-md my-10 z-50">
        {/* Section 1: First Name and Last Name */}
        <section className="section1 mb-4 items-center">
          <div className="mb-4">
            <label htmlFor="fname" className="block text-gray-700 mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="fname"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label htmlFor="Lname" className="block text-gray-700 mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="Lname"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
              placeholder="Enter your last name"
            />
          </div>
        </section>

        {/* Section 2: Email */}
        <section className="section2 mb-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
              placeholder="Enter your email"
            />
          </div>
        </section>

        {/* Section 3: Password */}
        <section className="section3 mb-4">
          <div>
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password *
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
              placeholder="Enter your password"
            />
          </div>
        </section>

        {/* Section 4: Confirm Password */}
        <section className="section4 mb-4">
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 mb-2"
            >
              Confirm Password *
            </label>
            <input
              type="password"
              id="confirmPassword"
              className=" w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
              placeholder="Confirm your password"
            />
          </div>
        </section>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded-md shadow-md"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;