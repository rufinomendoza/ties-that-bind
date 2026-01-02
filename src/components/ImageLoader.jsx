import React, { useState } from 'react';

const ImageLoader = ({ 
  src, 
  alt, 
  className, 
  curtainClassName, 
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        {...props}
        // FIX: Add ref callback to check if image is already cached/complete
        ref={(img) => {
          if (img && img.complete) {
             setIsLoaded(true);
          }
        }}
        onLoad={() => setIsLoaded(true)}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />
      {/* The "Curtain" overlay */}
      <div 
        className={`${curtainClassName} ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
      />
    </>
  );
};

export default ImageLoader;