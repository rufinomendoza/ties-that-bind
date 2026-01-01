import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionHeader from '../components/SectionHeader';

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

export default BackstageView;