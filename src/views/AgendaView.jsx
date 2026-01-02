import React from 'react';
import { Helmet } from 'react-helmet-async';
import { EVENTS_DATA } from '../data';
import { typeset, parseEventDate } from '../utils/formatters'; // <--- Import added here
import SectionHeader from '../components/SectionHeader';

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
        
        <div className="hidden md:grid grid-cols-12 gap-12 pb-4 mb-4 border-b-2 border-[#041E42] opacity-100">
            <span className="col-span-2 text-[10px] font-sans font-bold tracking-[0.1em] uppercase">Date</span>
            <span className="col-span-7 text-[10px] font-sans font-bold tracking-[0.1em] uppercase">Program</span>
            <span className="col-span-3 text-[10px] font-sans font-bold tracking-[0.1em] uppercase text-right">Logistics</span>
        </div>
        
        <div className="flex flex-col group/list border-t-2 md:border-t-0 border-[#041E42]">
          {EVENTS_DATA.map((event) => {
            // FIX: Use the robust helper function instead of inline splitting
            const { month, day } = parseEventDate(event.date);

            return (
              <div 
                key={event.id} 
                role="button" 
                tabIndex={0} 
                onClick={() => openEvent(event)} 
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openEvent(event);
                  }
                }}
                className="group border-b border-[#041E42]/20 py-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-baseline relative cursor-pointer transition-all duration-500 hover:pl-4 -ml-4 pl-4 pr-4 group-hover/list:opacity-30 hover:!opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#D50032]"
              >
                <div className="md:col-span-2 flex flex-col">
                   {/* Only render month if it exists to avoid empty spacing */}
                   {month && <span className="text-[11px] font-sans font-bold tracking-[0.1em] text-[#041E42]/70 uppercase mb-2">{month}</span>}
                   <span className="text-4xl font-serif text-[#041E42] italic">{day}</span>
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
            );
          })}
        </div>
      </div>
    </div>
);

export default AgendaView;