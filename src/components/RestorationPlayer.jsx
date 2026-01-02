import React, { useState, useRef, useEffect } from 'react';
import { useAudio } from '../contexts/AudioContext';
import { Play, Pause, X, Rewind, Disc3, Voicemail } from 'lucide-react';

const RestorationPlayer = () => {
  const { currentTrack, isPlaying, setIsPlaying, closePlayer } = useAudio();
  const [sourceMode, setSourceMode] = useState('reference'); // 'reference' | 'restored'
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  
  const audioRef = useRef(null);

  // --- LOGIC: Seamless Source Switching ---
  useEffect(() => {
    if (currentTrack && audioRef.current) {
      const src = currentTrack.audioSources?.[sourceMode];
      if (src && audioRef.current.src !== src) {
        const wasPlaying = isPlaying;
        const currentTime = audioRef.current.currentTime;
        
        audioRef.current.src = src;
        audioRef.current.currentTime = currentTime; 
        
        if (wasPlaying) {
            audioRef.current.play().catch(e => console.log("Playback interrupted", e));
        }
      }
    }
  }, [currentTrack, sourceMode, isPlaying]);

  // Handle Play/Pause Global State
  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) audioRef.current.play().catch(() => {});
    else audioRef.current.pause();
  }, [isPlaying]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setProgress(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || 0);
    }
  };

  const handleRewind = () => {
    if (audioRef.current) {
        audioRef.current.currentTime = 0;
    }
  };

  const formatTime = (time) => {
    if (!time) return "0:00";
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60).toString().padStart(2, '0');
    return `${min}:${sec}`;
  };

  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-[100] bg-[#041E42] text-[#F4F4F3] border-t border-[#D50032] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] translate-y-0 animate-in slide-in-from-bottom-20">
      <audio 
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        preload="auto"
      />
      
      {/* 1. Progress Bar (The Ictus) */}
      <div 
        className="w-full h-1 md:h-1.5 bg-[#F4F4F3]/10 cursor-pointer group relative"
        onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const pct = (e.clientX - rect.left) / rect.width;
            if(audioRef.current) {
                audioRef.current.currentTime = pct * duration;
            }
        }}
      >
        <div 
            className="absolute top-0 left-0 h-full bg-[#D50032] group-hover:bg-[#F4F4F3] transition-all duration-100 ease-linear" 
            style={{ width: `${(progress / duration) * 100}%` }} 
        />
      </div>

      {/* 2. Console Controls */}
      <div className="max-w-[1920px] mx-auto px-4 md:px-12 py-4 md:py-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-12">
        
        {/* Top/Left: Track Data */}
        <div className="flex items-center gap-4 md:gap-6 justify-between md:justify-start w-full md:w-auto min-w-0">
            <div className="flex items-center gap-4 min-w-0">
                <div className="hidden sm:flex items-center justify-center w-10 h-10 md:w-14 md:h-14 bg-[#F4F4F3]/5 border border-[#F4F4F3]/20 text-[#D50032] flex-shrink-0 rounded-sm">
                   {sourceMode === 'reference' ? <Disc3 size={24} strokeWidth={1.25} /> : <Voicemail size={24} strokeWidth={1.25} />}
                </div>
                <div className="flex flex-col overflow-hidden text-left min-w-0">
                    <span className="text-[8px] md:text-[9px] font-sans font-bold tracking-[0.2em] uppercase text-[#D50032] mb-1 truncate">
                        {sourceMode === 'reference' ? 'Unfiltered Archival Recording' : '2025 Reel-to-Reel Digital Transfer'}
                    </span>
                    <span className="text-lg md:text-2xl font-serif text-[#F4F4F3] truncate leading-tight">
                        {currentTrack.title}
                    </span>
                </div>
            </div>
            {/* Mobile Close Button (Visible only on mobile for better reach) */}
            <button onClick={closePlayer} className="md:hidden opacity-40 hover:opacity-100 p-2">
                <X size={20} />
            </button>
        </div>

        {/* Middle: Source Toggle & Transport */}
        <div className="flex items-center justify-between md:justify-center w-full md:w-auto gap-4 md:gap-10">
            
            {/* Toggle Switch - Now uses flex-1 to fill mobile space without overflow */}
            <div className="flex flex-1 md:flex-none items-center bg-[#F4F4F3]/5 rounded-sm p-1 border border-[#F4F4F3]/10">
                <button 
                    onClick={() => setSourceMode('reference')}
                    className={`flex-1 md:w-24 py-2 text-[9px] font-sans font-bold tracking-[0.2em] uppercase leading-none transition-all ${sourceMode === 'reference' ? 'bg-[#F4F4F3] text-[#041E42]' : 'text-[#F4F4F3]/40 hover:text-[#F4F4F3]'}`}
                >
                    Raw
                </button>
                <button 
                    onClick={() => setSourceMode('restored')}
                    className={`flex-1 md:w-24 py-2 text-[9px] font-sans font-bold tracking-[0.2em] uppercase leading-none transition-all ${sourceMode === 'restored' ? 'bg-[#D50032] text-white' : 'text-[#F4F4F3]/40 hover:text-[#F4F4F3]'}`}
                >
                    Master
                </button>
            </div>

            {/* Transport Controls */}
            <div className="flex items-center gap-2 md:gap-4">
                <button 
                    onClick={handleRewind}
                    className="w-10 h-10 flex items-center justify-center text-[#F4F4F3]/60 hover:text-[#D50032] transition-colors"
                >
                    <Rewind size={20} fill="currentColor" />
                </button>

                <button 
                    onClick={() => setIsPlaying(!isPlaying)} 
                    className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-[#F4F4F3] hover:bg-[#D50032] hover:border-[#D50032] transition-colors rounded-full"
                >
                    {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
                </button>
            </div>
        </div>

        {/* Bottom/Right: Timestamp (and Desktop Close) */}
        <div className="flex items-center justify-between md:justify-end w-full md:w-auto border-t border-white/5 md:border-0 pt-3 md:pt-0">
            <span className="text-[10px] md:text-[11px] font-sans font-bold tracking-[0.1em] tabular-nums opacity-60">
                {formatTime(progress)} <span className="opacity-30 mx-2">/</span> {formatTime(duration)}
            </span>
            <button onClick={closePlayer} className="hidden md:block opacity-40 hover:opacity-100 hover:text-[#D50032] transition-colors p-2 ml-4">
                <X size={24} />
            </button>
        </div>

      </div>
    </div>
  );
};

export default RestorationPlayer;
