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
    // 1. Capture the element to ensure cleanup works even if the ref changes later
    const audioEl = audioRef.current;

    if (currentTrack && audioEl) {
      const src = currentTrack.audioSources?.[sourceMode];
      
      // Check if the source has actually changed
      if (src && audioEl.getAttribute('src') !== src) {
        
        const wasPlaying = isPlaying;
        const savedTime = audioEl.currentTime;
        
        const onMetadataLoaded = () => {
            // Restore the timestamp
            audioEl.currentTime = savedTime;
            
            // Resume playback if it was playing before
            if (wasPlaying) {
                audioEl.play().catch(e => console.log("Playback interrupted during switch", e));
            }
        };

        // Attach listener
        audioEl.addEventListener('loadedmetadata', onMetadataLoaded, { once: true });
        
        // Switch the source
        audioEl.src = src;

        // ✅ FIX: Cleanup function to remove the specific listener if the effect re-runs
        // This prevents "stacking" listeners if the user clicks rapidly
        return () => {
            audioEl.removeEventListener('loadedmetadata', onMetadataLoaded);
        };
      }
    }
  }, [currentTrack, sourceMode, isPlaying]); // Added isPlaying to dependencies

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

  // ✅ ACCESSIBILITY: Keyboard Seek Handler
  const handleSeekKeyDown = (e) => {
    if (!audioRef.current) return;
    
    const SEEK_STEP = 5; // seconds
    let newTime = audioRef.current.currentTime;

    switch (e.key) {
        case 'ArrowLeft':
        case 'ArrowDown':
            newTime = Math.max(0, newTime - SEEK_STEP);
            break;
        case 'ArrowRight':
        case 'ArrowUp':
            newTime = Math.min(duration, newTime + SEEK_STEP);
            break;
        case 'Home':
            newTime = 0;
            break;
        case 'End':
            newTime = duration;
            break;
        default:
            return; // Exit if not a nav key
    }

    e.preventDefault(); // Prevent page scroll
    audioRef.current.currentTime = newTime;
    setProgress(newTime);
  };

  // ✅ MOBILE SUPPORT: Unified Touch/Mouse Seek Handler
  const handleSeek = (e) => {
    if (!audioRef.current || !duration) return;

    // Detect touch or mouse coordinates
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const rect = e.currentTarget.getBoundingClientRect();
    
    // Calculate percentage and clamp between 0 and 1
    const pct = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    
    audioRef.current.currentTime = pct * duration;
    // Optimistic update for smooth dragging
    setProgress(pct * duration);
  };

  const formatTime = (time) => {
    if (!time) return "0:00";
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60).toString().padStart(2, '0');
    return `${min}:${sec}`;
  };

  if (!currentTrack) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 w-full z-[100] bg-[#041E42] text-[#F4F4F3] border-t border-[#D50032] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] translate-y-0 animate-in slide-in-from-bottom-20"
      role="region"
      aria-label="Audio Player"
    >
      <audio 
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        preload="auto"
      />
      
      {/* 1. Progress Bar (The Ictus) - ✅ ACCESSIBLE & TOUCH FRIENDLY */}
      <div 
        className="w-full h-1 md:h-1.5 bg-[#F4F4F3]/10 cursor-pointer group relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D50032] focus-visible:ring-offset-2 focus-visible:ring-offset-[#041E42]"
        onClick={handleSeek}
        onTouchStart={handleSeek}
        onTouchMove={handleSeek}
        onKeyDown={handleSeekKeyDown}
        role="slider"
        tabIndex={0}
        aria-label="Seek Track"
        aria-valuemin={0}
        aria-valuemax={Math.floor(duration)}
        aria-valuenow={Math.floor(progress)}
        aria-valuetext={`${formatTime(progress)} of ${formatTime(duration)}`}
      >
        <div 
            className="absolute top-0 left-0 h-full bg-[#D50032] group-hover:bg-[#F4F4F3] transition-all duration-100 ease-linear" 
            style={{ width: `${duration > 0 ? (progress / duration) * 100 : 0}%` }} 
        />
      </div>

      {/* 2. Console Controls */}
      <div className="max-w-[1920px] mx-auto px-4 md:px-12 py-4 md:py-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-12">
        
        {/* Top/Left: Track Data */}
        <div className="flex items-center gap-4 md:gap-6 justify-between md:justify-start w-full md:w-auto min-w-0">
            <div className="flex items-center gap-4 min-w-0">
                <div className="hidden sm:flex items-center justify-center w-10 h-10 md:w-14 md:h-14 bg-[#F4F4F3]/5 border border-[#F4F4F3]/20 text-[#F4F4F3] flex-shrink-0 rounded-sm">
                   {sourceMode === 'reference' ? <Disc3 size={24} strokeWidth={1.25} aria-hidden="true" /> : <Voicemail size={24} strokeWidth={1.25} aria-hidden="true" />}
                </div>
                <div className="flex flex-col overflow-hidden text-left min-w-0 md:min-w-72">
                    <span className="text-[8px] md:text-[9px] font-mono font-bold tracking-[0.2em] uppercase text-[#F4F4F3]/80 mb-1 truncate">
                        {sourceMode === 'reference' ? 'Unfiltered Archival Recording' : '2025 Reel-to-Reel Digital Transfer'}
                    </span>
                    <span className="text-lg md:text-2xl font-serif text-[#F4F4F3] truncate leading-tight">
                        {currentTrack.title}
                    </span>
                </div>
            </div>
            {/* Mobile Close Button */}
            <button 
                onClick={closePlayer} 
                className="md:hidden opacity-40 hover:opacity-100 p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D50032] rounded-sm"
                aria-label="Close Player"
            >
                <X size={20} aria-hidden="true" />
            </button>
        </div>

        {/* Middle: Source Toggle & Transport */}
        <div className="flex items-center justify-between md:justify-center w-full md:w-auto gap-4 md:gap-10">
            
            {/* Toggle Switch */}
            <div className="flex flex-1 md:flex-none items-center bg-[#F4F4F3]/5 rounded-sm p-1 border border-[#F4F4F3]/10">
                <button 
                    onClick={() => setSourceMode('reference')}
                    aria-pressed={sourceMode === 'reference'}
                    className={`flex-1 md:w-24 py-2 text-[9px] font-mono font-bold tracking-[0.2em] uppercase leading-none transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D50032] rounded-sm ${sourceMode === 'reference' ? 'bg-[#F4F4F3] text-[#041E42]' : 'text-[#F4F4F3]/40 hover:text-[#F4F4F3]'}`}
                >
                    Raw
                </button>
                <button 
                    onClick={() => setSourceMode('restored')}
                    aria-pressed={sourceMode === 'restored'}
                    className={`flex-1 md:w-24 py-2 text-[9px] font-mono font-bold tracking-[0.2em] uppercase leading-none transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D50032] rounded-sm ${sourceMode === 'restored' ? 'bg-[#D50032] text-white' : 'text-[#F4F4F3]/40 hover:text-[#F4F4F3]'}`}
                >
                    Master
                </button>
            </div>

            {/* Transport Controls */}
            <div className="flex items-center gap-2 md:gap-4">
                <button 
                    onClick={handleRewind}
                    className="w-10 h-10 flex items-center justify-center text-[#F4F4F3]/60 hover:text-[#D50032] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D50032] rounded-full"
                    aria-label="Rewind to Start"
                >
                    <Rewind size={20} fill="currentColor" aria-hidden="true" />
                </button>

                <button 
                    onClick={() => setIsPlaying(!isPlaying)} 
                    className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-[#F4F4F3] hover:bg-[#D50032] hover:border-[#D50032] transition-colors rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D50032] focus-visible:ring-offset-2 focus-visible:ring-offset-[#041E42]"
                    aria-label={isPlaying ? "Pause" : "Play"}
                >
                    {isPlaying ? <Pause size={20} fill="currentColor" aria-hidden="true" /> : <Play size={20} fill="currentColor" className="ml-1" aria-hidden="true" />}
                </button>
            </div>
        </div>

        {/* Bottom/Right: Timestamp (and Desktop Close) */}
        <div className="flex items-center justify-between md:justify-end w-full md:w-auto border-t border-white/5 md:border-0 pt-3 md:pt-0">
            <span className="text-[10px] md:text-[11px] font-mono font-bold tracking-[0.1em] tabular-nums opacity-60">
                {formatTime(progress)} <span className="opacity-30 mx-2">/</span> {formatTime(duration)}
            </span>
            <button 
                onClick={closePlayer} 
                className="hidden md:block opacity-40 hover:opacity-100 hover:text-[#D50032] transition-colors p-2 ml-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D50032] rounded-sm"
                aria-label="Close Player"
            >
                <X size={24} aria-hidden="true" />
            </button>
        </div>

      </div>
    </div>
  );
};

export default RestorationPlayer;