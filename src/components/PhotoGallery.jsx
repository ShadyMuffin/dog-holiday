import React from "react";

function PhotoGallery() {
  const images = [
    "/dog1.jpg",
    "/dog2.jpg",
    "/dog3.jpg",
    "/dog4.jpg",
    "/dog5.jpg",
  ];
  return (
    <div>
      <div className="gallery-container py-8">
        <h2 className="text-3xl font-semibold text-center mb-6">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PhotoGallery;
