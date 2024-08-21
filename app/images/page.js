"use client";
import ImageTile from '../components/ImageTile';
import { useState, useEffect } from 'react';
import Nav from '../components/Nav';

  const Images = () => {
    const [images, setImages] = useState([]);
  
    useEffect(() => {
      const fetchImages = async () => {
        const res = await fetch('/images.json');
        const data = await res.json();
        setImages(data);
      };
  
      fetchImages();
    }, []);
  
  
    return (
      <div>
        <Nav />
        <div className='flex flex-row justify-center m-5'>
            <ImageTile 
              images={images} 
            /> 
          </div>
      </div>
          
    );
  };
  
  export default Images;