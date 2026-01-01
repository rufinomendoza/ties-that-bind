import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ALBUMS_DATA } from '../data';
import { typeset } from '../utils/formatters';
import SectionHeader from '../components/SectionHeader';

const DiscographyView = ({ openAlbum, navigateTo }) => {
  // 1. Simplified State: We only need the animation trigger now
  const [triggerAnim, setTriggerAnim] = useState(false);

  // 2. Trigger animation on mount (no waiting for images)
  useEffect(() => {
    setTimeout(() => setTriggerAnim(true), 100);
  }, []);

  // 3. Removed the "if (!imagesLoaded) return" block entirely

  return (
    <div className="min-h-screen pt-40 px-6 md:px-12 pb-32 bg-[#F4F4F3] text-[#041E42] antialiased selection:bg-[#D50032] selection:text-white">
      {/* --- SEO INTEGRATION --- */}
      <Helmet>
        <title>Listening Room | Georgetown Chimes Alumni Association</title>
        <meta name="description" content="Explore the recorded history of the Georgetown Chimes, featuring albums from 1958 to present." />
      </Helmet>
      {/* ----------------------- */}

      <div className="max-w-[1920px] mx-auto">
        <SectionHeader title="The Listening Room" number="Recorded Works" />
        
        {/* Preservation Section */}
        <div className="border-t-2 border-[#041E42] pt-12 pb-32 grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12">
            <div className="lg:col-span-4"><span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] uppercase block mb-4">01 — The Preservation</span></div>
            <div className="lg:col-span-8">
                <h3 className="text-5xl md:text-7xl font-serif leading-[1.15] md:leading-[1.0] text-[#041E42] tracking-tighter mb-12">A living record. Currently undergoing restoration.</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-[#041E42]/20 pt-8">
                    <p className="text-xl text-[#041E42] font-serif leading-relaxed">Our preservationists are currently digitizing master tapes from the 1960s and ’70s to high-fidelity standards.</p>
                    <div className="flex flex-col items-start gap-4">
                        <button onClick={() => window.open('https://thechimes.notion.site', '_blank')} className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase border-b border-[#041E42]/20 hover:text-[#D50032] hover:border-[#D50032] transition-colors pb-1">Explore the Rough Cuts &#x2197;&#xFE0E;</button>
                        <button onClick={() => navigateTo('philanthropy')} className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase border-b border-[#041E42]/20 hover:text-[#D50032] hover:border-[#D50032] transition-colors pb-1">Support Digitization</button>
                    </div>
                </div>
            </div>
        </div>

        {/* The Grid */}
        <div className="mb-48">
            <div className="flex items-end justify-between border-b-2 border-[#041E42] pb-4 mb-12"><span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#041E42] uppercase">02 — The Discography</span></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24">
            {ALBUMS_DATA.map((album, index) => (
                <div key={album.id} onClick={() => openAlbum(album)} className={`group cursor-pointer flex flex-col gap-6 transition-all duration-[1000ms] ${triggerAnim ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 50}ms` }}>
                <div className="relative aspect-square w-full bg-[#E5E5E4] overflow-hidden shadow-xl shadow-[#041E42]/5">
                    {album.image ? (
                        <img 
                            src={album.image} 
                            alt={album.title} 
                            loading="lazy" 
                            className="w-full h-full object-cover transition-all duration-[2s] grayscale mix-blend-multiply group-hover:mix-blend-normal group-hover:grayscale-0 group-hover:scale-105" 
                        />
                    ) : (
                        <div className={`w-full h-full ${album.cover}`}></div>
                    )}
                    {album.badge && <div className="absolute top-0 right-0 bg-[#D50032] text-[#F4F4F3] px-4 py-2 text-[10px] font-sans font-bold tracking-[0.1em] uppercase">{album.badge}</div>}
                </div>
                <div className="flex flex-col items-start border-t border-[#041E42]/20 pt-4">
                    <div className="flex justify-between w-full items-baseline mb-2"><span className="text-[11px] font-sans font-bold tracking-[0.1em] text-[#041E42]/70 uppercase tabular-nums">Issue {album.year}</span></div>
                    <h3 className="font-serif text-3xl md:text-4xl text-[#041E42] leading-[1.15] md:leading-[1.0] group-hover:italic transition-all duration-500">{typeset(album.title)}</h3>
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