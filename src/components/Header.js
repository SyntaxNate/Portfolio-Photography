import React from "react";
import ".././index.css";
import "./Hero.css";

export default function Header() {
    return (
      <header className="w-full bg-gradient-to-r from-[#574e45] to-[#b08968] py-4 px-8 fixed top-0 left-0 z-50 text-white">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center">Accuated Clarity</h1>
  
        {/* Navigation */}
        <nav className="w-full flex justify-around mt-4 text-xl font-bold">
          <button className="relative transition-transform duration-300 hover:scale-110">
            <span className="hover:swipe-effect">Home</span>
          </button>
          <button className="relative transition-transform duration-300 hover:scale-110">
            <span className="hover:swipe-effect">Gallery</span>
          </button>
          <button className="relative transition-transform duration-300 hover:scale-110">
            <span className="hover:swipe-effect">Contact</span>
          </button>
        </nav>
      </header>
    );
  }