import * as React from "react";
import "./App.css";
import headerImage from "./assets/headerImage.png";
import icon from "./assets/icon.svg";
import icon2 from "./assets/icon2.svg";
import icon3 from "./assets/icon3.svg";
import group20 from "./assets/group20.svg";
import group16 from "./assets/group16.svg";
import logo from "./assets/logo.svg";
import bg from "./assets/bg.svg";
import maskGroup from "./assets/maskGroup.svg";
import group19 from "./assets/group19.svg";
import vector708 from "./assets/vector708.svg";
import icon1 from "./assets/icon1.svg";
const App = () => {
  return (
    <div className="desktop-3">
      <div className="flex-container">
        <span className="logo">logo &amp; company Name</span>
        <div className="flex-container-1">
          <span>Home</span>
          <hr className="active-indicater" />
        </div>
        <span>About</span>
        <span>Service</span>
        <span>Portfolio</span>
        <span className="menu">Blog</span>
        <span>Contact</span>
      </div>
      <div className="flex-container-2">
        <div className="flex-container-3">
          <span className="small-heading">RESIDENTIAL &amp; OFFICE SPACES</span>
          <span className="heading">Smart Living Style for Smart People</span>
          <span className="text">
            Much did had call new drew that kept. Limits expect wonder law she.
            Now has you views woman noisy match money rooms.
          </span>
          <div className="bg">
            <img className="icon" src={icon} />
            <span className="text-1">Enter Zipcode to search properties</span>
            <div className="rectangle-2">
              <span className="search-now">Search Now!</span>
            </div>
          </div>
        </div>
        <div className="flex-container-4">
          <img className="header-image" src={headerImage} />
          <img className="bg-1" src={bg} />
        </div>
      </div>
      <span className="text-2">Our Amazing Partners</span>
      <img className="logo-1" src={logo} />
      <span className="how-it-works">How it works?</span>
      <div className="flex-container-5">
        <img className="icon-1" src={icon1} />
        <img className="group-19" src={group19} />
        <img className="icon-2" src={icon2} />
        <img className="group-20" src={group20} />
        <img className="icon-3" src={icon3} />
      </div>
      <div className="flex-container-6">
        <span>Research Suburbs</span>
        <span className="instant-valuation">Instant Valuation</span>
        <span className="track-property">Track Property</span>
      </div>
      <div className="flex-container-7">
        <span className="wonder-twenty-hunted">
          Wonder twenty hunted and put income set desire expect. Am cottage
          calling.
        </span>
        <span className="conveying-or-northwa">
          Conveying or northward offending admitting perfectly my. Colonel
          gravit and moonlight.
        </span>
        <span className="moderate-children-at">
          Moderate children at of outweigh it. Unsatiable it considered
          invitation he travelling insensible.
        </span>
      </div>
      <div className="flex-container-8">
        <span className="best-real-estate-dea">Best Real Estate Deals</span>
        <div className="fill">
          <span className="view-all-property">View All Property</span>
        </div>
      </div>
      <span className="colonel-gravity-get">
        Colonel gravity get thought fat smiling add but. Wonder twenty hunted
        and put income set desire expect.
      </span>
      <div className="flex-container-9">
        <span className="residential-property">Residential Property</span>
        <span>Commercial Property</span>
        <span>Agriculture Property</span>
        <span>Industrial Property</span>
      </div>
      <img className="vector-708" src={vector708} />
      <img className="group-16" src={group16} />
      <span className="featured-listing-of">Featured Listing of the Week</span>
      <div className="base">
        <img className="mask-group" src={maskGroup} />
        <span>The and collecting for the motionless difficulty son.</span>
      </div>
    </div>
  );
};
export default App;
