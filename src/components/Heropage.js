import React, { useState, useEffect } from "react";
import "./Hero.css";
import Img1 from "../assets/Img1.png";
import Img2 from "../assets/Img2.png";
import Img3 from "../assets/Img3.png";
import Img4 from "../assets/Img4.png";



const imageData = [
    {src: Img1, label: "Weddings"},
    {src: Img2, label: "Nature"},
    {src: Img3, label: "Fashion"},
    {src: Img4, label: "Product"}
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

