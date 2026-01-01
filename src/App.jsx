import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Menu, X } from 'lucide-react';

// Import Data
import { EVENTS_DATA, ALBUMS_DATA, DONOR_TIERS, STORE_DATA } from './data';
import Logo from './components/Logo';

// We ONLY need images used directly in the App.jsx layout (Hero & Feature)
import IMG_CHERRY_TREE from './assets/composite-set-compressed.jpg';
import IMG_CTM_BOND from './assets/ctm-bond.jpeg';

// --- Preview Placeholders (Comment out for Production) ---
// const IMG_CHERRY_TREE = "https://placehold.co/1920x1080/0A0A0A/FFFFFF?text=The+Classic";
// const IMG_CTM_BOND = "https://placehold.co/1200x1600/111111/EEEEEE?text=Cherry+Tree+Massacre";
// const IMG_NECKTIE = "https://placehold.co/1000x1200/E5E5E4/041E42?text=Necktie";
// const IMG_BOWTIE = "https://placehold.co/1000x1200/E5E5E4/041E42?text=Bowtie";
// const IMG_DCDM = "https://placehold.co/1000x1000/2A3B55/FFFFFF?text=DCDM";
// const IMG_PARTNERS = "https://placehold.co/1000x1000/4A5B75/FFFFFF?text=Partners";
// const IMG_THREE_STRIPES = "https://placehold.co/1000x1000/6A7B95/FFFFFF?text=Three+Stripes";
// const IMG_PROSPECT = "https://placehold.co/1000x1000/8A9BB5/FFFFFF?text=36th+%26+Prospect";
// const IMG_BATTLE_GEAR = "https://placehold.co/1000x1000/9AABCA/FFFFFF?text=Battle+Gear";
// const IMG_PSRC = "https://placehold.co/1000x1000/B0BCCF/FFFFFF?text=PSRC";
// const IMG_LTGCR = "https://placehold.co/1000x1000/C4CDDC/FFFFFF?text=LTGCR";
// const IMG_HOYA_SAXA = "https://placehold.co/1000x1000/D8DDE6/FFFFFF?text=Hoya+Saxa";
// const IMG_CHIMES_75 = "https://placehold.co/1000x1000/2A3B55/FFFFFF?text=Chimes+75";
// const IMG_CHIMES_66 = "https://placehold.co/1000x1000/4A5B75/FFFFFF?text=Chimes+66";
// const IMG_1959 = "https://placehold.co/1000x1000/6A7B95/FFFFFF?text=1959";
// const IMG_UNDER_THE_TREE = "https://placehold.co/1000x1000/8A9BB5/FFFFFF?text=Under+The+Tree";
// const IMG_PUERTO_RICO = "https://placehold.co/1200x800/111111/EEEEEE?text=Puerto+Rico";


const NAV_LINKS = [
  { id: 'agenda', label: 'Box Office' },
  { id: 'discography', label: 'Listening Room' },
  { id: 'store', label: 'Haberdasher' },
  { id: 'philanthropy', label: 'Patronage' },
  { id: 'backstage', label: 'Backstage' }
];

// Helper: Check if an event date has passed
const isPast = (dateStr) => {
  const eventDate = new Date(dateStr);
  const today = new Date();
  return eventDate < today;
};

