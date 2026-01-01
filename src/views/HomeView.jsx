import React from 'react';
import { Helmet } from 'react-helmet-async';
import { typeset, isPast } from '../utils/formatters';
import { EVENTS_DATA } from '../data';

// Asset imports
import IMG_CTM_BOND from '../assets/ctm-bond.jpeg';

const HomeView = ({ navigateTo, openAlbumBySlug, openEvent }) => {
  const ctmAlumni = EVENTS_DATA.find(e => e.slug === 'cherry-tree-alumni');

  return (
    <>
      {/* --- SEO INTEGRATION (HomeView) --- */}
      <Helmet>
        {/* 1. Browser Tab Title (User Facing) */}
        {/* This overrides the default title from index.html for the active user */}
        <title>Georgetown Chimes Alumni Association, Inc.</title>
        
        {/* 2. Performance: Preload the Hero Image */}
        {/* This tells the browser to fetch the big background image immediately, preventing "pop-in" */}
        <link rel="preload" as="image" href={IMG_CHERRY_TREE} />

        {/* NOTE: All Open Graph (og:) tags have been removed. */}
        {/* They are now handled globally in public/index.html to prevent duplication glitches. */}
      </Helmet>

      <div className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 border-b-2 border-[#041E42] bg-[#F4F4F3] overflow-hidden antialiased selection:bg-[#D50032] selection:text-white">
        {/* 2. CHANGED: Converted from <div> background to <img> */}
        {/* Added fetchPriority="high" and loading="eager" for LCP boost */}
        {/* Removed opacity transition so it paints immediately */}
        <img 
            src="/images/og-image.jpg" // Reference from public folder
            alt="Alumni singing Good Fellow The Cherry Tree Massacre"
            fetchPriority="high"
            loading="eager"
            className="absolute inset-0 z-0 w-full h-full object-cover object-center grayscale mix-blend-multiply opacity-20 pointer-events-none" 
        />
        
        {/* Added a subtle overlay color to match the previous blend mode effect if needed */}
        <div className="absolute inset-0 z-0 bg-[#041E42] mix-blend-screen opacity-10 pointer-events-none"></div>

        <div className="max-w-[1920px] mx-auto w-full flex flex-col items-center justify-center relative z-10 py-12">
           <div className="flex flex-col items-center justify-center text-center select-none mb-24 leading-none text-[#041E42]">
            {/* LCP Text Optimization: Added [text-wrap:balance] for cleaner mobile rendering */}
            <h1 className="text-[12.5vw] font-serif leading-[0.75] tracking-tighter relative z-10">BROTHERHOOD</h1>
            <h1 className="text-[19vw] font-serif leading-[0.75] tracking-tighter opacity-40 italic -mt-[4vw] relative z-0 px-[0.2em]">HARMONY</h1>
            <h1 className="text-[18vw] font-serif leading-[0.75] tracking-tighter block -mt-[4.5vw] relative z-10">HISTORY</h1>
          </div>
          <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center z-20">
             <button onClick={() => openAlbumBySlug('desperate-chimes-desperate-measures')} className="group relative text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42] hover:text-[#D50032] transition-colors">
                Stream “And So It Goes”
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#041E42] group-hover:bg-[#D50032] transition-colors"></span>
             </button>
            <button 
                onClick={() => openEvent(ctmAlumni)} 
                disabled={isPast(ctmAlumni.date)}
                className={`group relative text-[11px] font-sans font-bold tracking-[0.1em] uppercase transition-colors ${isPast(ctmAlumni.date) ? 'text-[#041E42]/70 cursor-default' : 'text-[#041E42] hover:text-[#D50032]'}`}
            >
                {isPast(ctmAlumni.date) ? 'Event Archived' : 'Book Cherry Tree Tickets'}
                {!isPast(ctmAlumni.date) && <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#041E42] group-hover:bg-[#D50032] transition-colors"></span>}
            </button>
          </div>
        </div>
      </div>

      <section className="py-32 px-6 md:px-12 bg-[#F4F4F3] text-[#041E42] antialiased">
        <div className="max-w-[1920px] mx-auto border-t-2 border-[#041E42] pt-12 grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12">
             <div className="lg:col-span-4 flex flex-col justify-between">
                <div>
                    <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] uppercase block mb-8">01 — The Directory</span>
                    <h2 className="text-5xl md:text-7xl font-serif text-[#041E42] leading-[1.15] md:leading-[1.0] tracking-tighter mb-12">
                      Welcome the time, my boys: <span className="italic">we meet again.</span>
                    </h2>
                    <div className="w-12 h-[2px] bg-[#041E42]"></div>
                </div>
                <div className="hidden lg:block pt-24">
                    <button onClick={() => navigateTo('backstage')} className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42]/70 hover:text-[#041E42] transition-colors flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#041E42] rounded-full"></div>
                        Authorized Access
                    </button>
                </div>
             </div>
             <div className="lg:col-span-8 flex flex-col">
                {[
                  { sub: "Tickets & Gatherings", room: "Box Office", slug: 'events', id: "01" },
                  { sub: "The Recorded Archive", room: "Listening Room", slug: 'albums', id: "02" },
                  { sub: "Specially Commissioned", room: "Haberdashery", slug: 'store', id: "03" },
                  { sub: "Fund the Brotherhood", room: "Patronage", slug: 'philanthropy', id: "04" },
                ].map((item) => (
                  <div key={item.id} onClick={() => navigateTo(item.slug)} className="group flex flex-row items-baseline justify-between py-12 border-b border-[#041E42]/20 transition-all duration-500 hover:bg-white hover:pl-6 -ml-6 pl-6 pr-6 cursor-pointer">
                    <div className="flex items-baseline gap-12 md:gap-16">
                      <span className="text-[11px] font-sans font-bold tracking-[0.1em] text-[#041E42]/70 group-hover:text-[#D50032] transition-colors uppercase">{item.id}</span>
                      <span className="text-5xl md:text-6xl font-serif text-[#041E42] italic leading-none">{item.room}</span>
                    </div>
                    <div className="flex items-center gap-8">
                       <span className="hidden md:block text-[11px] font-sans font-bold tracking-[0.05em] uppercase text-[#041E42]/70">{item.sub}</span>
                       <span className="text-xl font-light text-[#041E42] group-hover:translate-x-2 transition-transform">→</span>
                    </div>
                  </div>
                ))}
                <div className="lg:hidden pt-12 flex justify-center">
                    <button onClick={() => navigateTo('backstage')} className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42]/70 hover:text-[#041E42] transition-colors flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#041E42] rounded-full"></div>
                        Authorized Access
                    </button>
                </div>
             </div>
        </div>
      </section>

      {/* FEATURED EVENT */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 border-t-2 border-[#041E42]">
        <div className="relative bg-[#E5E5E4] overflow-hidden group min-h-[50vh] md:min-h-auto">
             <div className="absolute inset-0 z-0">
                 <img src={IMG_CTM_BOND} alt="The Cherry Tree Massacre Event Poster" className="w-full h-full object-cover grayscale mix-blend-multiply group-hover:mix-blend-normal opacity-90 group-hover:scale-105 transition-all duration-[2s] ease-out" />
             </div>
             <div className="absolute top-6 left-6 md:hidden">
                <span className="bg-[#041E42] text-white px-3 py-1 text-[9px] font-sans font-bold tracking-[0.1em] uppercase">Upcoming</span>
             </div>
        </div>
        <div className="bg-[#F4F4F3] p-12 md:p-24 flex flex-col justify-center border-l-0 md:border-l border-[#041E42]">
            <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] mb-8 block uppercase">02 — Upcoming Concert</span>
            <h3 className="text-6xl md:text-8xl font-serif mb-12 text-[#041E42] leading-[1.15] md:leading-[1.0] tracking-tighter -ml-1">The Cherry Tree Massacre</h3>
            <div className="w-24 h-[2px] bg-[#041E42]/10 mb-12"></div>
            <div className="mb-16 max-w-md text-[#041E42]">
                <h4 className="text-2xl font-serif font-bold leading-tight mb-6">Most traditions fade. <br/> This one just gets louder.</h4>
                <p className="text-lg font-serif italic leading-relaxed opacity-80">In 1974, we sang for survival. In 2026, we sing for the legacy. Two nights. One historic setlist.</p>
            </div>
            {/* FEATURE LINK: Direct to CTM II instead of generic Agenda */}
            <button 
                onClick={() => openEvent(ctmAlumni)} 
                disabled={isPast(ctmAlumni.date)}
                className={`w-full md:w-auto flex items-center justify-between md:justify-start gap-8 py-5 border-t border-b border-[#041E42] md:border-0 transition-all duration-300 group/btn ${isPast(ctmAlumni.date) ? 'opacity-50 cursor-default' : 'hover:pl-4'}`}
            >
                <span className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42]">
                    {isPast(ctmAlumni.date) ? 'View Archived Event' : 'Event Details & Tickets'}
                </span>
                <span className="text-xl font-light group-hover/btn:translate-x-2 transition-transform">→</span>
            </button>
        </div>
      </section>
    </>
  );
};

export default HomeView;