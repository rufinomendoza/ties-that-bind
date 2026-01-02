import React from 'react';
import { Helmet } from 'react-helmet-async';
import { EVENTS_DATA } from '../data';
import { typeset } from '../utils/formatters';
import SectionHeader from '../components/SectionHeader';

const EventDetailView = ({ event, navigateTo }) => {
  if (!event) return null;

  const metaDescription = Array.isArray(event.description) 
    ? event.description[0] 
    : event.description;

  return (
    <div className="min-h-screen pt-40 px-6 md:px-12 pb-32 bg-[#F4F4F3] text-[#041E42] antialiased selection:bg-[#D50032] selection:text-white">
      <Helmet>
        <title>{`${typeset(event.title)} | Georgetown Chimes Alumni Association`}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>

      <div className="max-w-[1920px] mx-auto">
        <div className="flex justify-between items-end mb-12">
            <button onClick={() => navigateTo('agenda')} className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase flex items-center gap-4 hover:text-[#D50032] transition-colors opacity-60 hover:opacity-100 group py-4 -my-4">
                <span className="group-hover:-translate-x-1 transition-transform">←</span> Return to the Box Office
            </button>
        </div>
        
        <div className="border-t-2 border-[#041E42] pt-12 grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12">
          
          {/* SIDEBAR (THE TICKET STUB) */}
          <div className="lg:col-span-4">
             <div className="sticky top-32">
                 <div className="aspect-[3/4] w-full bg-[#E5E5E4] mb-12 relative overflow-hidden shadow-2xl shadow-[#041E42]/5">
                    {event.image ? (
                        <img src={event.image} alt={event.title} className="w-full h-full object-cover grayscale mix-blend-multiply group-hover:mix-blend-normal hover:grayscale-0 transition-all duration-[1.5s]" />
                    ) : <div className="w-full h-full bg-[#041E42]/5" />}
                </div>
                
                {/* LOGISTICS DATA — SWITCHED TO MONO */}
                <div className="space-y-0 border-t border-[#041E42]">
                    <div className="flex justify-between items-baseline py-4 border-b border-[#041E42]/20">
                        <span className="text-[10px] font-mono font-bold tracking-[0.1em] uppercase text-[#D50032]">Date</span>
                        <span className="text-[11px] font-mono font-bold tracking-[0.05em]">{event.date}</span>
                    </div>
                    <div className="flex justify-between items-baseline py-4 border-b border-[#041E42]/20">
                        <span className="text-[10px] font-mono font-bold tracking-[0.1em] uppercase text-[#041E42]/70">Time</span>
                        <span className="text-[11px] font-mono font-bold tracking-[0.05em]">{event.time}</span>
                    </div>
                    <div className="flex justify-between items-baseline py-4 border-b border-[#041E42]/20">
                        <span className="text-[10px] font-mono font-bold tracking-[0.1em] uppercase text-[#041E42]/70">Venue</span>
                        <span className="text-[11px] font-mono font-bold tracking-[0.05em] text-right max-w-[60%]">{event.location}</span>
                    </div>
                </div>

                {/* ACTIONS */}
                <div className="mt-12 space-y-4">
                {event.actions ? event.actions.map((action, idx) => (
                    <a key={idx} href={action.link} target="_blank" rel="noopener noreferrer" className={`group w-full flex items-center justify-between border-t border-b py-5 px-6 transition-all duration-300 ${action.primary ? "border-[#041E42] bg-[#041E42] text-[#F4F4F3] hover:bg-[#D50032] hover:border-[#D50032]" : "border-[#041E42]/20 text-[#041E42] hover:bg-[#041E42] hover:text-[#F4F4F3] hover:border-[#041E42]"}`}>
                        {/* Action Labels -> Mono for "Command" feel */}
                        <span className="text-[10px] font-sans font-bold tracking-[0.1em] uppercase">{action.label}</span>
                        <span className="text-lg font-light group-hover:translate-x-2 transition-transform">→</span>
                    </a>
                )) : event.link && (
                    <a href={event.link} target="_blank" rel="noopener noreferrer" className="group w-full flex items-center justify-between border-t border-b border-[#041E42] bg-[#041E42] text-[#F4F4F3] py-5 px-6 hover:bg-[#D50032] hover:border-[#D50032] transition-colors">
                        <span className="text-[10px] font-sans font-bold tracking-[0.1em] uppercase">{event.type === 'CONCERT' ? 'Purchase Tickets' : 'Event Info'}</span>
                        <span className="text-lg font-light group-hover:translate-x-2 transition-transform">→</span>
                    </a>
                )}
                </div>
             </div>
          </div>

          {/* MAIN CONTENT */}
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
                      {/* ITINERARY LOGISTICS — SWITCHED TO MONO */}
                      <div className="md:col-span-3 text-[10px] font-mono font-bold tracking-[0.1em] text-[#041E42] uppercase">
                          {item.time && <div className="block mb-2">{item.time}</div>}
                          {item.location && <div className="block opacity-60 whitespace-pre-line">{item.location}</div>}
                      </div>
                      <div className="md:col-span-9">
                          <h4 className="text-3xl md:text-4xl font-serif text-[#041E42] mb-4 italic">{typeset(item.title)}</h4>
                          <p className="text-[#041E42] text-lg font-serif leading-relaxed max-w-xl opacity-80">{typeset(item.description)}</p>
                      </div>
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

export default EventDetailView;