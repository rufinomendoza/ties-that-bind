import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ALBUMS_DATA } from '../data';
import { typeset } from '../utils/formatters';
import SectionHeader from '../components/SectionHeader';
import ImageLoader from '../components/ImageLoader'; 
import { useAudio } from '../contexts/AudioContext';

const DiscographyView = ({ openAlbum, navigateTo }) => {
  const { playTrack } = useAudio();
  const demoAlbum = ALBUMS_DATA.find(a => a.id === 12);
  const demoTrack = demoAlbum?.restoration;

  return (
    <div className="min-h-screen pt-40 px-6 md:px-12 pb-32 bg-[#F4F4F3] text-[#041E42] antialiased selection:bg-[#D50032] selection:text-white">
      <Helmet>
        <title>Listening Room | Georgetown Chimes Alumni Association, Inc.</title>
        <meta name="description" content="Explore the recorded history of the Georgetown Chimes." />
      </Helmet>

      <div className="max-w-[1920px] mx-auto">
        <SectionHeader title="The Listening Room" number="Recorded Works" />
        
        {/* 01 — PRESERVATION SECTION */}
        <div className="border-t-2 border-[#041E42] pt-12 pb-32 grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12">
            <div className="lg:col-span-4">
              <span className="text-[11px] font-mono font-bold tracking-[0.05em] text-[#D50032] uppercase block mb-4">01 — The Preservation</span>
            </div>
            <div className="lg:col-span-8">
                <h3 className="text-5xl md:text-7xl font-serif leading-[1.15] md:leading-[1.0] text-[#041E42] tracking-tighter mb-12">A living record. Currently undergoing restoration.</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-[#041E42]/20 pt-8 mb-16">
                    <p className="text-xl text-[#041E42] font-serif leading-relaxed">To ensure our recorded legacy carries on, our preservationists are currently digitizing master tapes from the 1950s through the ’80s to exacting high-fidelity standards.</p>
                    <div className="flex flex-col items-start gap-4">
                        <button onClick={() => window.open('https://thechimes.notion.site', '_blank')} className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase border-b border-[#041E42]/20 hover:text-[#D50032] hover:border-[#D50032] transition-colors pb-1 text-left">Explore the Rough Cuts &#x2197;&#xFE0E;</button>
                        <button onClick={() => navigateTo('philanthropy')} className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase border-b border-[#041E42]/20 hover:text-[#D50032] hover:border-[#D50032] transition-colors pb-1">Support Digitization</button>
                    </div>
                </div>

                {/* THE ARCHIVAL PLAYER (Patronage-Style Integration) */}
                {demoTrack && (
                  <div className="relative bg-white border border-[#041E42]/10 p-8 md:p-12 mb-20 shadow-sm overflow-hidden group">
                    {/* Archival Utility Tag */}
                    <div className="absolute top-0 right-0 bg-[#041E42] text-white px-4 py-1 text-[9px] font-mono font-black uppercase tracking-[0.2em] select-none">
                        Log: Item #R-011
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      
                      {/* Narrative Side */}
                      <div className="lg:col-span-8">
                        <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[#D50032] mb-4 block">
                          Hear the Difference
                        </span>
                        <h4 className="text-2xl md:text-3xl font-serif text-[#041E42] tracking-tighter leading-tight mb-4">
                          The <em>Restoration</em> Demo
                        </h4>
                        <p className="text-base font-serif italic leading-relaxed text-[#041E42]/70 max-w-xl [text-wrap:balance]">
                          The difference between loss and legacy: Listen to the raw extraction of our 1958 album versus the professional master transfer.
                        </p>
                      </div>

                      {/* Action Side */}
                      <div className="lg:col-span-4 flex flex-col md:flex-row lg:flex-col items-start lg:items-end justify-center gap-6">
                        <button 
                          onClick={() => playTrack(demoTrack)}
                          className="flex items-center justify-between w-full md:w-auto gap-8 border-2 border-[#041E42] p-5 lg:p-6 hover:bg-[#041E42] hover:text-white transition-all duration-500 group/btn"
                        >
                          <div className="text-left">
                            <span className="text-[11px] font-sans font-bold tracking-[0.2em] uppercase block">Start A/B Demo</span>
                          </div>
                          <span className="text-2xl transition-transform group-hover/btn:translate-x-1">▶</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
            </div>
        </div>

        {/* The Grid */}
        <div className="mb-48">
            <div className="flex items-end justify-between border-b-2 border-[#041E42] pb-4 mb-12">
              <span className="text-[11px] font-mono font-bold tracking-[0.05em] text-[#041E42] uppercase">02 — The Discography</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24">
            {ALBUMS_DATA.map((album, index) => (
                <button 
                  key={album.id} 
                  type="button"
                  onClick={() => openAlbum(album)} 
                  className="w-full text-left group cursor-pointer flex flex-col gap-6 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#D50032] focus-visible:ring-offset-4 rounded-sm"
                >
                  <div className="relative aspect-square w-full bg-[#E5E5E4] overflow-hidden shadow-xl shadow-[#041E42]/5 group">
                      {album.image ? (
                        <ImageLoader 
                          src={album.image}
                          alt={album.title} 
                          fetchPriority={index < 3 ? "high" : "auto"}
                          loading={index < 3 ? "eager" : "lazy"}
                          decoding="async"
                          className="w-full h-full object-cover grayscale mix-blend-multiply group-hover:mix-blend-normal group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]" 
                          curtainClassName="absolute inset-0 bg-[#E5E5E4] transition-opacity duration-500 pointer-events-none"
                        />
                      ) : (
                        <div className={`w-full h-full ${album.cover}`}></div>
                      )}
                  </div>
                  <div className="flex flex-col items-start border-t border-[#041E42]/20 pt-4 w-full">
                      <div className="flex justify-between w-full items-baseline mb-2">
                        <span className="text-[11px] font-mono font-bold tracking-[0.1em] text-[#041E42]/70 uppercase tabular-nums pb-1">Issue {album.year}</span>
                      </div>
                      <h3 className="font-serif text-3xl md:text-4xl text-[#041E42] leading-[1.15] md:leading-[1.0] group-hover:italic transition-all duration-300">
                        {typeset(album.title)}
                      </h3>
                  </div>
                </button>
            ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default DiscographyView;