"use client";
import { useState } from "react";
import Home from "../pages/Home";
const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = (event) => {
    if (
      isSidebarOpen &&
      !event.target.closest(".sidebar") &&
      event.target !== btn
    ) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="relative h-screen md:flex overflow-x-hidden">
    <div className=" bg-gray-800 text-gray-100 flex justify-between md:hidden ">
      <a href="#" className="block p-4 text-white font-bold">
        GO INDIA STOCKS
      </a>

      <button
        className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700"
        onClick={toggleSidebar}
      >
        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    <div className={`sidebar bg-blue-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute  inset-y-0 top-14 transform ${isSidebarOpen ? '' : '-translate-x-full'}  md:translate-x-0 transition duration-200 ease-in-out md:sticky md:left-0 md:bottom-0 md:top-0`}>


      <a href="#" className="text-white flex items-center space-x-2 px-4">
        <img src='https://www.goindiastocks.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.f62c7531.png&w=3840&q=75' width={25} />
        <span className="text-xl font-extrabold">GO INDIA STOCKS</span>
      </a>

      <nav>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
          Home
        </a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
          About
        </a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
          Features
        </a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
          Pricing
        </a>
      </nav>
    </div>

    <div className="flex-1 p-10 text-2xl font-bold">
      <Home />
    </div>
  </div>
  );
};

export default Navbar;
