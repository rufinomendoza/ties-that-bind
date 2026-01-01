import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionHeader from '../components/SectionHeader';
import { typeset } from '../utils/formatters';
import { DONOR_TIERS } from '../data';

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
                const isFeatured = tier.title === "";

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
                                className={`flex items-center gap-4 text-[10px] font-sans font-bold tracking-[0.2em] uppercase transition-all duration-300 px-6 py-3 border
                                    ${isFeatured 
                                        ? 'bg-[#D50032] border-[#D50032] text-white hover:bg-[#A51C30]' 
                                        : 'bg-transparent border-[#041E42] text-[#041E42] hover:bg-[#041E42] hover:text-white'
                                    }`}
                             >
                                <span>{isFeatured ? 'Most Impactful' : 'Join'}</span>
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

export default PhilanthropyView;