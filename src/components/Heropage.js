import React, { useState, useEffect } from "react";
import "./Hero.css";


const imageData = [
    {src: "wedding.jpg", label: "Weddings"},
    {src: "nature.jpg", label: "Nature"},
    {src: "fashion.jpg", label: "Fashion"},
    {src: "product.jpg", label: "Product"}
];




const HeroPage = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 500);
    }, []);

    return (
        <div className="hero-comtainer">
          {imageData.map((image, index) => (
            <div key={index} className={`card ${isVisible ? "slideIn" : ""}`}
                style={{animationDelay: `${index * 0.5}s`}}
            >
                <img src={image.src} alt={image.label} />
                <div className="card-label">
                    {image.label}
                </div>
            </div>
          ))}
        </div>
    )
};

export default HeroPage;