// --- Typographic Helper: The Typesetter ---
const typeset = (text) => {
  if (!text) return text;
  if (Array.isArray(text)) return text.map(t => typeset(t));
  return text
    .replace(/(\W|^)"/g, '$1“').replace(/"/g, '”') // Smart Quotes
    .replace(/'/g, '’') // Smart Apostrophes
    .replace(/(\d)-(\d)/g, '$1–$2') // En-dashes for ranges
    .replace(/ - /g, ' — ') // Em-dashes for breaks
    .replace(/ \/ /g, ' · '); // ADDED: Slashes to Interpuncts
};

// --- Shared Components ---
const SectionHeader = ({ title, number }) => (
  <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#041E42] pb-8 mb-32 fade-in-element gap-4">
    <h2 className="text-6xl md:text-9xl font-serif text-[#041E42] tracking-tight leading-none [text-wrap:balance]">
      {typeset(title)}
    </h2>
    <span className="text-[11px] font-sans font-bold tracking-[0.1em] text-[#041E42]/70 uppercase md:mb-4">
      {number}
    </span>
  </div>
);

// --- Swiss System NavBar ---
const NavBar = ({ activePage, navigateTo, mobileMenuOpen, setMobileMenuOpen }) => {
  const NavButton = ({ page, children, mobile = false }) => (
    <button onClick={() => { navigateTo(page); if (mobile) setMobileMenuOpen(false); }} className={`${mobile ? 'block w-full text-center text-4xl font-serif py-6 text-[#041E42] border-b border-[#041E42]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D50032] focus-visible:ring-inset' : `h-full flex items-center text-[10px] font-bold tracking-[0.25em] uppercase transition-all duration-500 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D50032] focus-visible:ring-offset-4 ${activePage === page ? 'text-[#041E42]' : 'text-[#595959] hover:text-[#041E42]'}`}`}>
      {children}
      {!mobile && <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#041E42] transform origin-left transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${activePage === page ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>}
    </button>
  );
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#F4F4F3] border-b-2 border-[#041E42] h-20 md:h-24 px-6 md:px-12 transition-all duration-500">
        <div className="max-w-[1920px] mx-auto h-full flex justify-between items-center">
          <button className="flex items-center gap-4 cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D50032] focus-visible:ring-offset-4" onClick={() => navigateTo('home')} aria-label="Home">
            <Logo className="h-6 w-auto text-[#041E42] group-hover:text-[#D50032] transition-colors duration-300" />
          </button>
          <div className="hidden lg:flex items-stretch h-full gap-12">
            {NAV_LINKS.map((link) => (
              <NavButton key={link.id} page={link.id}>
                {link.label}
              </NavButton>
            ))}
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-3 -mr-3 text-[#041E42] hover:text-[#D50032] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D50032]" aria-label="Toggle Menu">{mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}</button>
        </div>
      </nav>
       <div className={`fixed inset-0 z-40 bg-[#F4F4F3] px-6 md:px-12 pt-32 pb-12 overflow-y-auto transition-transform duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
         <div className="max-w-[1920px] mx-auto flex flex-col h-full justify-between">
           <div className="flex flex-col">
              <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] mb-8 block uppercase border-b border-[#041E42]/20 pb-4">
                Directory
              </span>
              
              {/* Explicit "Home" link for Mobile Only */}
              <NavButton page="home" mobile={true}>Home</NavButton>
              
              {/* The rest of the links from your configuration */}
              {NAV_LINKS.map((link) => (
                <NavButton key={link.id} page={link.id} mobile={true}>
                  {link.label}
                </NavButton>
              ))}
            </div>
        <div className="mt-12 space-y-8"><div className="grid grid-cols-2 gap-8"><div><span className="text-[9px] font-sans font-bold tracking-[0.2em] text-[#041E42]/70 uppercase block mb-4">External</span><div className="flex flex-col gap-4"><a href="https://georgetownchimes.org" target="_blank" rel="noreferrer" className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42]">The Actives &#x2197;&#xFE0E;</a><a href="https://3611.georgetownchimes.org" target="_blank" rel="noreferrer" className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42]">The House &#x2197;&#xFE0E;</a></div></div></div><p className="text-[9px] font-sans font-bold tracking-[0.2em] text-[#041E42]/70 uppercase mb-12">© {new Date().getFullYear()} GCAA, Inc.</p></div>
        </div>
      </div>
    </>
  );
};

// --- Home View ---
const ctmAlumni = EVENTS_DATA.find(e => e.slug === 'cherry-tree-alumni');
const HomeView = ({ navigateTo, openAlbumBySlug, openEvent }) => {

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
            src={IMG_CHERRY_TREE}
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

// --- Agenda View ---
const AgendaView = ({ navigateTo, openEvent }) => (
    <div className="min-h-screen pt-40 px-6 md:px-12 pb-32 bg-[#F4F4F3] text-[#041E42] antialiased selection:bg-[#D50032] selection:text-white">
      {/* --- SEO INTEGRATION --- */}
      <Helmet>
        <title>Box Office | Georgetown Chimes Alumni Association</title>
        <meta name="description" content="Upcoming concerts, events, and reunions for the Georgetown Chimes." />
      </Helmet>
      {/* ----------------------- */}

      <div className="max-w-[1920px] mx-auto">
        <SectionHeader title="The 2026 Season" number="Tickets & Gatherings" />
        {/* ... (Rest of AgendaView Logic remains unchanged) ... */}
        <div className="hidden md:grid grid-cols-12 gap-12 pb-4 mb-4 border-b-2 border-[#041E42] opacity-100">
            <span className="col-span-2 text-[10px] font-sans font-bold tracking-[0.1em] uppercase">Date</span>
            <span className="col-span-7 text-[10px] font-sans font-bold tracking-[0.1em] uppercase">Program</span>
            <span className="col-span-3 text-[10px] font-sans font-bold tracking-[0.1em] uppercase text-right">Logistics</span>
        </div>
        <div className="flex flex-col group/list border-t-2 md:border-t-0 border-[#041E42]">
          {EVENTS_DATA.map((event) => (
            <div key={event.id} role="button" tabIndex={0} onClick={() => openEvent(event)} className="group border-b border-[#041E42]/20 py-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-baseline relative cursor-pointer transition-all duration-500 hover:pl-4 -ml-4 pl-4 pr-4 group-hover/list:opacity-30 hover:!opacity-100 focus-visible:opacity-100 focus-visible:outline-none">
              <div className="md:col-span-2 flex flex-col">
                 <span className="text-[11px] font-sans font-bold tracking-[0.1em] text-[#041E42]/70 uppercase mb-2">{event.date.split(' ')[0]}</span>
                 <span className="text-4xl font-serif text-[#041E42] italic">{event.date.split(' ')[1].replace(',', '')}</span>
              </div>
              <div className="md:col-span-7">
                <span className="inline-block mb-6 text-[10px] font-sans font-bold tracking-[0.1em] uppercase text-[#D50032]">{event.type}</span>
                <h3 className="text-5xl md:text-7xl font-serif mb-6 text-[#041E42] leading-[1.15] md:leading-[1.0] tracking-tight group-hover:italic transition-all duration-500 [text-wrap:balance]">{typeset(event.title)}</h3>
                <p className="text-[#041E42] font-serif text-lg md:text-xl max-w-xl leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity duration-700">{Array.isArray(event.description) ? typeset(event.description[0]) : typeset(event.description)}</p>
              </div>
              <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between h-full gap-8">
                <div className="text-left mb:text-right">
                    <span className="block text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42] mb-1">{event.time}</span>
                    <span className="block text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42]/70">{event.location}</span>
                </div>
                <span className="flex items-center gap-4 text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[#041E42] group-hover:text-[#D50032] transition-colors"><span>Details</span><span className="text-lg font-light translate-y-[-1px]">→</span></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
);

// --- Event Detail View ---
const EventDetailView = ({ event, navigateTo }) => {
  if (!event) return null;

  // Helper to extract plain text for meta description
  const metaDescription = Array.isArray(event.description) 
    ? event.description[0] 
    : event.description;

  return (
    <div className="min-h-screen pt-40 px-6 md:px-12 pb-32 bg-[#F4F4F3] text-[#041E42] antialiased selection:bg-[#D50032] selection:text-white">
      {/* --- SEO INTEGRATION --- */}
      <Helmet>
        <title>{`${typeset(event.title)} | Georgetown Chimes Alumni Association`}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>
      {/* ----------------------- */}

      <div className="max-w-[1920px] mx-auto">
        <div className="flex justify-between items-end mb-12">
            <button onClick={() => navigateTo('agenda')} className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase flex items-center gap-4 hover:text-[#D50032] transition-colors opacity-60 hover:opacity-100 group py-4 -my-4">
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Return to the Box Office
            </button>
        </div>
        {/* ... (Rest of EventDetailView Logic remains unchanged) ... */}
        <div className="border-t-2 border-[#041E42] pt-12 grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12">
          <div className="lg:col-span-4">
             <div className="sticky top-32">
                 <div className="aspect-[3/4] w-full bg-[#E5E5E4] mb-12 relative overflow-hidden shadow-2xl shadow-[#041E42]/5">
                    {event.image ? (
                        <img src={event.image} alt={event.title} className="w-full h-full object-cover grayscale mix-blend-multiply group-hover:mix-blend-normal hover:grayscale-0 transition-all duration-[1.5s]" />
                    ) : <div className="w-full h-full bg-[#041E42]/5" />}
                </div>
                <div className="space-y-0 border-t border-[#041E42]">
                    <div className="flex justify-between items-baseline py-4 border-b border-[#041E42]/20"><span className="text-[11px] font-sans font-bold tracking-[0.05em] uppercase text-[#D50032]">Date</span><span className="text-lg font-sans font-bold tracking-tight">{event.date}</span></div>
                    <div className="flex justify-between items-baseline py-4 border-b border-[#041E42]/20"><span className="text-[11px] font-sans font-bold tracking-[0.05em] uppercase text-[#041E42]/70">Time</span><span className="text-lg font-sans font-bold tracking-tight">{event.time}</span></div>
                    <div className="flex justify-between items-baseline py-4 border-b border-[#041E42]/20"><span className="text-[11px] font-sans font-bold tracking-[0.05em] uppercase text-[#041E42]/70">Venue</span><span className="text-lg font-sans font-bold tracking-tight text-right max-w-[60%]">{event.location}</span></div>
                </div>
                <div className="mt-12 space-y-4">
                {event.actions ? event.actions.map((action, idx) => (
                    <a key={idx} href={action.link} target="_blank" rel="noopener noreferrer" className={`group w-full flex items-center justify-between border-t border-b py-5 px-6 transition-all duration-300 ${action.primary ? "border-[#041E42] bg-[#041E42] text-[#F4F4F3] hover:bg-[#D50032] hover:border-[#D50032]" : "border-[#041E42]/20 text-[#041E42] hover:bg-[#041E42] hover:text-[#F4F4F3] hover:border-[#041E42]"}`}><span className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase">{action.label}</span><span className="text-lg font-light group-hover:translate-x-2 transition-transform">→</span></a>
                )) : event.link && (
                    <a href={event.link} target="_blank" rel="noopener noreferrer" className="group w-full flex items-center justify-between border-t border-b border-[#041E42] bg-[#041E42] text-[#F4F4F3] py-5 px-6 hover:bg-[#D50032] hover:border-[#D50032] transition-colors"><span className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase">{event.type === 'CONCERT' ? 'Purchase Tickets' : 'Event Info'}</span><span className="text-lg font-light group-hover:translate-x-2 transition-transform">→</span></a>
                )}
                </div>
             </div>
          </div>
          <div className="lg:col-span-8">
            <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] mb-8 block uppercase">{event.eyebrow || event.type}</span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif mb-12 text-[#041E42] leading-[1.15] md:leading-[1.0] tracking-tighter [text-wrap:balance]">{typeset(event.title)}</h1>
            <div className="text-xl md:text-3xl font-serif italic text-[#041E42] mb-24 leading-relaxed max-w-[65ch] space-y-8 pl-6 border-l-2 border-[#041E42]/10">
                {Array.isArray(event.description) ? event.description.map((para, i) => <p key={i}>{typeset(para)}</p>) : <p>{typeset(event.description)}</p>}
            </div>
            {event.guestGroups && (
                <div className="mb-32 border-t-2 border-[#041E42] pt-12">
                    <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] mb-12 block uppercase">Guest Groups</span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                        {event.guestGroups.map((group, idx) => (
                           <div key={idx} className="border-b border-[#041E42]/10 pb-4"><h4 className="text-3xl font-serif text-[#041E42]">{typeset(group)}</h4></div>
                        ))}
                    </div>
                </div>
            )}
            {event.schedule && (
              <div className="mb-32 border-t-2 border-[#041E42] pt-12">
                <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] mb-12 block uppercase">Itinerary</span>
                {event.schedule.map((item, idx) => (
                    <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-[#041E42]/20 py-8 items-baseline">
                      <div className="md:col-span-3 text-[11px] font-sans font-bold tracking-[0.1em] text-[#041E42] uppercase">{item.time && <div className="block mb-2">{item.time}</div>}{item.location && <div className="block opacity-60 whitespace-pre-line">{item.location}</div>}</div>
                      <div className="md:col-span-9"><h4 className="text-3xl md:text-4xl font-serif text-[#041E42] mb-4 italic">{typeset(item.title)}</h4><p className="text-[#041E42] text-lg font-serif leading-relaxed max-w-xl opacity-80">{typeset(item.description)}</p></div>
                    </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Discography View ---
// --- Discography View ---
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

// --- Album Detail View ---
const AlbumDetailView = ({ selectedAlbum, navigateTo }) => {
  if (!selectedAlbum) return null;
  return (
    <div className="min-h-screen pt-40 px-6 md:px-12 pb-32 bg-[#F4F4F3] text-[#041E42] antialiased selection:bg-[#D50032] selection:text-white">
      {/* --- SEO INTEGRATION --- */}
      <Helmet>
        <title>{`${typeset(selectedAlbum.title)} | Georgetown Chimes Alumni Association`}</title>
        <meta name="description" content={selectedAlbum.description || `Listen to ${selectedAlbum.title} (${selectedAlbum.year}) by the Georgetown Chimes.`} />
      </Helmet>
      {/* ----------------------- */}

      <div className="max-w-[1920px] mx-auto">
        <div className="flex justify-between items-end mb-12">
            <button onClick={() => navigateTo('discography')} className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase flex items-center gap-4 hover:text-[#D50032] transition-colors opacity-60 hover:opacity-100 group py-4 -my-4">
                <span className="group-hover:-translate-x-1 transition-transform">←</span> Return to the Listening Room
            </button>
        </div>
        
        {/* ... (Rest of AlbumDetailView Logic remains unchanged) ... */}
        
        <div className="border-t-2 border-[#041E42] pt-12 grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12">
          
          {/* Sidebar */}
          <div className="lg:col-span-4">
             <div className="sticky top-32">
                <div className="aspect-square w-full overflow-hidden bg-[#E5E5E4] mb-12 shadow-2xl shadow-[#041E42]/5">
                  {selectedAlbum.image ? (
                    <img src={selectedAlbum.image} alt={selectedAlbum.title} className="w-full h-full object-cover grayscale mix-blend-multiply transition-all duration-[2s] hover:grayscale-0 hover:mix-blend-normal" />
                  ) : (
                    <div className={`aspect-square w-full ${selectedAlbum.cover}`}></div>
                  )}
                </div>
                <div className="space-y-0 border-t border-[#041E42]">
                   <div className="flex justify-between items-baseline py-4 border-b border-[#041E42]/20">
                        <span className="text-[11px] font-sans font-bold tracking-[0.05em] uppercase text-[#D50032]">Issue</span>
                        <span className="text-xl font-serif italic tabular-nums">{selectedAlbum.year}</span>
                   </div>
                </div>
                {selectedAlbum.link && (
                    <button onClick={() => window.open(selectedAlbum.link, '_blank', 'noopener,noreferrer')} className="mt-12 w-full py-5 border border-[#041E42] bg-[#041E42] text-[#F4F4F3] text-[11px] font-sans font-bold tracking-[0.1em] uppercase hover:bg-[#D50032] hover:border-[#D50032] transition-all">
                        {selectedAlbum.ctaText || "Listen on Streaming"}
                    </button>
                )}
                {selectedAlbum.dedication && (
                    <div className="mt-12 pt-8 border-t border-[#041E42]/20 space-y-4">
                        <p className="text-[10px] opacity-60 uppercase tracking-[0.1em] font-sans font-bold text-[#041E42]">Dedication</p>
                        <p className="text-lg font-serif italic leading-relaxed text-[#041E42] opacity-90 pl-2 -ml-2">{typeset(selectedAlbum.dedication)}</p>
                    </div>
                )}
             </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[1.15] md:leading-[1.0] tracking-tighter mb-16 antialiased text-[#041E42] [text-wrap:balance] pt-2">
                {typeset(selectedAlbum.title)}
            </h1>
            
            {selectedAlbum.description && (
                <p className="text-xl md:text-3xl font-serif italic mb-24 leading-relaxed pl-8 border-l-2 border-[#D50032] text-[#041E42] max-w-[65ch]">
                    {typeset(selectedAlbum.description)}
                </p>
            )}

            {selectedAlbum.leadSingle && (
              <div className="border border-[#041E42]/10 p-12 mb-32 relative group/single bg-white shadow-sm">
                 <div className="absolute top-0 right-0 w-1 h-full bg-[#D50032] opacity-0 group-hover/single:opacity-100 transition-opacity"></div>
                 <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] uppercase mb-8 block">Featured Track</span>
                 <h3 className="text-5xl md:text-6xl font-serif text-[#041E42] mb-6 italic leading-none">{typeset(selectedAlbum.leadSingle.title)}</h3>
                 <div className="flex flex-col gap-2 mb-8">
                    {selectedAlbum.leadSingle.composer && <span className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42]/70">{selectedAlbum.leadSingle.composer}</span>}
                    {selectedAlbum.leadSingle.soloist && <span className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#D50032]">Feat. {selectedAlbum.leadSingle.soloist}</span>}
                 </div>
                 {selectedAlbum.leadSingle.link && <button onClick={() => window.open(selectedAlbum.leadSingle.link, '_blank', 'noopener,noreferrer')} className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase border-b border-[#041E42] pb-1 hover:text-[#D50032] hover:border-[#D50032] transition-all">Play Track &#x2197;&#xFE0E;</button>}
              </div>
            )}

            {/* REPERTOIRE SECTION */}
            <div className="mb-32 border-t-2 border-[#041E42] pt-12">
                <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] mb-12 block uppercase">Repertoire</span>
                <div>
                    {selectedAlbum.tracks.map((track, idx) => (
                        <div key={idx} className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 border-b border-[#041E42]/10 py-6 hover:bg-white hover:pl-4 -ml-4 pl-4 pr-4 transition-all duration-300 items-baseline">
                            
                            {/* Left Col: Index & Title (Spans 7 Cols) */}
                            <div className="md:col-span-7 flex items-baseline gap-8">
                                <span className="text-[11px] font-sans font-bold tracking-[0.1em] text-[#041E42]/70 tabular-nums w-8 flex-shrink-0">
                                    {String(idx + 1).padStart(2, '0')}
                                </span>
                                <div>
                                    <span className="font-serif text-2xl md:text-3xl text-[#041E42] group-hover:italic transition-all leading-tight pb-1 block [text-wrap:balance]">
                                        {typeset(track.title)}
                                    </span>
                                </div>
                            </div>

                            {/* Right Col: Metadata (Spans 5 Cols) */}
                            <div className="hidden md:block md:col-span-5 text-right opacity-40 group-hover:opacity-100 transition-opacity">
                                <span className="text-[10px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42] leading-tight block [text-wrap:balance]">
                                    {typeset(
                                        [
                                            track.composer, 
                                            track.group, 
                                            track.soloist ? `Feat. ${track.soloist}` : null
                                        ].filter(Boolean).join(" · ")
                                    )}
                                </span>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            {selectedAlbum.credits && (
                <div className="mb-32 border-t-2 border-[#041E42] pt-12">
                    <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] mb-12 block uppercase">Technical Specifications</span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                        {Object.entries(selectedAlbum.credits).map(([section, roles]) => (
                            <div key={section}>
                                <h5 className="font-sans font-bold text-[11px] uppercase tracking-[0.1em] text-[#041E42] mb-8 border-b border-[#041E42]/20 pb-2">{section}</h5>
                                <div className="space-y-6">
                                    {roles.map((role, idx) => (
                                        <div key={idx} className="flex flex-col">
                                            <span className="text-[9px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42]/70 mb-1">{role.role}</span>
                                            <span className="font-serif text-xl text-[#041E42] leading-tight [text-wrap:balance]">{typeset(role.name)}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {selectedAlbum.linerNotes && (
                <div className="mb-32 border-t-2 border-[#041E42] pt-12">
                    <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] mb-12 block uppercase">Album Notes</span>
                    <div className="space-y-16">
                        {selectedAlbum.linerNotes.map((note, idx) => (
                            <div key={idx} className="max-w-2xl">
                                {note.author && <h4 className="font-serif text-3xl mb-6 italic">{typeset(note.author)}</h4>}
                                <p className="leading-relaxed font-serif text-lg opacity-90 antialiased">{typeset(note.text)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {selectedAlbum.acknowledgements && (
                <div className="py-24 border-t border-[#041E42]/10 mb-24">
                    <h5 className="font-sans font-bold text-[11px] uppercase tracking-[0.1em] mb-12 text-[#041E42]/70">Acknowledgements</h5>
                    <div className="flex flex-wrap gap-x-8 gap-y-4 max-w-4xl">
                        {selectedAlbum.acknowledgements.map((name, i) => (
                            <span key={i} className="text-xl text-[#041E42] font-serif italic opacity-60 hover:opacity-100 transition-opacity cursor-default pl-2 -ml-2">{typeset(name)}</span>
                        ))}
                    </div>
                </div>
            )}

            <div className="pt-24 border-t border-[#041E42] opacity-40 text-left">
                <p className="text-[10px] font-sans font-bold tracking-[0.1em] uppercase">Transcribed from the Physical Liner Notes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StoreView = () => (
  <div className="min-h-screen pt-40 px-6 md:px-12 pb-32 bg-[#F4F4F3] antialiased text-[#041E42] selection:bg-[#D50032] selection:text-white">
    {/* --- SEO INTEGRATION --- */}
    <Helmet>
      <title>Haberdashery | Georgetown Chimes Alumni Association</title>
      <meta name="description" content="Official Battle Gear of the Georgetown Chimes. Specially commissioned silk neckwear." />
    </Helmet>
    {/* ----------------------- */}

    <div className="max-w-[1920px] mx-auto">
      <SectionHeader title="The Haberdashery" number="Specially Commissioned" />

      {/* MANIFESTO: The Big Statement (Heavy Top Border) */}
      <div className="border-t-2 border-[#041E42] pt-12 pb-32 grid grid-cols-1 lg:grid-cols-12 gap-y-12">
        <div className="lg:col-span-4">
          <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#d50032] uppercase block mb-4">
            01 — Battle Gear
          </span>
        </div>
        <div className="lg:col-span-8">
          <h3 className="text-5xl md:text-7xl font-serif leading-[1.15] md:leading-[1.0] text-[#041E42] tracking-tighter mb-12">
            Standard Issue.
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-[#041E42]/20 pt-8">
            <p className="text-xl text-[#041E42] font-serif leading-relaxed">
              Commissioned for the Active group and curated for the Alumni. Woven in pure silk, these pieces are designed to replace the lost, the stained, and the borrowed.
            </p>
            <div>
              <p className="text-[#041E42] text-[10px] leading-relaxed font-sans font-bold uppercase tracking-[0.05em] opacity-60">
                 Provenance: A Drew Poling original, produced in collaboration with our master weavers in the United Kingdom.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* THE CATALOG: Vignelli List Layout */}
      <div className="mb-48">
        {/* Header Row */}
        <div className="flex items-end justify-between border-b-2 border-[#041E42] pb-4 mb-0">
            <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#041E42] uppercase">
                02 — The Collection
            </span>
        </div>

        {/* USE THE IMPORTED DATA */}
        {STORE_DATA.map((item) => (
            <div key={item.id} className="group relative border-b border-[#041E42]/20 py-12 grid grid-cols-1 md:grid-cols-12 gap-y-8 gap-x-8 items-start transition-colors duration-500 hover:bg-white hover:pl-4 -ml-4 pl-4 pr-4">
                
                {/* Col 1: REF ID */}
                <div className="md:col-span-2 pt-2">
                    <span className="text-[11px] font-sans font-bold tracking-[0.1em] text-[#041E42]/70 uppercase group-hover:text-[#D50032] transition-colors">
                        Ref. {item.id}
                    </span>
                </div>

                {/* Col 2: THE IMAGE (The Artifact) */}
                <div className="md:col-span-3">
                    <div className="aspect-[3/4] bg-[#E5E5E4] overflow-hidden w-full max-w-[240px]">
                        <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover grayscale mix-blend-multiply group-hover:mix-blend-normal group-hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </div>

                {/* Col 3: TITLE & DETAILS */}
                <div className="md:col-span-5 flex flex-col justify-between h-full py-2">
                    <div>
                        <h4 className="text-5xl md:text-6xl font-serif text-[#041E42] italic leading-[1.15] md:leading-[1.0] mb-6">
                            {item.name}
                        </h4>
                        <p className="text-[#041E42] text-lg font-serif leading-tight opacity-60 [text-wrap:balance]">
                            {typeset(item.desc)}
                        </p>
                    </div>
                </div>

                {/* Col 4: PRICE & ACTION */}
                <div className="md:col-span-2 flex flex-col justify-between h-full py-2 items-start md:items-end">
                    <span className="text-xl font-sans font-bold text-[#041E42] tracking-wide tabular-nums block opacity-80">
                        ${item.price}
                    </span>
                    
                    <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[#041E42] group-hover:text-[#D50032] transition-colors mt-8 md:mt-0"
                    >
                        <span>Acquire</span>
                        <span className="text-lg font-light translate-y-[-1px]">→</span>
                    </a>
                </div>
            </div>
        ))}
      </div>

      {/* Archive Stamp: Left Aligned */}
      <div className="mt-48 pt-4 border-t border-[#041E42] flex justify-start opacity-40">
        <p className="text-[10px] font-sans font-bold tracking-[0.1em] uppercase antialiased">
          Official Battle Gear of the Georgetown Chimes
        </p>
      </div>

    </div>
  </div>
);


const PhilanthropyView = () => (
    <div className="min-h-screen bg-[#F4F4F3] text-[#041E42] pt-40 px-6 md:px-12 pb-32 antialiased selection:bg-[#D50032] selection:text-white">
       {/* --- SEO INTEGRATION --- */}
       <Helmet>
         <title>Patronage | Georgetown Chimes Alumni Association</title>
         <meta name="description" content="Fund the Brotherhood. Join the Donor Guild and support the Georgetown Chimes Alumni Association." />
       </Helmet>
       {/* ----------------------- */}

       <div className="max-w-[1920px] mx-auto">
        <SectionHeader title="Patronage" number="Fund the Brotherhood" />
        {/* ... (Rest of PhilanthropyView Logic remains unchanged) ... */}
        
        {/* MANIFESTO: The Big Statement */}
        <div className="border-t-2 border-[#041E42] pt-12 pb-32 grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12">
            <div className="lg:col-span-4">
                <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] uppercase block mb-4">
                    01 — The Mission
                </span>
            </div>
            <div className="lg:col-span-8">
                <h3 className="text-5xl md:text-7xl font-serif leading-[1.15] md:leading-[1.0] text-[#041E42] tracking-tighter mb-12">
                    The heartbeat of the Association.
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-[#041E42]/20 pt-8">
                    <p className="text-xl text-[#041E42] font-serif leading-relaxed">
                        By subscribing, you ensure the tradition remains uninterrupted: the history documented, the reunions funded, and the legacy secured.
                    </p>
                    <div>
                        <p className="text-[#041E42] text-[10px] leading-relaxed font-sans font-bold uppercase tracking-[0.05em] opacity-60">
                           Legal Notice: Contributions to the Georgetown Chimes Alumni Association 501(c)(7) are not tax deductible.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* THE GUILD LIST: Vignelli Data Table */}
        <div className="mb-48">
            {/* Header Row */}
            <div className="flex items-end justify-between border-b-2 border-[#041E42] pb-4 mb-0">
                 <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#041E42] uppercase">
                    02 — The Donor Guild
                </span>
            </div>

            {DONOR_TIERS.map((tier, idx) => {
                const [amount, frequency] = tier.price.includes('/') 
                    ? tier.price.split('/') 
                    : [tier.price, 'annually'];

                return (
                    <div key={idx} className="group relative border-b border-[#041E42]/20 py-12 grid grid-cols-1 md:grid-cols-12 gap-y-6 gap-x-4 items-start transition-colors duration-500 hover:bg-white hover:pl-4 -ml-4 pl-4 pr-4">
                        
                        {/* Col 1: Level ID (Technical) */}
                        <div className="md:col-span-2 pt-2">
                            <span className="text-[11px] font-sans font-bold tracking-[0.1em] text-[#041E42]/70 uppercase group-hover:text-[#D50032] transition-colors">
                                Level 0{idx + 1}
                            </span>
                        </div>

                        {/* Col 2: The Title & Description (The Narrative) */}
                        <div className="md:col-span-6 pr-8">
                            <h4 className="text-5xl font-serif text-[#041E42] italic leading-[1.15] md:leading-[1.0] mb-6">
                                {tier.title}
                            </h4>
                            {/* CHANGED: Added typeset() and [text-wrap:balance] */}
                            <p className="text-[#041E42] text-lg font-serif leading-tight opacity-60 max-w-md [text-wrap:balance]">
                                {typeset(tier.description)}
                            </p>
                        </div>

                        {/* Col 3: The Price (The Data) */}
                        <div className="md:col-span-2 pt-3">
                             <span className="text-lg font-sans font-bold text-[#041E42] tracking-wide tabular-nums block opacity-100">
                                    {amount}
                            </span>
                            <span className="text-[9px] font-sans font-bold tracking-[0.1em] text-[#041E42]/70 uppercase">
                                    per {frequency}
                            </span>
                        </div>

                        {/* Col 4: Action (The Input) */}
                        <div className="md:col-span-2 flex md:justify-end items-start pt-3">
                             <a 
                                href={tier.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[#041E42] group-hover:text-[#D50032] transition-colors"
                             >
                                <span>Join</span>
                                <span className="text-lg font-light translate-y-[-1px]">→</span>
                             </a>
                        </div>
                    </div>
                );
            })}
        </div>

        {/* ONE TIME GIFT: Heavy Divider */}
        <div className="border-t-2 border-[#041E42] pt-12">
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12">
                 <div className="lg:col-span-4">
                    <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] uppercase block mb-4">
                        03 — Capital Projects
                    </span>
                 </div>
                 <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
                     <h3 className="text-5xl md:text-7xl font-serif text-[#041E42] leading-[1.15] md:leading-[1.0] tracking-tighter">
                        Legacy &<br/><span className="italic">Restoration.</span>
                    </h3>
                    <div className="flex flex-col justify-between h-full">
                        <p className="text-[#041E42] text-xl font-serif leading-relaxed mb-12">
                            Single contributions fund the archival restoration of our master tapes and the capital projects that define our future infrastructure.
                        </p>
                        
                        {/* The Indented Action Block */}
                        <a 
                            href="https://donate.stripe.com/fZe3g6frb6ys92wfZ4"
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group w-full flex items-center justify-between border-t border-b border-[#041E42] py-6 px-8 hover:bg-[#041E42] hover:text-white transition-all duration-500"
                        >
                            <span className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase">
                                Make a Contribution
                            </span>
                            <span className="text-xl font-light group-hover:translate-x-2 transition-transform">
                                →
                            </span>
                        </a>
                    </div>
                 </div>
             </div>
        </div>

        {/* Footer: Left Aligned */}
        <div className="mt-48 pt-4 border-t border-[#041E42] flex justify-start opacity-40 hover:opacity-100 transition-opacity">
            <a href="https://billing.stripe.com/login/eVa00CdRM41u2ZibII" target="_blank" rel="noopener noreferrer" className="text-[#041E42] text-[10px] font-sans font-bold tracking-[0.1em] uppercase hover:text-[#D50032] transition-colors">
                Manage Existing Subscription →
            </a>
        </div>

      </div>
    </div>
);

const BackstageView = () => (
    <div className="min-h-screen pt-40 px-6 md:px-12 pb-32 bg-[#F4F4F3] antialiased text-[#041E42] selection:bg-[#D50032] selection:text-white">
      {/* --- SEO INTEGRATION --- */}
      <Helmet>
        <title>Backstage | Georgetown Chimes Alumni Association</title>
        <meta name="description" content="Authorized Access Only. Internal tools and database management for Alumni." />
      </Helmet>
      {/* ----------------------- */}

      <div className="max-w-[1920px] mx-auto">
        <SectionHeader title="Backstage" number="Authorized Access" />
        {/* ... (Rest of BackstageView Logic remains unchanged) ... */}
        
        {/* Heavy Anchor Line */}
        <div className="border-t-2 border-[#041E42] pt-0">
             <div className="grid grid-cols-1 md:grid-cols-2">
                 
                 {/* SYSTEM 01: GLEEMANAGER */}
                 <div className="group flex flex-col h-full justify-between border-b md:border-b-0 md:border-r border-[#041E42] py-12 md:pr-12">
                     <div>
                         <div className="border-b border-[#041E42] pb-4 mb-12">
                             <span className="text-[11px] font-sans font-bold tracking-[0.05em] uppercase text-[#D50032]">
                                 System 01 — Database
                             </span>
                         </div>
                         
                         <h3 className="text-7xl font-serif text-[#041E42] italic mb-4 leading-[1.15] md:leading-[1.0] -ml-1">
                             GleeManager
                         </h3>
                         
                         {/* THE FIX: Notion as a Technical Spec */}
                         <div className="flex items-center gap-4 mb-12 opacity-60">
                             <span className="text-[9px] font-sans font-bold tracking-[0.2em] uppercase">
                                Platform: Notion
                             </span>
                         </div>

                         <p className="text-xl font-serif leading-relaxed opacity-80 max-w-sm mb-24">
                             Central Archive: Historical data, part tapes, and repertoire management.
                         </p>
                     </div>

                     <div className="space-y-0 border-t border-[#041E42]">
                          <a 
                            href="https://thechimes.notion.site" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center justify-between py-6 border-b border-[#041E42]/20 hover:bg-white hover:pl-4 -ml-2 pl-2 pr-6 transition-all duration-300 group/link"
                          >
                             <span className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase">Initialize Session</span>
                             <span className="text-lg opacity-0 group-hover/link:opacity-100 transition-opacity pl-4">&#x2197;&#xFE0E;</span>
                          </a>
                          <a 
                            href="https://drive.google.com/uc?export=download&id=1s9YI3af7Y17OpptSKo4LRAsM15QCyOlp" 
                            className="flex items-center justify-between py-6 border-b border-[#041E42]/20 hover:bg-white hover:pl-4 -ml-2 pl-2 pr-6 transition-all duration-300 group/link"
                          >
                             <span className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase opacity-50 group-hover/link:opacity-100">System Protocol</span>
                             <span className="text-lg opacity-0 group-hover/link:opacity-100 transition-opacity pl-4">↓</span>
                          </a>
                     </div>
                 </div>

                 {/* SYSTEM 02: SLACK */}
                 <div className="group flex flex-col h-full justify-between py-12 md:pl-12">
                     <div>
                         <div className="border-b border-[#041E42] pb-4 mb-12">
                             <span className="text-[11px] font-sans font-bold tracking-[0.05em] uppercase text-[#D50032]">
                                 System 02 — Comms
                             </span>
                         </div>
                         
                         <h3 className="text-7xl font-serif text-[#041E42] italic mb-4 leading-[1.15] md:leading-[1.0] -ml-1">
                             Slack
                         </h3>

                         {/* Slack as a Technical Spec */}
                         <div className="flex items-center gap-4 mb-12 opacity-60">
                             <span className="text-[9px] font-sans font-bold tracking-[0.2em] uppercase">
                                Platform: Slack
                             </span>
                         </div>

                         <p className="text-xl font-serif leading-relaxed opacity-80 max-w-sm mb-24">
                             Encrypted Channel: Real-time messaging for Active and Alumni units.
                         </p>
                     </div>

                     <div className="space-y-0 border-t border-[#041E42]">
                          <a 
                            href="https://thechimes.slack.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center justify-between py-6 border-b border-[#041E42]/20 hover:bg-white hover:pl-4 -ml-2 pl-2 pr-6 transition-all duration-300 group/link"
                          >
                             <span className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase">Launch App</span>
                             <span className="text-lg opacity-0 group-hover/link:opacity-100 transition-opacity pl-4">&#x2197;&#xFE0E;</span>
                          </a>
                          <a 
                            href="https://drive.google.com/uc?export=download&id=1AeangbSpDCNOv-sHq5yqaz5Djk0YmesR" 
                            className="flex items-center justify-between py-6 border-b border-[#041E42]/20 hover:bg-white hover:pl-4 -ml-2 pl-2 pr-6 transition-all duration-300 group/link"
                          >
                             <span className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase opacity-50 group-hover/link:opacity-100">System Protocol</span>
                             <span className="text-lg opacity-0 group-hover/link:opacity-100 transition-opacity pl-4">↓</span>
                          </a>
                     </div>
                 </div>

             </div>
        </div>

        {/* Security Stamp: Left Aligned */}
        <div className="mt-12 text-left opacity-30">
            <p className="text-[10px] font-sans font-bold tracking-[0.1em] uppercase">
                Restricted Access — Alumni Personnel Only
            </p>
        </div>

      </div>
    </div>
);

const NotFoundView = ({ navigateTo }) => (
    <div className="min-h-screen pt-40 px-6 md:px-12 flex flex-col items-center justify-center bg-[#F4F4F3] text-[#041E42] antialiased selection:bg-[#D50032] selection:text-white">
        {/* --- SEO INTEGRATION --- */}
        <Helmet>
            <title>404 | Georgetown Chimes Alumni Association</title>
            <meta name="description" content="Page not found." />
        </Helmet>
        {/* ----------------------- */}

        <div className="w-full max-w-3xl border-t-2 border-[#041E42] pt-12">
            
            {/* 1. Meta Label */}
            <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] uppercase block mb-8">
                Error 404 — Missing Record
            </span>
            
            {/* 2. Massive Serif Headline */}
            <h1 className="text-6xl md:text-9xl font-serif text-[#041E42] mb-12 italic leading-[1.15] md:leading-[1.0] tracking-tighter [text-wrap:balance]">
                Discordant note.
            </h1>
            
            {/* 3. The Explanation (Indented) */}
            <p className="text-xl md:text-2xl font-serif text-[#041E42] leading-relaxed mb-16 max-w-lg pl-8 border-l-2 border-[#041E42]/10">
                The page you requested cannot be found in our repertoire. It may have been moved, deleted, or never existed at all.
            </p>
            
            {/* 4. Primary Action */}
            <div className="flex flex-col items-start gap-8">
                <button 
                    onClick={() => navigateTo('home')} 
                    className="group flex items-center gap-4 text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42] hover:text-[#D50032] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D50032]"
                    aria-label="Home"
                >
                    <span>Return to Harmony</span>
                    <span className="text-lg font-light group-hover:translate-x-2 transition-transform">→</span>
                </button>

                {/* 5. Concierge Links: Added Patronage */}
                <div className="flex flex-wrap gap-6 pt-8 border-t border-[#041E42]/10 w-full max-w-md opacity-60">
                    <button onClick={() => navigateTo('agenda')} className="text-[10px] font-bold tracking-[0.2em] uppercase hover:text-[#D50032] transition-colors">Box Office</button>
                    <button onClick={() => navigateTo('discography')} className="text-[10px] font-bold tracking-[0.2em] uppercase hover:text-[#D50032] transition-colors">Archive</button>
                    <button onClick={() => navigateTo('philanthropy')} className="text-[10px] font-bold tracking-[0.2em] uppercase hover:text-[#D50032] transition-colors">Patronage</button>
                </div>
            </div>

        </div>
    </div>
);

export default function App() {
  const getRouteFromPath = () => {
    const path = window.location.pathname;
    const cleanPath = path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path;
    if (cleanPath === '/' || cleanPath === '') return { view: 'home', slug: null };
    if (cleanPath === '/events') return { view: 'agenda', slug: null };
    if (cleanPath === '/albums') return { view: 'discography', slug: null };
    if (cleanPath === '/store') return { view: 'store', slug: null };
    if (cleanPath === '/give') return { view: 'philanthropy', slug: null };
    if (cleanPath === '/comms') return { view: 'backstage', slug: null };
    const eventMatch = cleanPath.match(/^\/event\/([\w-]+)$/);
    if (eventMatch) return { view: 'event', slug: eventMatch[1] };
    const albumMatch = cleanPath.match(/^\/album\/([\w-]+)$/);
    if (albumMatch) return { view: 'album', slug: albumMatch[1] };
    return { view: '404', slug: null };
  };

  const [route, setRoute] = useState(getRouteFromPath());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => { setRoute(getRouteFromPath()); setIsMenuOpen(false); window.scrollTo(0, 0); };
    window.addEventListener('popstate', handlePopState);
    return () => { window.removeEventListener('popstate', handlePopState); };
  }, []);

  const navigateTo = (view, slug = null) => {
    let path = '/';
    switch(view) {
        case 'home': path = '/'; break;
        case 'agenda': path = '/events'; break;
        case 'discography': path = '/albums'; break;
        case 'store': path = '/store'; break;
        case 'philanthropy': path = '/give'; break;
        case 'backstage': path = '/comms'; break;
        case 'event': path = `/event/${slug}`; break;
        case 'album': path = `/album/${slug}`; break;
        default: path = '/';
    }
    try { window.history.pushState({}, '', path); } catch (err) { console.log('History API not available'); }
    setRoute({ view, slug });
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "We meet again soon…";
      } else {
        document.title = "Georgetown Chimes Alumni Association";
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  const openAlbumBySlug = (slug) => navigateTo('album', slug);
  const openAlbum = (album) => navigateTo('album', album.slug);
  const openEvent = (event) => navigateTo('event', event.slug);

  const activePage = route.view;
  const selectedEvent = activePage === 'event' && route.slug ? EVENTS_DATA.find(e => e.slug === route.slug) : null;
  const selectedAlbum = activePage === 'album' && route.slug ? ALBUMS_DATA.find(a => a.slug === route.slug) : null;

  return (
    <div className="font-sans text-[#041E42] bg-[#F4F4F3] selection:bg-[#D50032] selection:text-[#F4F4F3]">
    <div className="bg-texture"></div>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] px-6 py-4 bg-[#041E42] text-[#F4F4F3] text-xs font-bold uppercase tracking-widest border border-[#D50032]">Skip to main content</a>
      <NavBar activePage={activePage} navigateTo={navigateTo} mobileMenuOpen={isMenuOpen} setMobileMenuOpen={setIsMenuOpen} />
      <main id="main-content" className="min-h-screen">
        {activePage === 'home' && <HomeView navigateTo={navigateTo} openAlbumBySlug={openAlbumBySlug} openEvent={openEvent} />}
        {activePage === 'agenda' && <AgendaView navigateTo={navigateTo} openEvent={openEvent} />}
        {activePage === 'discography' && <DiscographyView openAlbum={openAlbum} navigateTo={navigateTo} />}
        {activePage === 'album' && <AlbumDetailView selectedAlbum={selectedAlbum} navigateTo={navigateTo} />}
        {activePage === 'event' && <EventDetailView event={selectedEvent} navigateTo={navigateTo} />}
        {activePage === 'philanthropy' && <PhilanthropyView />}
        {activePage === 'store' && <StoreView />}
        {activePage === 'backstage' && <BackstageView />}
        {activePage === '404' && <NotFoundView navigateTo={navigateTo} />}
      </main>
      <footer className="bg-[#F4F4F3] text-[#041E42] pt-32 pb-12 px-6 md:px-12 antialiased selection:bg-[#D50032] selection:text-white">
        <div className="max-w-[1920px] mx-auto">
          <div className="border-t-2 border-[#041E42] pt-12 grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-12">
            <div className="md:col-span-4 flex flex-col justify-between h-full"><div><Logo className="h-8 w-auto mb-12 text-[#041E42] opacity-80" /><div className="space-y-6 max-w-xs"><p className="text-[10px] font-sans font-bold tracking-[0.1em] uppercase leading-relaxed text-[#041E42]/70">Incorporated in Delaware<br/>501(c)(7) Non-Profit</p><p className="text-[10px] font-sans font-bold tracking-[0.1em] uppercase leading-relaxed text-[#041E42]/70">Kindly be advised that contributions are not tax-deductible.</p></div></div></div>
            <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
              <div className="flex flex-col gap-6"><span className="text-[11px] font-sans font-bold tracking-[0.05em] uppercase text-[#D50032] border-b border-[#041E42]/20 pb-4 block">Index</span>{[{ name: 'Box Office', slug: 'agenda' }, { name: 'Listening Room', slug: 'discography' }, { name: 'Haberdasher', slug: 'store' }, { name: 'Patronage', slug: 'philanthropy' }].map((item) => (<button key={item.name} onClick={() => navigateTo(item.slug)} className="text-left text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42] hover:text-[#D50032] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D50032] block py-2">{item.name}</button>))}</div>
              <div className="flex flex-col gap-6"><span className="text-[11px] font-sans font-bold tracking-[0.05em] uppercase text-[#041E42]/70 border-b border-[#041E42]/20 pb-4 block">Backstage</span><button onClick={() => navigateTo('backstage')} className="text-left text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42] hover:text-[#D50032] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D50032] block py-2">Database</button><button onClick={() => navigateTo('backstage')} className="text-left text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42] hover:text-[#D50032] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D50032] block py-2">Messaging</button></div>
              <div className="flex flex-col gap-6"><span className="text-[11px] font-sans font-bold tracking-[0.05em] uppercase text-[#041E42]/70 border-b border-[#041E42]/20 pb-4 block">External</span>{[{ name: 'The House', url: 'https://3611.georgetownchimes.org' }, { name: 'The Actives', url: 'https://georgetownchimes.org' }].map((site) => (<button key={site.name} onClick={() => window.open(site.url, '_blank', 'noopener,noreferrer')} className="group flex items-center gap-2 text-left text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42] hover:text-[#D50032] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D50032] block py-2">{site.name}<span className="text-lg font-light leading-none opacity-0 group-hover:opacity-100 transition-opacity translate-y-[-1px]">&#x2197;&#xFE0E;</span></button>))}</div>
            </div>
          </div>
        </div>
        <div className="max-w-[1920px] mx-auto mt-24 pt-6 border-t border-[#041E42]/10 flex flex-col md:flex-row justify-between items-center text-[9px] font-sans font-bold text-[#041E42]/70 uppercase tracking-[0.2em] gap-8"><span>© {new Date().getFullYear()} Georgetown Chimes Alumni Association, Inc.</span><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 group hover:text-[#D50032] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D50032]">Return to Top <span className="text-lg font-light leading-none rotate-180">↓</span></button></div>
      </footer>
    </div>
  );
}
