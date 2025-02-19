import React from "react";
import "./Hero.css";

const Header = () => {

    return (

        <header className="w-full py-6 fixed top-0 left-0 z-10 bg-gradient-to-r from-[#574e45] to-[#b08968]">
    <nav className="container mx-auto flex flex-col items-center">
        <h1 className="text-white text-3xl mb-2 uppercase tracking-wide">
            Acuated Clarity
        </h1>
        <ul className="w-full flex justify-between text-white text-lg tracking-wide">
            {["Home", "Gallery", "About", "Contact"].map((item) => (
                <li key={item} className="relative">
                    <a 
                        href={`#${item.toLowerCase()}`}
                        className="nav-link relative inline-block px-4 py-2 transform transition-all duration-300 ease-in-out group hover:scale-110"
                    >
                        {item}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
</header>
        
    )
}

export default Header;