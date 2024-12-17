import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom"; // Added Outlet import
import DefaultNavbar from "./components/DefaultNavbar";
import DefaultFooter from "./components/DefaultFooter";
import Home from "./components/Home";
import Guides from "./components/Guides";
import LiveAuction from "./components/LiveAuction";
import AllListings from "./components/AllListings";
import Land from "./components/Land";
import Commercial from "./components/Commercial";
import Residential from "./components/Residential";
import GetInTouch from "./components/GetInTouch.jsx";
import Form from "./components/Form.jsx";

// Default layout with DefaultNavbar
const DefaultLayout = () => (
  <>
    <DefaultNavbar />
    <Outlet /> {/* Placeholder for nested routes */}
    <DefaultFooter />
  </>
);

// Layout for pages using SideHeader
// const SideNavLayout = () => (
//   <>
//     <SideHeader />
//     <Outlet /> {/* Placeholder for nested routes */}
//     <DefaultFooter />
//   </>
// );

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes for pages using SideHeader */}
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Guides" element={<Guides />} />
          <Route path="/LiveAuction" element={<LiveAuction />} />
          <Route path="/GetInTouch" element={<GetInTouch />} />
          <Route path="/AllListings" element={<AllListings />} />
          <Route path="/Land" element={<Land />} />
          <Route path="/Commercial" element={<Commercial />} />
          <Route path="/Residential" element={<Residential />} />
          <Route path="/Form" element={<Form />} />
        </Route>
        {/* </Route> */}
      </Routes>
    </Router>
  );
};

export default App;
