"use client";
import React from "react";
import MarketStories from "../components/MarketStories";
import DiscussForums from "../components/DiscussForums";
import { useState } from "react";
const Home = () => {
  const [selectedComponent, setSelectedComponent] = useState('discuss');
  
  return (
    <>
      <div className="block sm:hidden ">
        <span className="flex">
        <button
          className={`col-span-1 py-2 px-4 ${
            selectedComponent === "discuss"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700"
          } rounded-tl-md rounded-bl-md`}
          onClick={() => setSelectedComponent("discuss")}
        >
          Discuss Forums
        </button>
        <button
          className={`col-span-1 py-2 px-4 ${
            selectedComponent === "market"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700"
          } rounded-tr-md rounded-br-md`}
          onClick={() => setSelectedComponent("market")}
        >
          Market Stories
        </button>
        </span>
      

      {selectedComponent === "discuss" && <DiscussForums />}
      {selectedComponent === "market" && <MarketStories />}
      </div>

      <div className="hidden sm:grid sm:grid-cols-3">
        <div className="col-span-2">
          <DiscussForums />
        </div>
        <div className="col-span-1">
          <MarketStories />
        </div>
      </div>
    </>
  );
};

export default Home;
