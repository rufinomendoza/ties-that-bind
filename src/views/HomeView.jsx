import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { isPast } from '../utils/formatters';
import { EVENTS_DATA } from '../data';

// Asset imports
import IMG_CTM_BOND from '../assets/ctm-bond.jpeg';

const HomeView = ({ navigateTo, openAlbumBySlug, openEvent }) => {
  const ctmAlumni = EVENTS_DATA.find(e => e.slug === 'cherry-tree-alumni');
  
  // Ref for smooth scroll
  const directoryRef = useRef(null);

  const scrollToDirectory = () => {
    directoryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-[#F4F4F3] selection:bg-[#D50032] selection:text-white">
      <Helmet>
        <title>Georgetown Chimes Alumni Association, Inc.</title>
      </Helmet>

      {/* --- HERO SECTION --- */}
      <div className="relative h-screen w-full flex flex-col border-b-2 border-[#041E42] overflow-hidden antialiased">
        <img 
            src="/og-image.jpg"
            alt="Alumni singing"
            fetchPriority="high"
            loading="eager"
            className="absolute inset-0 z-0 w-full h-full object-cover object-center grayscale mix-blend-multiply opacity-20 pointer-events-none" 
        />
        <div className="absolute inset-0 z-0 bg-[#041E42] mix-blend-screen opacity-10 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col h-full w-full max-w-[1920px] mx-auto px-4">
          
          {/* Main Content Area */}
          <div className="flex-1 flex flex-col items-center justify-center pt-12">
            
            {/* Typography Stack */}
            {/* ✅ SEMANTIC FIX: Single H1 for Screen Readers, Decorative visual stack */}
            <h1 className="sr-only">Brotherhood, Harmony, History</h1>
            
            <div 
              className="w-full flex flex-col items-center justify-center text-center select-none leading-[0.8] text-[#041E42] overflow-visible"
              aria-hidden="true"
            >
              {/* BROTHERHOOD */}
              <span className="whitespace-nowrap text-[11.5vw] md:text-[12vw] font-serif tracking-tighter relative z-10">
                BROTHERHOOD
              </span>
              
              {/* HARMONY - Added italic correction for 'Y' clipping */}
              <span className="whitespace-nowrap text-[16vw] md:text-[19vw] font-serif tracking-tighter opacity-40 italic -mt-[3vw] relative z-0 pr-[0.25em]">
                HARMONY
              </span>
              
              {/* HISTORY */}
              <span className="whitespace-nowrap text-[16vw] md:text-[17vw] font-serif tracking-tighter block -mt-[3.5vw] relative z-10">
                HISTORY
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-center mt-12 md:mt-16 z-20">
               <button onClick={() => openAlbumBySlug('desperate-chimes-desperate-measures')} className="group relative text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42] hover:text-[#D50032] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D50032] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F4F4F3]">
                  Stream “And So It Goes”
                  <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#041E42] group-hover:bg-[#D50032] transition-colors"></span>
               </button>
              {ctmAlumni && (
                <button 
                    onClick={() => openEvent(ctmAlumni)} 
                    disabled={isPast(ctmAlumni?.date)}
                    className={`group relative text-[11px] font-sans font-bold tracking-[0.1em] uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D50032] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F4F4F3] ${isPast(ctmAlumni?.date) ? 'text-[#041E42]/70 cursor-default' : 'text-[#041E42] hover:text-[#D50032]'}`}
                >
                    {isPast(ctmAlumni?.date) ? 'Event Archived' : 'Book Cherry Tree Tickets'}
                    {!isPast(ctmAlumni?.date) && <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#041E42] group-hover:bg-[#D50032] transition-colors"></span>}
                </button>
              )}
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <button 
            onClick={scrollToDirectory}
            className="group pb-8 flex flex-col items-center gap-4 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D50032] rounded-sm"
            aria-label="Scroll down to directory"
          >
            <span className="text-[9px] font-sans font-bold tracking-[0.2em] uppercase text-[#041E42]/40 group-hover:text-[#D50032]">Scroll</span>
            <div className="w-[1px] h-10 bg-[#041E42]/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[#D50032] -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </div>
          </button>
        </div>
      </div>

      {/* --- DIRECTORY SECTION --- */}
      <section 
        ref={directoryRef} 
        className="py-24 md:py-32 px-6 md:px-12 bg-[#F4F4F3] text-[#041E42] antialiased"
      >
        <div className="max-w-[1920px] mx-auto border-t-2 border-[#041E42] pt-12 grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12">
             <div className="lg:col-span-4 flex flex-col justify-between">
                <div>
                    <span className="text-[11px] font-mono font-bold tracking-[0.05em] text-[#D50032] uppercase block mb-8">01 — The Directory</span>
                    <h2 className="text-5xl md:text-7xl font-serif text-[#041E42] leading-[1.1] md:leading-[1.0] tracking-tighter mb-12 [text-wrap:balance]">
                      Welcome the time, my boys: <span className="italic">we meet again.</span>
                    </h2>
                    <div className="w-12 h-[2px] bg-[#041E42]"></div>
                </div>
                <div className="hidden lg:block pt-24">
                    <button onClick={() => navigateTo('backstage')} className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42]/70 hover:text-[#041E42] transition-colors flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D50032] rounded-sm p-1">
                        <div className="w-1.5 h-1.5 bg-[#041E42] rounded-full"></div>
                        Authorized Access
                    </button>
                </div>
             </div>

             <div className="lg:col-span-8 flex flex-col">
                {[
                  { sub: "Tickets & Gatherings", room: "Box Office", slug: 'agenda', id: "01" },
                  { sub: "The Recorded Archive", room: "Listening Room", slug: 'discography', id: "02" },
                  { sub: "Specially Commissioned", room: "Haberdashery", slug: 'store', id: "03" },
                  { sub: "Fund the Brotherhood", room: "Patronage", slug: 'philanthropy', id: "04" },
                ].map((item) => (
                  <button 
                    key={item.id} 
                    onClick={() => navigateTo(item.slug)} 
                    type="button"
                    className="w-full text-left group flex flex-row items-baseline justify-between py-10 md:py-12 border-b border-[#041E42]/20 transition-all duration-500 hover:bg-white hover:px-6 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D50032] focus-visible:bg-white focus-visible:px-6"
                  >
                    <div className="flex items-baseline gap-6 md:gap-16">
                      <span className="text-[11px] font-mono font-bold tracking-[0.1em] text-[#041E42]/70 group-hover:text-[#D50032] transition-colors uppercase">{item.id}</span>
                      <span className="text-4xl md:text-6xl font-serif text-[#041E42] italic leading-none">{item.room}</span>
                    </div>
                    <div className="flex items-center gap-8">
                       <span className="hidden md:block text-[11px] font-sans font-bold tracking-[0.05em] uppercase text-[#041E42]/70">{item.sub}</span>
                       <span className="text-xl font-light text-[#041E42] group-hover:translate-x-2 transition-transform">→</span>
                    </div>
                  </button>
                ))}
                <div className="lg:hidden pt-12 flex justify-center">
                    <button onClick={() => navigateTo('backstage')} className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42]/70 hover:text-[#041E42] transition-colors flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D50032] rounded-sm p-1">
                        <div className="w-1.5 h-1.5 bg-[#041E42] rounded-full"></div>
                        Authorized Access
                    </button>
                </div>
             </div>
        </div>
      </section>

      {/* --- FEATURED EVENT --- */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 border-t-2 border-[#041E42]">
        <div className="relative bg-[#E5E5E4] overflow-hidden group min-h-[50vh] md:min-h-auto">
             <div className="absolute inset-0 z-0">
                 <img src={IMG_CTM_BOND} alt="The Cherry Tree Massacre" className="w-full h-full object-cover grayscale mix-blend-multiply group-hover:mix-blend-normal opacity-90 group-hover:scale-105 transition-all duration-[2s] ease-out" />
             </div>
        </div>
        <div className="bg-[#F4F4F3] p-8 md:p-24 flex flex-col justify-center border-l-0 md:border-l border-[#041E42]">
            <span className="text-[11px] font-mono font-bold tracking-[0.05em] text-[#D50032] mb-8 block uppercase">02 — Upcoming Concert</span>
            <h3 className="text-5xl md:text-8xl font-serif mb-12 text-[#041E42] leading-[1.1] md:leading-[1.0] tracking-tighter [text-wrap:balance]">The Cherry Tree Massacre</h3>
            <div className="w-24 h-[2px] bg-[#041E42]/10 mb-12"></div>
            <div className="mb-16 max-w-md text-[#041E42]">
                <h4 className="text-xl md:text-2xl font-serif font-bold leading-tight mb-6 [text-wrap:balance]">Most traditions fade. <br/> This one just gets louder.</h4>
                <p className="text-lg font-serif italic leading-relaxed opacity-80">In 1974, we sang for survival. In 2026, we sing for the legacy.</p>
            </div>
            {ctmAlumni && (
                <button 
                    onClick={() => openEvent(ctmAlumni)} 
                    disabled={isPast(ctmAlumni.date)}
                    className="w-full md:w-auto flex items-center justify-between md:justify-start gap-8 py-5 border-t border-b border-[#D50032] md:border-0 transition-all duration-300 group/btn hover:translate-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D50032]"
                >
                    <span className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#D50032]">Event Details & Tickets</span>
                    <span className="text-xl font-light transition-transform text-[#D50032]">→</span>
                </button>
            )}
        </div>
      </section>
    </div>
  );
};

export default HomeView;