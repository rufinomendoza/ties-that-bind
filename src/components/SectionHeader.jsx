import React from 'react';
import { typeset } from '../utils/formatters';

const SectionHeader = ({ title, number }) => (
  <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#041E42] pb-8 mb-32 fade-in-element gap-4">
    <h2 className="text-6xl md:text-9xl font-serif text-[#041E42] tracking-tight leading-none [text-wrap:balance]">
      {typeset(title)}
    </h2>
    <span className="text-[11px] font-sans font-bold tracking-[0.1em] text-[#041E42]/70 uppercase md:mb-4">
      {number}
    </span>
  </div>
);

export default SectionHeader;