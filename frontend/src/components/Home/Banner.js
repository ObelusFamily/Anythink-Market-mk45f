import React from "react";
import logo from "../../imgs/logo.png";
import './home.css'

const Banner = () => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div >
          <span id="get-part">A place to get</span>
          <input id="search-box" placeholder="What is it that you truly desire?" type="input" className="w-50 mx-2 rounded"/>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
