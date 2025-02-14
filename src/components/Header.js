import React from "react";
import "./Hero.css"

const Header = () => {

    return (

    <header className="w-full py-6 fixed top-0 left-0 z-10 bg-gradient-to-r 
                    from-[#574e45] to-[#b08968]">
        <nav className="container mx-auto flex flex-col items-center">
                <h1 className="text-white text-3xl mb-2 uppercase tracking-wide">
                    Acuated Clarity
                </h1>
                <ul className="w-full flex justify-between text-white text-lg tracking-wide">
                    {["Home", "Gallery", "About", "Contact"].map((item) => (
                        <li key={item} className="relative group">
                            <a href={`#${item.toLowerCase()}`}
                                className="relative inline-block px-4 py-2 transition-all
                                            duration-300 ease-in-out transform 
                                            group-hover:scale-110">
                        
                            <span className="relative z-10">
                                {item}</span>
                            <span className="absolute inset-0 left-[100%] bg-white opacity-0 
                                            group-hover:opacity-30 group-hover:left-[-100%]
                                            transition-all duration-500 ease-out skew-x-[-20deg]">
                            </span>
                            </a>
                       </li>

                    ))}
                    
                    
                </ul>
        </nav>

    </header>
        
    )
}

export default Header;