import React from 'react';
import './Gallery.css'; // Ensure the CSS file is imported

function Gallery() {
    const numImages = 12; // Total number of images
    const imageNames = Array.from({ length: numImages }, (_, i) => `/images/nail${i + 1}.png`); // Adjust the path as necessary

    return (
        <div className="gallery">
            {imageNames.map((imageName, index) => (
                <div key={index} className="img-box">
                    <img src={imageName} alt={`Nail Art ${index + 1}`} />
                </div>
            ))}
        </div>
    );
}

export default Gallery;
