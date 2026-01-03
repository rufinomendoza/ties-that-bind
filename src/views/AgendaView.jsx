import React from 'react';
import { Helmet } from 'react-helmet-async';
import { EVENTS_DATA } from '../data';
import { typeset, parseEventDate } from '../utils/formatters';
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
        
        {/* HEADER ROW — Now Mono for Technical Precision */}
        <div className="hidden md:grid grid-cols-12 gap-12 pb-4 mb-4 border-b-2 border-[#041E42] opacity-100" aria-hidden="true">
            <span className="col-span-2 text-[10px] font-mono font-bold tracking-[0.1em] uppercase">
                Date
            </span>
            <span className="col-span-7 text-[10px] font-mono font-bold tracking-[0.1em] uppercase">
                Program
            </span>
            <span className="col-span-3 text-[10px] font-mono font-bold tracking-[0.1em] uppercase text-right">
                Logistics
            </span>
        </div>
        
        <div className="flex flex-col group/list border-t-2 md:border-t-0 border-[#041E42]">
          {EVENTS_DATA.map((event) => {
            const { month, day } = parseEventDate(event.date);

            return (
              /* ✅ ACCESSIBILITY FIX: Converted div to button for native keyboard/focus support */
              <button 
                key={event.id} 
                type="button"
                onClick={() => openEvent(event)} 
                className="w-full text-left group border-b border-[#041E42]/20 py-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-baseline relative cursor-pointer transition-all duration-500 hover:pl-4 -ml-4 pl-4 pr-4 group-hover/list:opacity-30 hover:!opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#D50032] focus-visible:bg-white focus-visible:px-6 rounded-sm"
                aria-label={`View details for ${event.title} on ${event.date}`}
              >
                {/* DATE COLUMN */}
                <div className="md:col-span-2 flex flex-col">
                   {/* Sans for the month (Structural Label) */}
                   {month && <span className="text-[11px] font-sans font-bold tracking-[0.1em] text-[#041E42]/70 uppercase mb-2">{month}</span>}
                   {/* Serif for the day (Artistic Focus) */}
                   <span className="text-4xl font-serif text-[#041E42] italic">{day}</span>
                </div>

                {/* PROGRAM COLUMN */}
                <div className="md:col-span-7">
                  {/* Sans for the type (Structural Label) */}
                  <span className="inline-block mb-6 text-[10px] font-sans font-bold tracking-[0.1em] uppercase text-[#D50032]">{event.type}</span>
                  {/* Serif for the title (Artistic Focus) */}
                  <h3 className="text-5xl md:text-7xl font-serif mb-6 text-[#041E42] leading-[1.15] md:leading-[1.0] tracking-tight group-hover:italic transition-all duration-500 [text-wrap:balance]">{typeset(event.title)}</h3>
                  {/* Serif for the narrative */}
                  <p className="text-[#041E42] font-serif text-lg md:text-xl max-w-xl leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity duration-700">{Array.isArray(event.description) ? typeset(event.description[0]) : typeset(event.description)}</p>
                </div>

                {/* LOGISTICS COLUMN — Now Mono (The Studio Log) */}
                <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between h-full gap-8 md:border-l md:border-[#041E42]/10 md:pl-8">
                  <div className="text-left md:text-right">
                      <span className="block text-[10px] font-mono font-bold tracking-[0.1em] uppercase text-[#041E42] mb-1">{event.time}</span>
                      <span className="block text-[10px] font-mono font-bold tracking-[0.1em] uppercase text-[#041E42]/70">{event.location}</span>
                  </div>
                  <span className="flex items-center gap-4 text-[9px] font-mono font-bold tracking-[0.2em] uppercase text-[#041E42] group-hover:text-[#D50032] transition-colors">
                    <span>Details</span>
                    <span className="text-lg font-sans font-light translate-y-[-1px]">→</span>
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
);

export default AgendaView;