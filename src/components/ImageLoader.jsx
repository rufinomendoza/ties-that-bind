import React, { useState } from 'react';

const ImageLoader = ({ 
  src, 
  alt, 
  className, 
  curtainClassName, 
  ...props 
}) => {
  // FIX: Track the specific source that has loaded, rather than a generic boolean.
  // This automatically "resets" the loading state when 'src' changes 
  // because 'loadedSrc' will no longer match 'src'.
  const [loadedSrc, setLoadedSrc] = useState(null);
  
  const isLoaded = loadedSrc === src;

  return (
    <>
      <img
        src={src}
        alt={alt}
        {...props}
        // Ref callback checks for instant cache hits
        ref={(img) => {
          if (img && img.complete && loadedSrc !== src) {
             setLoadedSrc(src);
          }
        }}
        onLoad={() => setLoadedSrc(src)}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />
      {/* The "Curtain" overlay */}
      <div 
        className={`${curtainClassName} ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
        aria-hidden="true"
      />
    </>
  );
};

export default ImageLoader;