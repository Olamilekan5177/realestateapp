import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimneyWindow,
  faMagnifyingGlass,
  faBars, // Import the faBars icon
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Flag from "../assets/image.png";

function DefaultNavbar() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false); // Track header visibility
  const [showContent, setShowContent] = useState(true); // Track visibility of Section 1
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const isFormPage = location.pathname.includes("Form"); // Adjust condition based on your routes

  // Scroll Event Listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Get current scroll position
      // if (isMenuOpen) return; // Skip scroll logic when menu is open
      if (scrollPosition > 40) {
        setIsHeaderVisible(true); // Show header when scroll is > 40
        setShowContent(false); // Hide Section 1
      } else {
        setIsHeaderVisible(false); // Hide header when scroll is 0
        setShowContent(true); // Show Section 1
      }
    };

    window.addEventListener("scroll", handleScroll); // Add scroll listener

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup listener on unmount
    };
  }, []);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isMenuOpen]);

  return (
    <section className="Main">
      {/* Header */}
      <header
        className={`py-8 h-36 transition-all duration-300 ${
          isHeaderVisible
            ? "fixed top-0 w-full z-50 bg-[hsl(288,4%,20%)] shadow-lg flex justify-center"
            : "absolute opacity-0"
        }`}
      >
        {/* Hamburger Menu Button */}
        <div className="grid grid-cols-2 gap-24 pl-6 md:place-self-auto md:gap-96 lg:hidden">
          <div className="flex flex-col items-center text-center text-white md:pr-1">
            <FontAwesomeIcon icon={faHouseChimneyWindow} className="h-7" />
            <p className="text-xl font-medium">BARNEY</p>
            <span className="text-sm">ESTATES & AUCTIONEERS</span>
          </div>
          <div className="relative flex items-center justify-end md:-right-10">
            <button
              className="text-white text-2xl lg:hidden bg-yellow-600 p-2 rounded"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            </button>
          </div>
        </div>

        <nav className="hidden lg:flex items-center">
          <ul className="flex flex-1 justify-center mid-md-lg:gap-11 lg-plus:gap-10 lg-plus:text-base mid-md-lg:text-sm  font-light items-center  text-white relative pr-3">
            <li>
              <Link to="/" className="text-yellow-600 hover:text-white">
                Home
              </Link>
            </li>
            <li className="relative group">
              <Link to="/Guides" className="hover:text-yellow-600">
                Guides
              </Link>
              <div className="absolute hidden group-hover:block bg-yellow-600 text-white mt-2 rounded-md w-52">
                <ul className="p-2">
                  <li>Auction guides for buyers</li>
                  <li>Auction guides for sellers</li>
                </ul>
              </div>
            </li>
            <li className="relative group">
              <Link to="/LiveAuction" className="hover:text-yellow-600">
                Live Auction
              </Link>
              <div className="absolute hidden group-hover:block bg-yellow-600 text-white mt-2 rounded-md w-60">
                <ul className="space-y-2 p-2">
                  <li>Live Auction guides for buyers</li>
                  <li>Live Auction guides for sellers</li>
                </ul>
              </div>
            </li>
            <li className="relative group">
              <Link to="/GetInTouch" className="hover:text-yellow-600">
                Get In Touch
              </Link>
              <div className="absolute hidden group-hover:block bg-yellow-600 text-white mt-2 rounded-md w-36">
                <ul className="space-y-2 p-2">
                  <li>Contact Us</li>
                  <li>About Us</li>
                  <li>Auction your lot</li>
                </ul>
              </div>
            </li>
            <li className="flex flex-col justify-center items-center text-center">
              <FontAwesomeIcon icon={faHouseChimneyWindow} className="h-11" />
              <p className="text-2xl font-medium">BARNEY</p>
              <span>ESTATES & AUCTIONEERS</span>
            </li>
            <li>
              <Link to="/AllListings" className="hover:text-yellow-600">
                All Listings
              </Link>
            </li>
            <li>
              <Link to="/Land" className="hover:text-yellow-600">
                Land
              </Link>
            </li>
            <li>
              <Link to="/Commercial" className="hover:text-yellow-600">
                Commercial
              </Link>
            </li>
            <li>
              <Link to="/Residential" className="hover:text-yellow-600">
                Residential
              </Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </li>
          </ul>
        </nav>
        <div
          className="bg-yellow-600 flex justify-center rounded-b-lg py-1 absolute right-0 mr-1 mt-2 -bottom-8 "
          style={{ width: "180px" }}
        >
          <p className="text-white font-bold w-15">Auction Timetable</p>
        </div>

        {isMenuOpen && (
          <div
            className={`fixed top-0 left-0 w-full h-screen bg-[hsl(288,4%,20%)] text-white shadow-lg space-y-14 overflow-y-auto lg:hidden`}
          >
            {/* Close Button */}
            <div className="h-8 bg-yellow-600 flex items-center overflow-hidden text-white md:hidden">
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
              <div
                className="bg-yellow-600 flex justify-center rounded-b-lg absolute right-2 top-8"
                style={{ width: "160px" }}
              >
                <p className="text-white font-bold w-15">Auction Timetable</p>
              </div>
            </div>
            <button
              className="absolute top-4 right-4 text-3xl text-white"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <nav className="flex flex-col pt-9 pl-8 ">
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="text-yellow-600 hover:text-white"
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>
                </li>
                <li className="relative group">
                  <Link
                    to="/Guides"
                    className="hover:text-yellow-600"
                    onClick={toggleMenu}
                  >
                    Guides
                  </Link>
                  <div className=" text-white mt-1 rounded-md">
                    <ul className="pl-5">
                      <li className="hover:text-yellow-600">
                        Auction guides for buyers
                      </li>
                      <li className="hover:text-yellow-600">
                        Auction guides for sellers
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="relative group">
                  <Link
                    to="/LiveAuction"
                    className="hover:text-yellow-600"
                    onClick={toggleMenu}
                  >
                    Live Auction
                  </Link>
                  <div className="text-white mt-1 ">
                    <ul className=" pl-5 ">
                      <li className="hover:text-yellow-600">
                        Live Auction guides for buyers
                      </li>
                      <li className="hover:text-yellow-600">
                        Live Auction guides for sellers
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="relative group">
                  <Link
                    to="/GetInTouch"
                    className="hover:text-yellow-600"
                    onClick={toggleMenu}
                  >
                    Get In Touch
                  </Link>
                  <div className=" text-white mt-1">
                    <ul className=" pl-5">
                      <li className="hover:text-yellow-600">Contact Us</li>
                      <li className="hover:text-yellow-600">About Us</li>
                      <li className="hover:text-yellow-600">
                        Auction your lot
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link
                    to="/AllListings"
                    className="hover:text-yellow-600"
                    onClick={toggleMenu}
                  >
                    All Listings
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Land"
                    className="hover:text-yellow-600"
                    onClick={toggleMenu}
                  >
                    Land
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Commercial"
                    className="hover:text-yellow-600"
                    onClick={toggleMenu}
                  >
                    Commercial
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Residential"
                    className="hover:text-yellow-600"
                    onClick={toggleMenu}
                  >
                    Residential
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </li>
              </ul>
            </nav>
            <footer className="bg-yellow-600 text-center p-2 w-80 flex justify-self-center rounded-md">
              <p>&copy; 2024 Your Company. All rights reserved.</p>
            </footer>
          </div>
        )}
      </header>
      {/* Conditionally render the background image */}
    {!isFormPage && (
      <div className="relative h-screen">
        
          <img
            className="absolute top-0 left-0 w-full object-cover -z-10"
            style={{ height: "120vh" }}
            src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Background"
          />
        

        {/* Section 1 */}
        <section
          className={`transition-opacity duration-500 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        >
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
            className="w-full h-10 flex items-center text-white sm:justify-between justify-center px-16 z-10 "
            style={{ backgroundColor: "hsl(288,4%,20%)" }}
          >
            <p class="hidden sm:block">
              Our live auction starts in a few weeks{" "}
              <span className="text-yellow-600 inline pl-1">(learn more)</span>
            </p>
            <p class="font-bold">
              Call on{" "}
              <span className="text-yellow-600 inline pl-1">0208 432 7330</span>
            </p>
          </div>

          <div className="relative">
            <div
              className="bg-yellow-600 flex justify-center rounded-b-lg py-1 absolute mr-1 w-40 sm:w-44"
              style={{ right: "0", top: "0" }}
            >
              <p className="text-white font-bold w-15">Auction Timetable</p>
            </div>
            {/* t
          b
          h */}

            <div className="grid grid-cols-2 pt-8 ">
              {/* grid grid-cols-2 gap-24 pl-6 md:place-self-auto md:gap-96
              lg:hidden" */}
              <div className="flex flex-col justify-center items-center text-center text-white lg:hidden md:pr-52 pb-3">
                <FontAwesomeIcon icon={faHouseChimneyWindow} className="h-7" />
                <p className="text-xl font-medium">BARNEY</p>
                <span className="text-sm">ESTATES & AUCTIONEERS</span>
              </div>
              <div className="relative flex items-center justify-end pr-8">
                <button
                  className="text-white text-2xl lg:hidden bg-yellow-600 p-2 rounded"
                  onClick={toggleMenu}
                >
                  <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
                </button>
              </div>

              <div className="hidden lg:flex gap-6 items-center text-white">
                <ul className="hidden lg:flex flex-1 justify-center mid-md-lg:gap-11 lg-plus:gap-10 lg-plus:text-base mid-md-lg:text-sm font-light items-center text-white absolute z-20 left-0 top-0 w-full pt-10  ">
                  <li>
                    <Link to="/" className="text-yellow-600 hover:text-white">
                      Home
                    </Link>
                  </li>
                  <li className="relative group">
                    <Link to="/Guides" className="hover:text-yellow-600">
                      Guides
                    </Link>
                    <div className="absolute hidden group-hover:block bg-yellow-600 text-white mt-2 rounded-md w-52">
                      <ul className="p-2">
                        <li>Auction guides for buyers</li>
                        <li>Auction guides for sellers</li>
                      </ul>
                    </div>
                  </li>
                  <li className="relative group">
                    <Link to="/LiveAuction" className="hover:text-yellow-600">
                      Live Auction
                    </Link>
                    <div className="absolute hidden group-hover:block bg-yellow-600 text-white mt-2 rounded-md w-60">
                      <ul className="space-y-2 p-2">
                        <li>Live Auction guides for buyers</li>
                        <li>Live Auction guides for sellers</li>
                      </ul>
                    </div>
                  </li>
                  <li className="relative group">
                    <Link to="/GetInTouch" className="hover:text-yellow-600">
                      Get In Touch
                    </Link>
                    <div className="absolute hidden group-hover:block bg-yellow-600 text-white mt-2 rounded-md w-36">
                      <ul className="space-y-2 p-2">
                        <li>Contact Us</li>
                        <li>About Us</li>
                        <li>Auction your lot</li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex flex-col justify-center items-center text-center">
                    <FontAwesomeIcon
                      icon={faHouseChimneyWindow}
                      className="h-11"
                    />
                    <p className="text-2xl font-medium">BARNEY</p>
                    <span>ESTATES & AUCTIONEERS</span>
                  </li>
                  <li>
                    <Link to="/AllListings" className="hover:text-yellow-600">
                      All Listings
                    </Link>
                  </li>
                  <li>
                    <Link to="/Land" className="hover:text-yellow-600">
                      Land
                    </Link>
                  </li>
                  <li>
                    <Link to="/Commercial" className="hover:text-yellow-600">
                      Commercial
                    </Link>
                  </li>
                  <li>
                    <Link to="/Residential" className="hover:text-yellow-600">
                      Residential
                    </Link>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </li>
                </ul>
              </div>
              {isMenuOpen && (
                <div
                  className={`fixed top-0 left-0 w-full h-screen z-50 bg-[hsl(288,4%,20%)] text-white space-y-14 shadow-lg overflow-y-auto md:hidden`}
                >
                  {/* Close Button */}
                  <div className="h-8 bg-yellow-600 flex items-center overflow-hidden text-white md:hidden">
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
                    <div
                      className="bg-yellow-600 flex justify-center rounded-b-lg absolute right-2 top-8"
                      style={{ width: "160px" }}
                    >
                      <p className="text-white font-bold w-15">
                        Auction Timetable
                      </p>
                    </div>
                  </div>
                  <button
                    className="absolute top-4 right-4 text-3xl text-white"
                    onClick={toggleMenu}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                  <nav className="flex flex-col gap-4 pl-8 p-9">
                    <ul className="space-y-3">
                      <li>
                        <Link
                          to="/"
                          className="text-yellow-600 hover:text-white"
                          onClick={toggleMenu}
                        >
                          Home
                        </Link>
                      </li>
                      <li className="relative group">
                        <Link
                          to="/Guides"
                          className="hover:text-yellow-600"
                          onClick={toggleMenu}
                        >
                          Guides
                        </Link>
                        <div className=" text-white mt-1 rounded-md">
                          <ul className="pl-5">
                            <li className="hover:text-yellow-600">
                              Auction guides for buyers
                            </li>
                            <li className="hover:text-yellow-600">
                              Auction guides for sellers
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="relative group">
                        <Link
                          to="/LiveAuction"
                          className="hover:text-yellow-600"
                          onClick={toggleMenu}
                        >
                          Live Auction
                        </Link>
                        <div className="text-white mt-1 ">
                          <ul className=" pl-5 ">
                            <li className="hover:text-yellow-600">
                              Live Auction guides for buyers
                            </li>
                            <li className="hover:text-yellow-600">
                              Live Auction guides for sellers
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="relative group">
                        <Link
                          to="/GetInTouch"
                          className="hover:text-yellow-600"
                          onClick={toggleMenu}
                        >
                          Get In Touch
                        </Link>
                        <div className=" text-white mt-1">
                          <ul className=" pl-5">
                            <li
                              className="hover:text-yellow-600"
                              onClick={toggleMenu}
                            >
                              Contact Us
                            </li>
                            <li
                              className="hover:text-yellow-600"
                              onClick={toggleMenu}
                            >
                              About Us
                            </li>
                            <li
                              className="hover:text-yellow-600"
                              onClick={toggleMenu}
                            >
                              Auction your lot
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <Link
                          to="/AllListings"
                          className="hover:text-yellow-600"
                          onClick={toggleMenu}
                        >
                          All Listings
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Land"
                          className="hover:text-yellow-600"
                          onClick={toggleMenu}
                        >
                          Land
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Commercial"
                          className="hover:text-yellow-600"
                          onClick={toggleMenu}
                        >
                          Commercial
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Residential"
                          className="hover:text-yellow-600"
                          onClick={toggleMenu}
                        >
                          Residential
                        </Link>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </li>
                    </ul>
                  </nav>
                  <footer className="bg-yellow-600 text-center p-2 w-80 flex justify-self-center rounded-md">
                    <p>&copy; 2024 Your Company. All rights reserved.</p>
                  </footer>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
      )}
    </section>
  );
}

export default DefaultNavbar;
