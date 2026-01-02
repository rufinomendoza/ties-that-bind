import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionHeader from '../components/SectionHeader';
import { typeset } from '../utils/formatters';
import { STORE_DATA } from '../data'; // Import data directly here

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
              Performance standard since 1946. This 2021 vintage is commissioned for the Actives and provisioned for the Alumni. Pure silk. Designed to replace the lost, the stained, and the borrowed.
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
        {STORE_DATA.map((item, idx) => (
            <div 
                key={item.id} 
                className="group relative border-b border-[#041E42]/20 py-16 grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-8 items-start transition-all duration-500 hover:bg-white hover:pl-6 -ml-6 pl-6 pr-6 cursor-default"
            >
                {/* Col 1: THE SPEC (Ref & Origin) */}
                <div className="md:col-span-2 flex flex-col gap-1">
                    <span className="text-[11px] font-sans font-bold tracking-[0.1em] text-[#D50032] uppercase">
                        Ref. 0{idx + 1}
                    </span>
                    <span className="text-[9px] font-sans font-bold tracking-[0.05em] text-[#041E42]/40 uppercase">
                        Pure Silk · UK Woven
                    </span>
                </div>

                {/* Col 2: THE ARTIFACT (Image) */}
                <div className="md:col-span-3">
                    <div className="aspect-[3/4] bg-[#E5E5E4] overflow-hidden w-full shadow-2xl shadow-[#041E42]/5">
                        <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover grayscale mix-blend-multiply group-hover:mix-blend-normal group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100"
                        />
                    </div>
                </div>

                {/* Col 3: THE NARRATIVE (Title & Desc) */}
                <div className="md:col-span-5 flex flex-col justify-start pt-2">
                    <h4 className="text-5xl md:text-6xl font-serif text-[#041E42] italic leading-none mb-8">
                        {item.name}
                    </h4>
                    <p className="text-[#041E42] text-xl font-serif leading-relaxed opacity-80 max-w-md [text-wrap:balance]">
                        {typeset(item.desc)}
                    </p>
                    {/* Added: Specific detail for the "A+" feel */}
                    <p className="mt-6 text-[10px] font-sans font-bold uppercase tracking-widest text-[#041E42]/40">
                        Standard Issue Battle Gear
                    </p>
                </div>

                {/* Col 4: THE ACQUISITION (Price & CTA) */}
                <div className="md:col-span-2 flex flex-col justify-between h-full pt-2 items-start md:items-end gap-12">
                    <div className="text-left md:text-right">
                        <span className="text-3xl font-sans font-bold text-[#041E42] tracking-tight tabular-nums block">
                            ${item.price}
                        </span>
                        <span className="text-[9px] font-sans font-bold tracking-[0.1em] text-[#041E42]/50 uppercase">
                            Plus Shipping
                        </span>
                    </div>
                    
                    <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full md:w-auto flex items-center justify-center gap-4 px-8 py-4 border border-[#041E42] text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[#041E42] hover:bg-[#041E42] hover:text-white transition-all duration-300"
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




export default StoreView;