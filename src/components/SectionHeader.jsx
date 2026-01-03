import React from 'react';
import { typeset } from '../utils/formatters';

const SectionHeader = ({ title, number }) => (
  <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#041E42] pb-8 mb-32 fade-in-element gap-4">
    {/* ✅ SEMANTIC FIX: Promoted H2 to H1 to ensure main index pages have a top-level heading */}
    <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-[#041E42] tracking-tight leading-none [text-wrap:balance]">
      {typeset(title)}
    </h1>
    
    <span className="text-[11px] font-mono font-bold tracking-[0.1em] text-[#041E42]/70 uppercase md:mb-4 md:text-right shrink-0">
      {number}
    </span>
  </div>
);

export default SectionHeader;