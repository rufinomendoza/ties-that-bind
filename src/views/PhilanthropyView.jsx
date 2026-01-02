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
                <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[#D50032] pb-2">
                  Phase {phase.id} Status
                </span>
                <span className="text-2xl font-serif italic text-[#041E42]">
                  {phase.title}<span className="not-italic opacity-40 ml-2">({phase.years})</span>
                </span>
              </div>
              <div className="text-right tabular-nums">
                <span className="text-3xl font-sans font-bold text-[#041E42]">{percentage}%</span>
                <span className="block text-[9px] font-sans font-bold opacity-40 uppercase tracking-widest">Complete</span>
              </div>
            </div>

            <div className="relative w-full h-[2px] bg-[#041E42]/10 overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-[#D50032] transition-all duration-[2000ms] ease-out"
                style={{ width: `${percentage}%` }}
              />
            </div>

            <div className="flex justify-between mt-4">
               <span className="text-[10px] font-sans font-bold opacity-40 uppercase tracking-tighter">
                  Source: {phase.source}
               </span>
               <span className="text-[10px] font-sans font-bold opacity-40 uppercase tracking-tighter tabular-nums">
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
    // FIXED: Added overflow-x-hidden to prevent layout wiggle
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
                  <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] uppercase block mb-4">01 — The Mission</span>
              </div>
              <div className="lg:col-span-8">
                  <h3 className="text-4xl md:text-7xl font-serif leading-[1.15] md:leading-[1.0] text-[#041E42] tracking-tighter mb-12">
                      The <span className="text-[#D50032]">Donor Guild</span> is the heartbeat of the Association.
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-[#041E42]/20 pt-8">
                      <p className="text-xl text-[#041E42] font-serif leading-relaxed">
                          Your membership in the <strong>Donor Guild</strong> ensures the tradition remains uninterrupted: the history documented, the reunions funded, and the legacy secured.
                      </p>
                      <div>
                          <p className="text-[#041E42] text-[10px] leading-relaxed font-sans font-bold uppercase tracking-[0.05em] opacity-60">
                             Legal Notice: Contributions to the Georgetown Chimes Alumni Association 501(c)(7) are not tax deductible.
                          </p>
                      </div>
                  </div>
              </div>
          </div>

          {/* 02 — THE GUILD LIST */}
          <div className="mb-48">
              <div className="flex items-end justify-between border-b-2 border-[#041E42] pb-4 mb-0">
                    <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#041E42] uppercase">02 — The Donor Guild</span>
              </div>

              {DONOR_TIERS.map((tier, idx) => {
                  const isHero = tier.title === "The Spirit of ’46";
                  const [amount, frequency] = tier.price.includes('/') ? tier.price.split('/') : [tier.price, 'annually'];

                  return (
                      <div 
                        key={idx} 
                        // FIXED: Removed negative margins and pop-out padding from mobile
                        className={`group relative border-b border-[#041E42]/20 py-12 grid grid-cols-1 md:grid-cols-12 gap-y-6 gap-x-4 items-start transition-all duration-500 md:hover:bg-white md:hover:pl-6 md:-ml-6 md:pl-6 md:pr-6 px-0 md:px-0 ${isHero ? 'bg-[#041E42]/5 px-4 md:px-0' : ''}`}
                      >
                          <div className="md:col-span-2 pt-2">
                              <span className={`text-[11px] font-sans font-bold tracking-[0.1em] uppercase transition-colors ${isHero ? 'text-[#D50032]' : 'text-[#041E42]/70 group-hover:text-[#D50032]'}`}>
                                  {isHero ? "★ Recommended" : `Guild Level 0${idx + 1}`}
                              </span>
                          </div>
                          <div className="md:col-span-6 md:pr-8 text-left">
                              <h4 className="text-4xl md:text-5xl font-serif text-[#041E42] italic leading-none mb-6">{tier.title}</h4>
                              <p className="text-[#041E42] text-lg font-serif leading-tight opacity-60 max-w-md [text-wrap:balance]">{typeset(tier.description)}</p>
                          </div>
                          <div className="md:col-span-2 pt-3 text-left">
                               <span className="text-lg font-sans font-bold text-[#041E42] tracking-wide tabular-nums block">{amount}</span>
                               <span className="text-[9px] font-sans font-bold tracking-[0.1em] text-[#041E42]/70 uppercase">per {frequency}</span>
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

          {/* 03 — CAPITAL PROJECTS */}
          <div className="border-t-2 border-[#041E42] pt-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12">
              <div className="lg:col-span-4 lg:sticky lg:top-40 h-fit">
                <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] uppercase block mb-4">
                  03 — Capital Projects
                </span>
              </div>

              <div className="lg:col-span-8">
                <div className="flex flex-col md:flex-row gap-12 mb-20 items-start">
                  <div className="flex flex-row md:flex-col items-center border-b md:border-b-0 md:border-r border-[#041E42]/10 pb-4 md:pb-0 md:pr-12 w-full md:w-auto justify-between md:justify-start">
                    <span className="text-[80px] md:text-[140px] font-serif font-light leading-none md:leading-[0.7] text-[#D50032] select-none tracking-tighter pt-0 md:pt-12">
                      A
                    </span>
                    <span className="text-[9px] md:text-[10px] font-sans font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#041E42]/40 md:mt-4">
                      The Archive
                    </span>
                  </div>

                  <div className="flex-1 pt-2 md:pt-4 text-left">
                    <h3 className="text-2xl md:text-4xl font-serif font-bold text-[#041E42] mb-6 leading-tight tracking-tight">
                      {typeset("Archives are the memory of the Brotherhood.")}
                    </h3>
                    <p className="text-[#041E42] text-lg md:text-xl font-serif leading-relaxed opacity-80 [text-wrap:balance] mb-12">
                      {typeset("Fifty-two years of harmony are currently locked in aging 1/4-inch analog reels. We are reclaiming the magnetic signatures of our founders to ensure our history carries on for the next century.")}
                    </p>

                    {demoTrack && (
                      <div className="group relative border-t border-b border-[#041E42]/20 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 transition-all duration-500 md:hover:bg-white md:hover:px-8 md:-mx-8 cursor-default">
                        <div className="max-w-md">
                          <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[#D50032] mb-3 block">
                            Technical Evidence: 1958 Pressing
                          </span>
                          <p className="text-sm font-serif leading-relaxed text-[#041E42]/70 italic [text-wrap:balance]">
                            The <strong className="text-[#041E42] font-bold not-italic">Raw</strong> transfer is an uncalibrated extraction from the original 1958 vinyl. The <strong className="text-[#041E42] font-bold not-italic">Master</strong> demonstrates the high-fidelity clarity of a professional-grade, reel-to-reel digitization.
                          </p>
                        </div>

                        <button 
                          onClick={() => playTrack(demoTrack)}
                          className="flex flex-shrink-0 items-center gap-6 group/btn"
                        >
                          <div className="flex flex-col text-right">
                            <span className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42]">Listen</span>
                            <span className="text-[9px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42]/40">A/B Comparison</span>
                          </div>
                          <div className="w-16 h-16 flex items-center justify-center border border-[#041E42] text-[#041E42] group-hover/btn:bg-[#D50032] group-hover/btn:border-[#D50032] group-hover/btn:text-white transition-all duration-300">
                            <span className="text-2xl translate-x-0.5">▶</span>
                          </div>
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-12">
                  <a 
                    href="https://donate.stripe.com/fZe3g6frb6ys92wfZ4" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group w-full flex items-center justify-between border border-[#041E42] py-10 px-6 md:px-10 transition-all duration-[600ms] ease-[cubic-bezier(0.19,1,0.22,1)] hover:bg-[#041E42] hover:text-[#F4F4F3] hover:shadow-xl hover:shadow-[#041E42]/10"
                  >
                    <div className="flex flex-col text-left pr-4">
                      <span className="text-[11px] font-sans font-bold tracking-[0.2em] uppercase mb-2">Capital Contribution</span>
                      <span className="text-xl md:text-2xl font-serif italic leading-tight">{typeset("Restoring the Past & Investing in the Future")}</span>
                    </div>
                    <div className="flex items-center gap-8 shrink-0">
                      <span className="hidden md:block text-[10px] font-sans font-bold tracking-[0.1em] uppercase opacity-0 group-hover:opacity-60 transition-opacity">One-time Gift</span>
                      <span className="text-3xl md:text-4xl font-light group-hover:translate-x-3 transition-transform duration-500">→</span>
                    </div>
                  </a>

                  <div className="pt-8">
                    <RestorationProgress phases={RESTORATION_PHASES} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-48 pt-4 border-t border-[#041E42] flex justify-start opacity-40 hover:opacity-100 transition-opacity">
              <a href="https://billing.stripe.com/login/eVa00CdRM41u2ZibII" target="_blank" rel="noopener noreferrer" className="text-[#041E42] text-[10px] font-sans font-bold tracking-[0.1em] uppercase hover:text-[#D50032] transition-colors">
                  Manage Existing Subscription →
              </a>
          </div>

        </div>
    </div>
);
};

export default PhilanthropyView;
