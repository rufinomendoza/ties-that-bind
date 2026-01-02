import React from 'react';
import { typeset } from '../utils/formatters';

const SectionHeader = ({ title, number }) => (
  <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#041E42] pb-8 mb-32 fade-in-element gap-4">
    {/* CHANGED: 
        - text-5xl (Mobile): Fits "Haberdashery"
        - md:text-7xl (Tablet/iPad): Prevents overflow on 11" screens
        - lg:text-9xl (Desktop): Restores the massive impact on wide screens 
    */}
    <h2 className="text-5xl md:text-7xl lg:text-9xl font-serif text-[#041E42] tracking-tight leading-none [text-wrap:balance]">
      {typeset(title)}
    </h2>
    
    {/* CHANGED: 
        - font-mono: Matches the "Index" aesthetic
        - shrink-0: Prevents the number from being squashed/pushed off
        - md:text-right: Aligns strictly to the grid edge
    */}
    <span className="text-[11px] font-mono font-bold tracking-[0.1em] text-[#041E42]/70 uppercase md:mb-4 md:text-right shrink-0">
      {number}
    </span>
  </div>
);

export default SectionHeader;