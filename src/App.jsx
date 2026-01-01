import React, { useState, useEffect, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Menu, X } from 'lucide-react';

// Import Data
import { EVENTS_DATA, ALBUMS_DATA, STORE_DATA } from './data';
import Logo from './components/Logo';
import { typeset, isPast } from './utils/formatters';
import { NavBar } from './components/NavBar';
import SectionHeader from './components/SectionHeader';

// We ONLY need images used directly in the App.jsx layout (Hero & Feature)
import IMG_CHERRY_TREE from './assets/composite-set-compressed.jpg';
import IMG_CTM_BOND from './assets/ctm-bond.jpeg';

const HomeView = React.lazy(() => import('./views/HomeView'));
const StoreView = React.lazy(() => import('./views/StoreView'));
const BackstageView = React.lazy(() => import('./views/BackstageView'));
const NotFoundView = React.lazy(() => import('./views/NotFoundView'));
const PhilanthropyView = React.lazy(() => import('./views/PhilanthropyView'));


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
        <Suspense fallback={<div className="h-screen flex items-center justify-center font-bold tracking-widest uppercase text-[10px]">Loading...</div>}>
          {activePage === 'home' && <HomeView navigateTo={navigateTo} openAlbumBySlug={openAlbumBySlug} openEvent={openEvent} />}
          {activePage === 'agenda' && <AgendaView navigateTo={navigateTo} openEvent={openEvent} />}
          {activePage === 'discography' && <DiscographyView openAlbum={openAlbum} navigateTo={navigateTo} />}
          {activePage === 'album' && <AlbumDetailView selectedAlbum={selectedAlbum} navigateTo={navigateTo} />}
          {activePage === 'event' && <EventDetailView event={selectedEvent} navigateTo={navigateTo} />}
          {activePage === 'philanthropy' && <PhilanthropyView />}
          {activePage === 'store' && <StoreView />}
          {activePage === 'backstage' && <BackstageView />}
          {activePage === '404' && <NotFoundView navigateTo={navigateTo} />}
        </Suspense>
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
