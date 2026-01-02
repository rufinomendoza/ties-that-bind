// src/contexts/AudioContext.jsx
import React, { createContext, useContext, useState } from 'react';

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playTrack = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const pauseTrack = () => {
    setIsPlaying(false);
  };

  const closePlayer = () => {
    setIsPlaying(false);
    setCurrentTrack(null);
  };

  return (
    <AudioContext.Provider value={{ currentTrack, isPlaying, setIsPlaying, playTrack, pauseTrack, closePlayer }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);