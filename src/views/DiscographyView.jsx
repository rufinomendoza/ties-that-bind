import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ALBUMS_DATA } from '../data';
import { typeset } from '../utils/formatters';
import SectionHeader from '../components/SectionHeader';
import ImageLoader from '../components/ImageLoader'; // <--- Import
import { useAudio } from '../contexts/AudioContext';

const DiscographyView = ({ openAlbum, navigateTo }) => {
  const { playTrack } = useAudio();
  const demoAlbum = ALBUMS_DATA.find(a => a.id === 12);
  const demoTrack = demoAlbum?.restoration;

  return (
    <div className="min-h-screen pt-40 px-6 md:px-12 pb-32 bg-[#F4F4F3] text-[#041E42] antialiased selection:bg-[#D50032] selection:text-white">
      <Helmet>
        <title>Listening Room | Georgetown Chimes Alumni Association</title>
        <meta name="description" content="Explore the recorded history of the Georgetown Chimes." />
      </Helmet>

      <div className="max-w-[1920px] mx-auto">
        <SectionHeader title="The Listening Room" number="Recorded Works" />
        
{/* 01 — PRESERVATION SECTION */}
        <div className="border-t-2 border-[#041E42] pt-12 pb-32 grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12">
            <div className="lg:col-span-4">
              <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] uppercase block mb-4">01 — The Preservation</span>
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

                {/* THE COHESIVE PLAYER BLOCK (Vignelli-Style integration) */}
                {demoTrack && (
                    <div className="group relative border-t border-b border-[#041E42]/20 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 transition-all duration-500 hover:bg-white hover:px-6 -mx-0 hover:-mx-6 cursor-default">
                        <div className="max-w-md">
                            <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[#D50032] mb-3 block">
                                Hear the Difference: 1958 Pressing
                            </span>
                            <p className="text-sm font-serif leading-relaxed text-[#041E42]/70 italic [text-wrap:balance]">
                              The <strong className="text-[#041E42] font-bold not-italic">Raw</strong> transfer is an uncalibrated extraction from the original 1958 vinyl. The <strong className="text-[#041E42] font-bold not-italic">Master</strong> demonstrates the high-fidelity clarity of a professional-grade, reel-to-reel digitization.
                            </p>
                        </div>

                        <button 
                            onClick={() => playTrack(demoTrack)}
                            className="flex flex-shrink-0 items-center gap-4 group/btn"
                        >
                            <div className="flex flex-col text-right">
                                <span className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42]">Listen</span>
                                <span className="text-[9px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42]/40">A/B Comparison</span>
                            </div>
                            <div className="w-14 h-14 flex items-center justify-center border border-[#041E42] text-[#041E42] group-hover/btn:bg-[#D50032] group-hover/btn:border-[#D50032] group-hover/btn:text-white transition-all duration-300">
                                <span className="text-xl translate-x-0.5">▶</span>
                            </div>
                        </button>
                    </div>
                )}
            </div>
        </div>

        {/* The Grid */}
        <div className="mb-48">
            <div className="flex items-end justify-between border-b-2 border-[#041E42] pb-4 mb-12">
              <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#041E42] uppercase">02 — The Discography</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24">
            {ALBUMS_DATA.map((album, index) => (
                <div 
                  key={album.id} 
                  onClick={() => openAlbum(album)} 
                  className="group cursor-pointer flex flex-col gap-6"
                >
                  <div className="relative aspect-square w-full bg-[#E5E5E4] overflow-hidden shadow-xl shadow-[#041E42]/5 group">
                      {album.image ? (
                        // FIX: Replaced direct DOM manipulation with ImageLoader
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
                  <div className="flex flex-col items-start border-t border-[#041E42]/20 pt-4">
                      <div className="flex justify-between w-full items-baseline mb-2">
                        <span className="text-[11px] font-sans font-bold tracking-[0.1em] text-[#041E42]/70 uppercase tabular-nums">Issue {album.year}</span>
                      </div>
                      <h3 className="font-serif text-3xl md:text-4xl text-[#041E42] leading-[1.15] md:leading-[1.0] group-hover:italic transition-all duration-300">
                        {typeset(album.title)}
                      </h3>
                  </div>
                </div>
            ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default DiscographyView;