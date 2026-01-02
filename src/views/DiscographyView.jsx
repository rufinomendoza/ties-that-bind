import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ALBUMS_DATA } from '../data';
import { typeset } from '../utils/formatters';
import SectionHeader from '../components/SectionHeader';

const DiscographyView = ({ openAlbum, navigateTo }) => {
  // Logic: We removed the setTimeout and triggerAnim state. 
  // The Ferrari crossfade in App.jsx now handles the entrance.

  return (
    <div className="min-h-screen pt-40 px-6 md:px-12 pb-32 bg-[#F4F4F3] text-[#041E42] antialiased selection:bg-[#D50032] selection:text-white">
      <Helmet>
        <title>Listening Room | Georgetown Chimes Alumni Association</title>
        <meta name="description" content="Explore the recorded history of the Georgetown Chimes." />
      </Helmet>

      <div className="max-w-[1920px] mx-auto">
        <SectionHeader title="The Listening Room" number="Recorded Works" />
        
        {/* Preservation Section */}
        <div className="border-t-2 border-[#041E42] pt-12 pb-32 grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12">
            <div className="lg:col-span-4">
              <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] uppercase block mb-4">01 — The Preservation</span>
            </div>
            <div className="lg:col-span-8">
                <h3 className="text-5xl md:text-7xl font-serif leading-[1.15] md:leading-[1.0] text-[#041E42] tracking-tighter mb-12">A living record. Currently undergoing restoration.</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-[#041E42]/20 pt-8">
                    <p className="text-xl text-[#041E42] font-serif leading-relaxed">Our preservationists are currently digitizing master tapes from the 1960s and ’70s to high-fidelity standards.</p>
                    <div className="flex flex-col items-start gap-4">
                        <button onClick={() => window.open('https://thechimes.notion.site', '_blank')} className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase border-b border-[#041E42]/20 hover:text-[#D50032] hover:border-[#D50032] transition-colors pb-1 text-left">Explore the Rough Cuts &#x2197;&#xFE0E;</button>
                        <button onClick={() => navigateTo('philanthropy')} className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase border-b border-[#041E42]/20 hover:text-[#D50032] hover:border-[#D50032] transition-colors pb-1">Support Digitization</button>
                    </div>
                </div>
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
                  <div className="relative aspect-square w-full bg-[#E5E5E4] overflow-hidden shadow-xl shadow-[#041E42]/5 group"> {/* Ensure 'group' is here */}
                      {album.image ? (
                        <>
                      <img 
                        src={album.image}
                        fetchPriority={index < 3 ? "high" : "auto"}
                        alt={album.title} 
                        // FIX: Eager load the first 3 images to match fetchPriority; lazy load the rest
                        loading={index < 3 ? "eager" : "lazy"}
                        decoding="async"
                        onLoad={(e) => e.currentTarget.parentElement.classList.add('is-loaded')}
                        ref={(img) => {
                          if (img && img.complete) img.parentElement.classList.add('is-loaded');
                        }}
                        className="w-full h-full object-cover grayscale mix-blend-multiply group-hover:mix-blend-normal group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] opacity-0 [.is-loaded_&]:opacity-100" 
                      />
                          {/* Overlay that vanishes when the parent has .is-loaded */}
                          <div className="absolute inset-0 bg-[#E5E5E4] transition-opacity duration-500 pointer-events-none [.is-loaded_&]:opacity-0" />
                        </>
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