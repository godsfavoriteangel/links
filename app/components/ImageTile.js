import React from 'react';
import styles from './ImageTile.module.css';

const ImageTile = ({ images }) => {
  return (
    <div className={styles.imageTileContainer}>
      {images.map((image, index) => (
        <div key={index} className={styles.imageTile}>
          <img src={image} alt={`Tile ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageTile;