import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionHeader from '../components/SectionHeader';
import { typeset } from '../utils/formatters';
import { DONOR_TIERS, RESTORATION_PHASES, ALBUMS_DATA } from '../data';
import { useAudio } from '../contexts/AudioContext';

// --- SUB-COMPONENT: RestorationProgress ---
const RestorationProgress = ({ phases }) => {
  return (
    <div className="w-full space-y-16 mt-16">
      {phases.map((phase) => {
        const percentage = Math.round((phase.current / phase.goal) * 100);
        return (
          <div key={phase.id} className="w-full pt-8 border-t border-[#041E42]/10">
            <div className="flex justify-between items-end mb-4">
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-[#D50032] pb-2">
                  Phase {phase.id} Status
                </span>
                <span className="text-2xl font-serif italic text-[#041E42]">
                  {phase.title}<span className="not-italic opacity-40 ml-2">({phase.years})</span>
                </span>
              </div>
              <div className="text-right tabular-nums">
                <span className="text-3xl font-mono font-bold text-[#041E42]">{percentage}%</span>
                <span className="block text-[9px] font-mono font-bold opacity-40 uppercase tracking-widest">Complete</span>
              </div>
            </div>

            <div className="relative w-full h-[2px] bg-[#041E42]/10 overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-[#D50032] transition-all duration-[2000ms] ease-out"
                style={{ width: `${percentage}%` }}
              />
            </div>

            <div className="flex justify-between mt-4">
               <span className="text-[10px] font-mono font-bold opacity-40 uppercase tracking-tighter">
                 Source: {phase.source}
               </span>
               <span className="text-[10px] font-mono font-bold opacity-40 uppercase tracking-tighter tabular-nums">
                 Goal: {`$${phase.goal.toLocaleString()}`}
               </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// --- MAIN VIEW: PhilanthropyView ---
const PhilanthropyView = () => {
    const { playTrack } = useAudio();
    
    const demoAlbum = ALBUMS_DATA.find(a => a.id === 12);
    const demoTrack = demoAlbum?.restoration;

    return (
    <div className="min-h-screen bg-[#F4F4F3] text-[#041E42] pt-40 px-6 md:px-12 pb-32 antialiased selection:bg-[#D50032] selection:text-white overflow-x-hidden">
        <Helmet>
          <title>Patronage | Georgetown Chimes Alumni Association</title>
          <meta name="description" content="Fund the Brotherhood. Join the Donor Guild and support the Georgetown Chimes Alumni Association." />
        </Helmet>

        <div className="max-w-[1920px] mx-auto">
          <SectionHeader title="Patronage" number="Fund the Brotherhood" />
          
          {/* 01 — MISSION */}
          <div className="border-t-2 border-[#041E42] pt-12 pb-32 grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12">
              <div className="lg:col-span-4">
                  <span className="text-[11px] font-mono font-bold tracking-[0.05em] text-[#D50032] uppercase block mb-4">01 — The Mission</span>
              </div>
              <div className="lg:col-span-8">
                  <h3 className="text-4xl md:text-7xl font-serif leading-[1.15] md:leading-[1.0] text-[#041E42] tracking-tighter mb-12">
                      The <span className="text-[#D50032]">Donor Guild</span> is the heartbeat of the Association.
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-[#041E42]/20 pt-8">
                      <p className="text-xl text-[#041E42] font-serif leading-relaxed">
                          Your membership ensures the tradition remains uninterrupted: the history documented, the reunions funded, and the legacy secured.
                      </p>
                      <div>
                          <p className="text-[#041E42] text-[10px] leading-relaxed font-mono font-bold uppercase tracking-[0.05em] opacity-60">
                              Legal Notice: Contributions to the Georgetown Chimes Alumni Association 501(c)(7) are not tax deductible.
                          </p>
                      </div>
                  </div>
              </div>
          </div>

          {/* 02 — THE GUILD LIST */}
          <div className="mb-24">
              <div className="flex items-end justify-between border-b-2 border-[#041E42] pb-4 mb-0">
                    <span className="text-[11px] font-mono font-bold tracking-[0.05em] text-[#041E42] uppercase">02 — The Donor Guild</span>
              </div>

              {DONOR_TIERS.map((tier, idx) => {
                  const isHero = tier.title === "The Spirit of ’46";
                  const [amount, frequency] = tier.price.includes('/') ? tier.price.split('/') : [tier.price, 'annually'];

                  return (
                      <div 
                        key={idx} 
                        className={`group relative border-b border-[#041E42]/20 py-12 grid grid-cols-1 md:grid-cols-12 gap-y-6 gap-x-4 items-start transition-all duration-500 md:hover:bg-white md:-mx-6 md:px-6 ${isHero ? 'bg-[#041E42]/5 px-4 md:px-6' : ''}`}
                      >
                          <div className="md:col-span-2 pt-2">
                              <span className={`text-[11px] font-mono font-bold tracking-[0.1em] uppercase transition-colors ${isHero ? 'text-[#D50032]' : 'text-[#041E42]/70 group-hover:text-[#D50032]'}`}>
                                  {isHero ? "★ Recommended" : `Guild Level 0${idx + 1}`}
                              </span>
                          </div>
                          <div className="md:col-span-6 md:pr-8 text-left">
                              <h4 className="text-4xl md:text-5xl font-serif text-[#041E42] italic leading-none mb-6">{tier.title}</h4>
                              <p className="text-[#041E42] text-lg font-serif leading-tight opacity-60 max-w-md">{typeset(tier.description)}</p>
                          </div>
                          <div className="md:col-span-2 pt-3 text-left">
                               <span className="text-lg font-mono font-bold text-[#041E42] tracking-wide tabular-nums block">{amount}</span>
                               <span className="text-[9px] font-mono font-bold tracking-[0.1em] text-[#041E42]/70 uppercase">per {frequency}</span>
                          </div>
                          <div className="md:col-span-2 flex md:justify-end items-start pt-2">
                               <a href={tier.link} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-between w-full md:w-auto gap-4 text-[10px] font-sans font-bold tracking-[0.2em] uppercase transition-all duration-300 px-6 py-4 border ${isHero ? 'bg-[#D50032] border-[#D50032] text-white hover:bg-[#A51C30]' : 'border-[#041E42] text-[#041E42] hover:bg-[#041E42] hover:text-white'}`}>
                                  <span>{isHero ? "Join the Guild " : "Join the Guild"}</span>
                                  <span className="text-lg font-light translate-y-[-1px]">→</span>
                               </a>
                          </div>
                      </div>
                  );
              })}
          </div>

          {/* --- ONE-TIME DONATION BRIDGE --- */}
          <div className="relative w-full bg-[#041E42] text-[#F4F4F3] py-24 px-8 md:px-20 my-32 overflow-hidden md:-mx-12 md:w-[calc(100%+6rem)]">
            {/* Background Decorative Element */}
            <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
                <span className="text-[25vw] font-serif italic leading-none">Gift</span>
            </div>

            <div className="relative z-10 max-w-[1920px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
                <div className="max-w-2xl text-center lg:text-left">
                    <span className="text-[11px] font-sans font-bold tracking-[0.2em] uppercase text-[#D50032] block mb-6">Support the GCAA</span>
                    <h3 className="text-4xl md:text-6xl font-serif italic leading-[1.1] tracking-tight mb-8">
                        Prefer to make a <span className="text-white border-b border-white/30">one-time contribution?</span>
                    </h3>
                    <p className="text-xl font-serif opacity-70 leading-relaxed">
                        Support our ongoing operations, event subsidies, and archival efforts with a single gift of any amount.
                    </p>
                </div>

                <div className="w-full md:w-auto shrink-0 flex flex-col items-center lg:items-end gap-6">
                    <a href="https://donate.stripe.com/fZe3g6frb6ys92wfZ4" target="_blank" rel="noopener noreferrer" 
                       className="group flex items-center gap-12 bg-[#D50032] hover:bg-white hover:text-[#041E42] text-white px-12 py-8 transition-all duration-500 ease-out shadow-2xl">
                        <span className="text-[12px] font-sans font-bold tracking-[0.2em] uppercase">Make a One-Time Gift</span>
                        <span className="text-3xl group-hover:translate-x-3 transition-transform duration-500">→</span>
                    </a>
                    <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase opacity-40">Secure via Stripe</span>
                </div>
            </div>
          </div>

          {/* 03 — CAPITAL PROJECTS (THE FEATURE STORY) */}
          <div className="pt-24 mt-32 border-t-2 border-[#041E42]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-12">
              
              {/* Sidebar: The "Masthead" */}
              <div className="lg:col-span-4 lg:sticky lg:top-40 h-fit">
                <span className="text-[11px] font-mono font-bold tracking-[0.05em] text-[#D50032] uppercase block mb-8">
                  03 — Special Initiative
                </span>
                <h2 className="text-5xl font-serif italic leading-tight text-[#041E42] mb-8">
                  The Archive Restoration
                </h2>
                <div className="w-12 h-[1px] bg-[#041E42] mb-8"></div>
                <p className="text-sm font-serif opacity-60 leading-relaxed max-w-[280px]">
                  Beyond the Guild, we undertake specific initiatives to preserve the Chimes’ physical and digital legacy.
                </p>
              </div>

              {/* Main Story Body */}
              <div className="lg:col-span-8 flex flex-col">
                
                {/* Editorial Header */}
                <div className="flex flex-col mb-20">
                  <span className="text-[150px] md:text-[220px] font-serif font-light leading-[0.7] text-[#D50032] select-none tracking-tighter mb-8">
                    A
                  </span>
                  <h3 className="text-4xl md:text-6xl font-serif font-bold text-[#041E42] mb-10 leading-[1.1] tracking-tighter [text-wrap:balance]">
                    Archives are the <span className="italic font-bold">immortal</span> memory of the Brotherhood.
                  </h3>
                  <p className="text-[#041E42] text-xl md:text-2xl font-serif leading-relaxed opacity-90 mb-12 max-w-2xl">
                    Fifty-two years of harmony are currently locked in aging &frac14;&Prime; analog reels. We are reclaiming the magnetic signatures of our founders to ensure our history carries on for the next century.
                  </p>
                </div>

                {/* THE ARCHIVAL PLAYER (Patronage Version with Discography Widths) */}
                {demoTrack && (
                  <div className="relative bg-white border border-[#041E42]/10 p-8 md:p-12 mb-20 shadow-sm overflow-hidden group">
                    {/* Archival Utility Tag */}
                    <div className="absolute top-0 right-0 bg-[#041E42] text-white px-4 py-1 text-[9px] font-mono font-black uppercase tracking-[0.2em] select-none">
                      Log: Item #R-011
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                      
                      {/* Narrative Side - Span 8 (Matches Discography left-align) */}
                      <div className="lg:col-span-8">
                        <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[#D50032] mb-4 block">
                          Technical Evidence
                        </span>
                        <p className="text-lg md:text-xl font-serif italic leading-relaxed text-[#041E42]/80 [text-wrap:balance]">
                          {typeset("The difference between loss and legacy: Listen to the raw extraction of our 1958 album versus the professional master transfer.")}
                        </p>
                      </div>

                      {/* Action Side - Span 4 (Compact and Right-aligned on Desktop) */}
                      <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center gap-6">
                        <button 
                          onClick={() => playTrack(demoTrack)} 
                          className="flex items-center justify-between w-full lg:w-full gap-8 border-2 border-[#041E42] p-6 hover:bg-[#041E42] hover:text-white transition-all duration-500 group/btn"
                        >
                          <div className="text-left">
                            <span className="text-[11px] font-sans font-bold tracking-[0.2em] uppercase block">Start A/B Demo</span>
                          </div>
                          <span className="text-2xl transition-transform group-hover/btn:translate-x-1">▶</span>
                        </button>
                      </div>

                    </div>
                  </div>
                )}

                {/* The Roadmap / Progress */}
                <div className="mb-24">
                  <h4 className="text-[11px] font-sans font-bold tracking-[0.2em] uppercase text-[#041E42] mb-12 border-b border-[#041E42]/10 pb-4">
                    Restoration Roadmap
                  </h4>
                  <RestorationProgress phases={RESTORATION_PHASES} />
                </div>

                {/* The "Invest" Action */}
                <div className="bg-[#E5E5E4] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 border-l-4 border-[#D50032]">
                  <div className="max-w-md text-left">
                    <h5 className="text-2xl font-serif font-bold mb-2">Fund this specific project</h5>
                    <p className="text-sm font-serif opacity-70 italic">Contributions go toward digitization, restoration, and digital storage.</p>
                  </div>
                  <a 
                    href="https://donate.stripe.com/5kQaEWb90fATbURbjP2ZO0B" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="whitespace-nowrap bg-[#041E42] text-white px-10 py-5 text-[11px] font-sans font-bold tracking-[0.2em] uppercase hover:bg-[#D50032] transition-colors duration-300"
                  >
                    Make Capital Contribution →
                  </a>
                </div>

                {/* Management Link (Subtle Footer) */}
                <div className="mt-32 pt-8 border-t border-[#041E42]/10 flex flex-col md:flex-row justify-between gap-4">
                    <p className="text-[10px] font-mono font-bold uppercase opacity-40 tracking-widest">
                      Georgetown Chimes Alumni Association, Inc.
                    </p>
                    <a href="https://billing.stripe.com/login/eVa00CdRM41u2ZibII" target="_blank" rel="noopener noreferrer" className="text-[10px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42]/60 hover:text-[#D50032] transition-colors">
                        Manage Donor Guild Subscription →
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
);
};

export default PhilanthropyView;