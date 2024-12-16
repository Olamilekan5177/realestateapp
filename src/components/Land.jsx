import React from "react";
import RealEstateRow from "./RealEstateRow.jsx";

const Land = () => {
  return (
    <div>
      {/* Main Content Section */}
      <section className="flex items-center justify-center">
        <div className="banner-content text-center absolute top-0 md:left-0 lg:left-0 flex flex-col mt-96 gap-2 text-white md:ml-24 lg:ml-24 items-end">
          <h1 class="font-bold md:text-5xl lg:text-7xl text-5xl">
            Buy property in <br />
            <span class="lg:pr-72  md:pr-48 md:block lg:block hidden leading-relaxed">
              {" "}
              the UK{" "}
            </span>
            <span class="md:hidden lg:hidden pr-48 leading-relaxed">
              {" "}
              the UK{" "}
            </span>
          </h1>
        </div>
      </section>
      <section>
        <div class="mt-28 h-32 text-center grid md:grid-cols-2">
          <div class="md:h-32 h-24">
            <h1 class="w-full flex items-center justify-center h-full font-bold text-xl text-white bg-[hsl(288,4%,20%)] hover:text-[hsl(288,4%,20%)]">
              sales@barneyestates.co.uk
            </h1>
          </div>
          <div class="md:h-32 h-24">
            <h1 class="w-full h-full flex items-center justify-center font-bold text-xl text-white bg-[hsl(280,4%,29%)] hover:text-[hsl(288,4%,20%)]">
              0208 432 7330
            </h1>
          </div>
        </div>
      </section>
      {/* Additional Section - About or Services */}
      <section className="home-about mt-24 px-4">
        <div className="text-center">
          <h2 className="text-4xl font-semibold">Our Services</h2>
          <p className="mt-4 text-lg">
            We provide a wide range of real estate services, including property
            listings, live auctions, and property management.
          </p>
        </div>
      </section>
      <div className="all-listings">
        <h2 className="text-center text-4xl font-semibold mb-8 pt-8">
          Featured Listings
        </h2>
        <RealEstateRow />
      </div>
      {/* Testimonials Section */}
      <section className="home-testimonials mt-10 px-4 bg-gray-50 py-8">
        <div className="text-center">
          <h2 className="text-4xl font-semibold">What Our Clients Say</h2>
          <p className="mt-4 text-lg">
            Hear from our satisfied clients about their experience.
          </p>
        </div>

        <div className="testimonials mt-6 flex justify-center">
          <div className="testimonial-card bg-white p-6 mx-4 shadow-lg rounded-lg">
            <p className="text-xl italic">
              "Barney Estates helped us sell our home quickly and at a great
              price. Highly recommend!"
            </p>
            <p className="mt-4 font-semibold">John Doe</p>
            <p>Homeowner</p>
          </div>
          <div className="testimonial-card bg-white p-6 mx-4 shadow-lg rounded-lg">
            <p className="text-xl italic">
              "I won my first auction with Barney Estates. Smooth and easy
              process!"
            </p>
            <p className="mt-4 font-semibold">Jane Smith</p>
            <p>Investor</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Land;
