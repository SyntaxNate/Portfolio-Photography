import React from "react";
import "./Hero.css"

const Header = () => {

    return (
        <nav className="w-full text-white py-6 fixed top-0 left-0 z-10 
                    bg-gradient-to-r from-[#574e45] to-[#b08968] shadow-md">
            <div className="container mx-auto flex flex-col items-center">
                <h1 className="text-3xl mb-2 uppercase tracking-wide">
                    Acuated Clarity
                </h1>
                <ul className="w-full flex justify-between text-white text-lg tracking-wide">
                    <li className="relative group">
                        <a href="#home" className="nav-link">
                            Home
                        </a>
                       </li>
                       <li className="relative group">
                        <a href="#gallery" className="nav-link">
                            Gallery
                        </a>
                       </li>
                       <li className="relative group">
                        <a href="#about" className="nav-link">
                            About
                        </a>
                       </li>
                       <li className="relative group">
                        <a href="#contact" className="nav-link">
                            Contact
                        </a>
                       </li>
                    
                </ul>
            </div>
        </nav>
    )
}

export default Header;