import React from 'react';

const ImageTile = ({ images }) => {
  return (
    <div className="grid grid-cols-3 gap-2 xl:grid-cols-6 xl:gap-4">
      {images.map((image, index) => (
        <div key={index} className="w-full h-[100px] md xl:h-[300px] overflow-hidden">
          <img src={image} alt={`Tile ${index}`} className="w-full h-full object-cover"/>
        </div>
      ))}
    </div>
  );
};

export default ImageTile;