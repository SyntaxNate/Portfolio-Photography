import React, { useState, useEffect } from "react";
import "./Hero.css";
import img1 from "../assets/image1.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image3.png";
import img4 from "../assets/image4.png";



const imageData = [
    {src: img1, label: "Weddings"},
    {src: img2, label: "Nature"},
    {src: img3, label: "Fashion"},
    {src: img4, label: "Product"}
];




const HeroPage = () => {

    const [visibleCards, setVisibleCards] = useState([]);

    useEffect(() => {
        imageData.forEach((_, index) => {
            setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
            }, index * 800);
        });
    }, []);

    return (
        <div className="hero-container">
          {imageData.map((image, index) => (
            <div key={index} className={`card ${visibleCards.includes(index) ? "slide-in" : ""}`}
                style={{animationDelay: `${index * 3.5}s`}}
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

