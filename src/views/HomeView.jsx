import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { isPast } from '../utils/formatters';
import { EVENTS_DATA } from '../data';
import IMG_CTM_BOND from '../assets/ctm-bond.jpeg';

const HomeView = ({ navigateTo, openAlbumBySlug, openEvent }) => {
  const ctmAlumni = EVENTS_DATA.find(e => e.slug === 'cherry-tree-alumni');
  
  // 1. Create a reference for the next section
  const directoryRef = useRef(null);

  // 2. Scroll function
  const scrollToDirectory = () => {
    directoryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full overflow-x-hidden bg-[#F4F4F3]">
      <Helmet>
        <title>Georgetown Chimes Alumni Association, Inc.</title>
      </Helmet>

      {/* --- HERO SECTION --- */}
      <div className="relative h-screen flex flex-col border-b-2 border-[#041E42] overflow-hidden antialiased">
        <img 
            src="/og-image.jpg"
            alt="Alumni singing"
            className="absolute inset-0 z-0 w-full h-full object-cover object-center grayscale mix-blend-multiply opacity-20 pointer-events-none" 
        />
        <div className="absolute inset-0 z-0 bg-[#041E42] mix-blend-screen opacity-10 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col h-full w-full max-w-[1920px] mx-auto px-6">
          
          {/* Main Content Area: Centered perfectly */}
          <div className="flex-1 flex flex-col items-center justify-center pt-20">
            
            {/* Typography Stack */}
            <div className="w-full flex flex-col items-center justify-center text-center select-none leading-[0.8] text-[#041E42]">
              {/* Added flex justify-center to the h1 itself to force absolute centering */}
              <h1 className="w-full flex justify-center text-[12vw] font-serif tracking-tighter relative z-10">
                <span className="block">BROTHERHOOD</span>
              </h1>
              <h1 className="w-full text-[18vw] font-serif tracking-tighter opacity-40 italic -mt-[3vw] relative z-0">
                HARMONY
              </h1>
              <h1 className="w-full text-[17.5vw] font-serif tracking-tighter block -mt-[4vw] relative z-10">
                HISTORY
              </h1>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-center mt-16 z-20">
               <button onClick={() => openAlbumBySlug('desperate-chimes-desperate-measures')} className="group relative text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42] hover:text-[#D50032] transition-colors">
                  Stream “And So It Goes”
                  <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#041E42] group-hover:bg-[#D50032] transition-colors"></span>
               </button>
              {ctmAlumni && (
                <button 
                    onClick={() => openEvent(ctmAlumni)} 
                    disabled={isPast(ctmAlumni?.date)}
                    className={`group relative text-[11px] font-sans font-bold tracking-[0.1em] uppercase transition-colors ${isPast(ctmAlumni?.date) ? 'text-[#041E42]/70 cursor-default' : 'text-[#041E42] hover:text-[#D50032]'}`}
                >
                    {isPast(ctmAlumni?.date) ? 'Event Archived' : 'Book Cherry Tree Tickets'}
                    {!isPast(ctmAlumni?.date) && <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#041E42] group-hover:bg-[#D50032] transition-colors"></span>}
                </button>
              )}
            </div>
          </div>

          {/* Scroll Down Indicator: Clickable */}
          <button 
            onClick={scrollToDirectory}
            className="group pb-8 flex flex-col items-center gap-4 transition-all duration-300"
          >
            <span className="text-[9px] font-sans font-bold tracking-[0.2em] uppercase text-[#041E42]/40 group-hover:text-[#D50032] group-hover:opacity-100">Scroll</span>
            <div className="w-[1px] h-12 bg-[#041E42]/20 group-hover:bg-[#D50032] transition-colors relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[#D50032] -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </div>
          </button>

        </div>
      </div>

      {/* --- DIRECTORY SECTION (Attached to Ref) --- */}
      <section 
        ref={directoryRef} 
        className="py-24 md:py-32 px-6 md:px-12 text-[#041E42] antialiased"
      >
        <div className="max-w-[1920px] mx-auto border-t-2 border-[#041E42] pt-12 grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12">
             {/* ... (Existing Directory content remains the same) ... */}
             <div className="lg:col-span-4 flex flex-col justify-between">
                <div>
                    <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] uppercase block mb-8">01 — The Directory</span>
                    <h2 className="text-5xl md:text-7xl font-serif text-[#041E42] leading-[1.1] md:leading-[1.0] tracking-tighter mb-12">
                      Welcome the time, my boys: <span className="italic">we meet again.</span>
                    </h2>
                    <div className="w-12 h-[2px] bg-[#041E42]"></div>
                </div>
             </div>
             {/* ... rest of directory code ... */}
        </div>
      </section>
    </div>
  );
};

export default HomeView;
