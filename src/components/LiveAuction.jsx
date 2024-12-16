import React from "react";
import Flag from "../assets/image.png";
const LiveAuction = () => {
  return (
   <div>
         {/* Main Content Section */}
         <section className="home-banner flex items-center justify-center">
           <div className="banner-content justify-center text-center absolute top-0 md:right-0 flex flex-col mt-60 gap-2 text-white md:mr-24 md:items-end items-center">
             <div class="ml-2 w-24 md:w-32 h-14 md:h-20 bg-white relative">
               <img
                 className="h-full w-full object-cover"
                 style={{
                   filter:
                     "invert(76%) sepia(86%) saturate(395%) hue-rotate(3deg) brightness(98%) contrast(93%)",
                 }}
                 src={Flag}
                 alt="Flag"
               />
             </div>
             <div>
               <p class="text-2xl font-normal">
                 Britain's only weekly property auction
               </p>
             </div>
             <div className="z-0">
               <h1 class="font-medium text-4xl md:font-bold md:text-7xl leading-none">
                 1-Day until our <span className="md:hidden">next</span>
                 <span class="block mt-2">
                   <span className="hidden"> next </span>{" "}
                   <span class="text-yellow-600"> live auction</span>
                 </span>
               </h1>
             </div>
             <div class="mt-9 md:grid md:grid-cols-3">
               <button class="mr-6 border-solid py-3 px-8 bg-yellow-600 rounded-sm hover:bg-[hsl(288,4%,20%)]">
                 Register now
               </button>
               <button class="border-solid border-yellow-600 py-2.5 px-8 rounded-sm border-2  text-yellow-600 hover:bg-[hsl(288,4%,20%)] ">
                 Watch live
               </button>
               <div class=" mt-4 sm:mt-4 md:mt-auto">
                 <button class="md:ml-6 border-solid py-3 px-8 bg-white text-yellow-600 rounded-sm hover:bg-[hsl(288,4%,20%)] ">
                   Contact us
                 </button>
               </div>
             </div>
           </div>
         </section>
         <section>
           <div
             class="mt-28 h-32 text-center grid md:grid-cols-2"
             
           >
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
   
           <div className="services grid md:grid-cols-3 gap-10 mt-10">
             <div className="service-card text-center bg-gray-100 p-6 rounded-lg">
               <h3 className="text-2xl font-semibold">Live Auctions</h3>
               <p className="mt-4">
                 Join our live property auctions and bid on your next property!
               </p>
             </div>
             <div className="service-card text-center bg-gray-100 p-6 rounded-lg">
               <h3 className="text-2xl font-semibold">Commercial Properties</h3>
               <p className="mt-4">
                 Browse our commercial listings for office spaces and more.
               </p>
             </div>
             <div className="service-card text-center bg-gray-100 p-6 rounded-lg">
               <h3 className="text-2xl font-semibold">Residential Listings</h3>
               <p className="mt-4">
                 Explore residential homes and apartments available for sale.
               </p>
             </div>
           </div>
         </section>
   
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
export default LiveAuction;
