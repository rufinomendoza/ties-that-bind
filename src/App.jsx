import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ChevronDown,
  ExternalLink,
  ChevronLeft,
  Play,
  Ticket
} from 'lucide-react';

// Import Data (Added STORE_DATA)
import { EVENTS_DATA, ALBUMS_DATA, DONOR_TIERS, STORE_DATA } from './data';

// --- Local Imports ---
// We ONLY need images used directly in the App.jsx layout (Hero & Feature)
import IMG_CHERRY_TREE from './assets/composite-set-compressed.jpg';
import IMG_CTM_BOND from './assets/ctm-bond.jpeg';

// NOTE: All Album, Store, and Logo PNG imports have been removed 
// because they are now handled by data.js or the SVG component.


// --- Preview Placeholders (Comment out for Production) ---
// const IMG_CHERRY_TREE = "https://placehold.co/1920x1080/0A0A0A/FFFFFF?text=The+Classic";
// const IMG_CTM_BOND = "https://placehold.co/1200x1600/111111/EEEEEE?text=Cherry+Tree+Massacre";
// const IMG_NECKTIE = "https://placehold.co/1000x1200/E5E5E4/041E42?text=Necktie";
// const IMG_BOWTIE = "https://placehold.co/1000x1200/E5E5E4/041E42?text=Bowtie";
// const IMG_DCDM = "https://placehold.co/1000x1000/2A3B55/FFFFFF?text=DCDM";
// const IMG_PARTNERS = "https://placehold.co/1000x1000/4A5B75/FFFFFF?text=Partners";
// const IMG_THREE_STRIPES = "https://placehold.co/1000x1000/6A7B95/FFFFFF?text=Three+Stripes";
// const IMG_PROSPECT = "https://placehold.co/1000x1000/8A9BB5/FFFFFF?text=36th+%26+Prospect";
// const IMG_BATTLE_GEAR = "https://placehold.co/1000x1000/9AABCA/FFFFFF?text=Battle+Gear";
// const IMG_PSRC = "https://placehold.co/1000x1000/B0BCCF/FFFFFF?text=PSRC";
// const IMG_LTGCR = "https://placehold.co/1000x1000/C4CDDC/FFFFFF?text=LTGCR";
// const IMG_HOYA_SAXA = "https://placehold.co/1000x1000/D8DDE6/FFFFFF?text=Hoya+Saxa";
// const IMG_CHIMES_75 = "https://placehold.co/1000x1000/2A3B55/FFFFFF?text=Chimes+75";
// const IMG_CHIMES_66 = "https://placehold.co/1000x1000/4A5B75/FFFFFF?text=Chimes+66";
// const IMG_1959 = "https://placehold.co/1000x1000/6A7B95/FFFFFF?text=1959";
// const IMG_UNDER_THE_TREE = "https://placehold.co/1000x1000/8A9BB5/FFFFFF?text=Under+The+Tree";
// const IMG_PUERTO_RICO = "https://placehold.co/1200x800/111111/EEEEEE?text=Puerto+Rico";


// --- Logo ---
const Logo = ({ className = "" }) => (
<svg
  viewBox="0 0 262 113.91" fill="currentColor"   // CRITICAL: This allows Tailwind text-color to control the fill
  xmlns="http://www.w3.org/2000/svg"
  className={className}>
  <g>
    <path className="cls-1" d="M32.97,85.34c2.08,0,3.98.55,6.08,1.22.34-.16.57-.26.75-.34.81-.34.94-.39,1.17-.39.29,0,.39.1.39.6v4.86c0,.23-.13.39-.31.39s-.39-.29-.55-.78c-.78-2.55-4.34-4.6-7.36-4.6-1.51,0-3.15.29-4.29,1.3-1.69,1.48-2.39,3.67-2.39,7.38s1.85,8.35,6.47,8.35c1.3,0,2.7-.44,3.74-1.2.47-.36.86-.73.86-1.09v-2.39c0-1.79-.52-2.16-1.43-2.16h-.34c-.1,0-.13-.03-.13-.13v-.68c0-.08.03-.1.13-.1h7.05c.1,0,.13.03.13.1v.68c0,.1-.03.13-.13.13h-.34c-.91,0-1.43.36-1.43,2.16s.05,3.33.1,3.61c-2.42,1.27-5.23,1.82-8.5,1.82-6.11,0-10.53-3.64-10.53-9.18,0-3.2.81-5.15,2.91-7.02,1.85-1.64,4.63-2.55,7.93-2.55Z"/>
    <path className="cls-1" d="M50.6,101.88c0,.68.78.99,2.73.99,4.13,0,5.25-.62,6.89-2.94.62-.86.91-1.33,1.22-1.33.1,0,.18.13.18.34,0,.1-.03.34-.13.65l-1.17,3.85c-.08.23-.16.34-.52.34h-15c-.1,0-.13-.03-.13-.1v-.68c0-.1.03-.13.13-.13h.34c1.43,0,1.95-.36,1.95-2.16v-12.06c0-1.79-.52-2.16-1.95-2.16h-.34c-.1,0-.13-.03-.13-.13v-.68c0-.08.03-.1.13-.1h14.59c.47,0,.49.03.65.36l1.48,3.43c.1.23.16.47.16.6,0,.21-.1.34-.26.34-.26,0-.6-.39-1.07-1.04-1.59-2.16-4.32-2.81-7.02-2.81-2.55,0-2.73.36-2.73,2.5v4.94h3.85c1.79,0,2.94-1.69,2.94-3.12v-.34c0-.1.03-.13.13-.13h.68c.08,0,.1.03.1.13v8.09c0,.1-.03.13-.1.13h-.68c-.1,0-.13-.03-.13-.13v-.34c0-1.43-1.14-3.12-2.94-3.12h-3.85v6.81Z"/>
    <path className="cls-1" d="M73.58,85.22c5.43,0,9.75,3.43,9.75,9.59,0,5.3-4.16,9.31-9.67,9.31-5.85,0-9.85-3.8-9.85-9.33,0-5.12,3.25-9.57,9.78-9.57ZM73.63,103.42c4.84,0,5.62-4.45,5.62-8.66,0-3.9-.36-8.84-5.64-8.84-4.11,0-5.82,2.55-5.82,8.76,0,3.95.52,8.74,5.85,8.74Z"/>
    <path className="cls-1" d="M102.26,90.21c0,2.08-1.3,3.43-3.85,4.03-.18.03-.26.08-.26.13s.08.13.21.26c.86.83,1.4,1.74,2.31,3.51,1.07,2.08,1.3,2.94,1.82,3.69.47.73,1.22,1.04,1.98,1.04h.47c.1,0,.13.03.13.13v.68c0,.08-.03.1-.13.1h-5.41c-.18,0-.23-.05-.29-.18-1.07-2.7-2.05-4.78-2.94-6.5-.73-1.38-1.01-1.82-1.66-2.29h-2.44v5.9c0,1.79.52,2.16,1.95,2.16h.34c.1,0,.13.03.13.13v.68c0,.08-.03.1-.13.1h-8.14c-.1,0-.13-.03-.13-.1v-.68c0-.1.03-.13.13-.13h.34c1.43,0,1.95-.36,1.95-2.16v-12.06c0-1.79-.52-2.16-1.95-2.16h-.34c-.1,0-.13-.03-.13-.13v-.68c0-.08.03-.1.13-.1h8.63c4.55,0,7.28,1.77,7.28,4.63ZM93.52,94.11c3.25,0,5.36-1.69,5.36-4.32,0-2.37-1.56-3.56-4.76-3.56-1.51,0-1.92.29-1.92,2.03v5.8c.6.05,1.01.05,1.33.05Z"/>
    <path className="cls-1" d="M117.6,85.34c2.08,0,3.98.55,6.08,1.22.34-.16.57-.26.75-.34.81-.34.94-.39,1.17-.39.29,0,.39.1.39.6v4.86c0,.23-.13.39-.31.39s-.39-.29-.55-.78c-.78-2.55-4.34-4.6-7.36-4.6-1.51,0-3.15.29-4.29,1.3-1.69,1.48-2.39,3.67-2.39,7.38s1.85,8.35,6.47,8.35c1.3,0,2.7-.44,3.74-1.2.47-.36.86-.73.86-1.09v-2.39c0-1.79-.52-2.16-1.43-2.16h-.34c-.1,0-.13-.03-.13-.13v-.68c0-.08.03-.1.13-.1h7.05c.1,0,.13.03.13.1v.68c0,.1-.03.13-.13.13h-.34c-.91,0-1.43.36-1.43,2.16s.05,3.33.1,3.61c-2.42,1.27-5.23,1.82-8.5,1.82-6.11,0-10.53-3.64-10.53-9.18,0-3.2.81-5.15,2.91-7.02,1.85-1.64,4.63-2.55,7.93-2.55Z"/>
    <path className="cls-1" d="M135.23,101.88c0,.68.78.99,2.73.99,4.13,0,5.25-.62,6.89-2.94.62-.86.91-1.33,1.22-1.33.1,0,.18.13.18.34,0,.1-.03.34-.13.65l-1.17,3.85c-.08.23-.16.34-.52.34h-15c-.1,0-.13-.03-.13-.1v-.68c0-.1.03-.13.13-.13h.34c1.43,0,1.95-.36,1.95-2.16v-12.06c0-1.79-.52-2.16-1.95-2.16h-.34c-.1,0-.13-.03-.13-.13v-.68c0-.08.03-.1.13-.1h14.59c.47,0,.49.03.65.36l1.48,3.43c.1.23.16.47.16.6,0,.21-.1.34-.26.34-.26,0-.6-.39-1.07-1.04-1.59-2.16-4.32-2.81-7.02-2.81-2.55,0-2.73.36-2.73,2.5v4.94h3.85c1.79,0,2.94-1.69,2.94-3.12v-.34c0-.1.03-.13.13-.13h.68c.08,0,.1.03.1.13v8.09c0,.1-.03.13-.1.13h-.68c-.1,0-.13-.03-.13-.13v-.34c0-1.43-1.14-3.12-2.94-3.12h-3.85v6.81Z"/>
    <path className="cls-1" d="M158.16,100.71c0,1.79.52,2.16,1.95,2.16h.34c.1,0,.13.03.13.13v.68c0,.08-.03.1-.13.1h-8.09c-.1,0-.13-.03-.13-.1v-.68c0-.1.03-.13.13-.13h.34c1.43,0,1.95-.36,1.95-2.16v-12.06c0-1.59-.42-2.13-1.51-2.13-2.39,0-3.48.81-5.07,2.91-.26.34-.47.68-.62.68-.13,0-.26-.13-.26-.23,0-.55.57-2.03.99-4.34.05-.31.16-.62.39-.62.1,0,.21.03.65.31.31.21.91.36,2.63.36h9.13c1.72,0,2.31-.16,2.63-.36.44-.29.55-.31.65-.31.23,0,.34.31.39.62.42,2.31.99,3.8.99,4.34,0,.1-.13.23-.26.23-.16,0-.36-.34-.62-.68-1.59-2.11-2.68-2.91-5.07-2.91-1.09,0-1.51.55-1.51,2.13v12.06Z"/>
    <path className="cls-1" d="M177.03,85.22c5.43,0,9.75,3.43,9.75,9.59,0,5.3-4.16,9.31-9.67,9.31-5.85,0-9.85-3.8-9.85-9.33,0-5.12,3.25-9.57,9.78-9.57ZM177.08,103.42c4.84,0,5.62-4.45,5.62-8.66,0-3.9-.36-8.84-5.64-8.84-4.11,0-5.82,2.55-5.82,8.76,0,3.95.52,8.74,5.85,8.74Z"/>
    <path className="cls-1" d="M201.92,91.82l-1.56-4.06c-.31-.78-.78-1.27-1.56-1.27h-.34c-.1,0-.13-.03-.13-.13v-.68c0-.08.03-.1.13-.1h8.03c.1,0,.13.03.13.1v.68c0,.1-.03.13-.13.13h-.34c-1.25.03-1.82.31-1.82.96,0,.21.08.47.21.73l4.26,9.88,3.98-10.06c.08-.18.13-.39.13-.68,0-.47-.26-.83-1.09-.83h-.34c-.1,0-.13-.03-.13-.13v-.68c0-.08.03-.1.13-.1h5.33c.1,0,.13.03.13.1v.68c0,.1-.03.13-.13.13h-.34c-1.56.13-2.11.55-2.76,2.24l-5.9,15.05c-.08.18-.26.34-.39.34s-.29-.16-.36-.34l-4.55-10.48-4.63,10.48c-.08.18-.26.34-.42.34s-.31-.16-.39-.34l-6.16-16.02c-.23-.73-.94-1.27-1.87-1.27h-.34c-.1,0-.13-.03-.13-.13v-.68c0-.08.03-.1.13-.1h8.16c.1,0,.13.03.13.1v.68c0,.1-.03.13-.13.13h-.34c-1.43,0-1.72.31-1.72.81,0,.13.1.44.21.75l3.95,9.98,2.94-6.21Z"/>
    <path className="cls-1" d="M237.28,103.94c0,.21-.03.21-.1.21-.1,0-.13-.03-.23-.13l-14.59-15.42c-.21-.21-.31-.31-.39-.31s-.08.18-.08.47v11.96c0,1.79.6,2.16,2.03,2.16h.21c.1,0,.13.03.13.13v.68c0,.08-.03.1-.13.1h-5.43c-.1,0-.13-.03-.13-.1v-.68c0-.1.03-.13.13-.13h.21c1.43,0,2.21-.36,2.21-2.16v-10.97c0-1.98-.03-2.18-.57-2.7-.42-.39-.73-.55-1.64-.55h-.21c-.1,0-.13-.03-.13-.13v-.68c0-.08.03-.1.13-.1h5.38c.31,0,.52.08.73.31l11.7,12.35v-9.59c0-1.79-.6-2.16-2.03-2.16h-.21c-.1,0-.13-.03-.13-.13v-.68c0-.08.03-.1.13-.1h5.43c.1,0,.13.03.13.1v.68c0,.1-.03.13-.13.13h-.21c-1.43,0-2.21.36-2.21,2.16v15.29Z"/>
  </g>
  <g>
    <g>
      <g>
        <path className="cls-1" d="M158.43,42.99c0,.24.12.36.24.36.24,0,.6-.36.9-.66,3.54-3.66,7.02-5.1,9.54-5.1,2.04,0,3.84,1.5,3.84,3.3,0,2.22-2.04,6.06-3.54,9.54-2.16,4.98-3.36,7.5-3.36,8.52,0,.78.54,1.38,1.2,1.38.9,0,2.1-1.08,4.02-3,.3-.3.54-.42.66-.42.42,0,.72.3.72.72,0,.18-.12.6-.3.78-2.88,2.88-6.06,4.8-9.3,4.8-1.08,0-1.98-.78-1.98-1.74,0-1.26,2.82-7.02,4.86-12.12,1.14-2.82,2.46-5.28,2.46-7.26,0-1.08-.72-1.86-2.04-1.86-3.24,0-11.1,7.26-15.48,19.44-1.08,2.94-1.32,3.12-3,3.12-.96,0-1.62-.3-1.62-1.08,0-1.08,3.48-8.28,4.98-11.7,1.98-4.44,9.06-19.86,10.8-24.12.72-1.8.96-2.46.96-3.24,0-.72-.9-1.2-2.64-1.56-.36-.06-.66-.48-.66-.78,0-.42.3-.78.66-.78,2.1,0,2.52,0,3.9-.06,1.5-.06,2.52-.24,3.12-.24.9,0,1.08.18,1.08.84,0,.9-.72,1.98-1.2,3.06-1.92,4.2-5.88,12.84-8.7,19.14-.06.3-.12.54-.12.72Z"/>
        <path className="cls-1" d="M185.73,37.53c1.26,0,1.8.72,1.8,1.74,0,.96-.42,2.22-.78,2.94-4.26,9.18-7.62,14.46-7.62,16.5,0,.36.24,1.08.6,1.08.9,0,3.06-2.22,5.22-4.74.3-.3.54-.42.66-.42.42,0,.72.3.72.72,0,.18-.06.42-.24.6-.9.9-2.28,2.88-5.4,5.28-1.26.96-2.94,1.98-4.44,1.98-1.08,0-1.98-1.02-1.98-2.22,0-2.82,6.12-13.74,7.08-15.6.9-1.74,1.44-2.4,1.44-3.18,0-.48-.3-.9-.72-.9-.9,0-2.22,1.32-4.38,3.3-.24.18-.42.36-.72.36-.36,0-.78-.36-.78-.66,0-.36.18-.54.42-.78,3.24-2.76,3.66-3.18,6.06-4.98,1.02-.78,2.1-1.02,3.06-1.02ZM192.09,23.25c0,1.8-1.02,3-2.58,3-1.68,0-2.7-.96-2.7-2.7s.96-2.82,2.7-2.82c1.38,0,2.58.9,2.58,2.52Z"/>
        <path className="cls-1" d="M218.12,59.37c0,.36.18.66.54.66.9,0,3-2.16,4.68-4.32.24-.36.54-.42.66-.42.42,0,.72.3.72.72,0,.18-.18.6-.3.78-2.1,3-6.18,6.42-9.84,6.42-1.08,0-1.92-.84-1.92-1.92,0-2.46,8.76-16.02,8.76-19.68,0-.78-.42-1.38-1.08-1.38-4.02,0-10.86,10.74-15.12,19.44-1.38,2.82-1.56,3.12-3.24,3.12-1.86,0-2.22-.3-2.22-1.08,0-1.08,4.5-8.88,6-12.3.78-1.8,2.76-6.42,2.76-7.2,0-.96-.24-1.74-.9-1.74-2.64,0-11.88,11.4-14.82,19.02-1.14,2.94-2.1,3.3-3.78,3.3-.96,0-1.62-.3-1.62-1.08,0-1.08,4.2-8.88,5.7-12.3.78-1.8,3.3-7.38,3.3-8.16,0-.54-.3-.78-.78-.78-.9,0-2.94,1.86-4.98,4.2-.18.24-.36.42-.66.42-.36,0-.66-.24-.66-.54,0-.24.18-.66.42-.9,1.92-2.22,6-6.12,9.3-6.12,1.5,0,1.98.72,1.98,1.74,0,1.5-1.14,3.66-1.8,4.74-.3.48-.36.66-.36.9,0,.18.18.3.3.3.18,0,.48-.24.96-.78,4.38-4.62,7.62-6.9,10.5-6.9,1.68,0,2.22,1.02,2.22,2.34,0,1.62-.84,3.66-1.38,4.92-.12.24-.12.42-.12.54,0,.18.06.24.18.24.3,0,.6-.24.78-.42,4.26-5.16,6.72-7.38,10.68-7.38,1.38,0,2.94.78,2.94,2.04,0,5.46-7.8,16.44-7.8,19.56Z"/>
        <path className="cls-1" d="M237.92,57.87c.24-.24.36-.36.6-.36.3,0,.72.48.72.78,0,.12-.06.24-.36.66-1.74,2.46-5.52,4.5-8.64,4.5s-4.8-2.4-4.8-5.58c0-9.9,9.12-20.46,16.56-20.46,2.22,0,3.06.96,3.06,3.24,0,4.92-5.16,9.18-13.26,10.08-.72.06-.9.18-1.2,1.2-.42,1.44-.84,3.72-.84,5.4,0,2.46.72,3.9,2.94,3.9,1.92,0,3.6-1.44,5.22-3.36ZM233.61,44.19c-1.02,1.68-1.74,3.9-1.74,4.8,0,.24.12.42.36.42s.54-.06,1.02-.18c5.28-1.5,8.04-4.98,8.04-7.44,0-1.44-.9-2.4-2.22-2.4-1.68,0-3.54,1.62-5.46,4.8Z"/>
        <path className="cls-1" d="M260.48,40.35c0,1.08-.84,1.98-1.92,1.98-1.98,0-2.64-2.88-4.68-2.88-1.08,0-1.98,1.02-1.98,3.66,0,4.08,2.04,7.92,2.04,11.64,0,4.74-3.66,8.58-8.16,8.58-3.48,0-6.3-1.56-6.3-3.48,0-1.44,1.02-2.64,2.28-2.64,2.7,0,2.52,4.92,4.92,4.92,1.86,0,3.42-1.74,3.42-3.84,0-4.02-1.74-8.34-1.74-11.64,0-4.8,3.42-8.88,7.62-9.06,2.46,0,4.5,1.26,4.5,2.76Z"/>
      </g>
      <path className="cls-1" d="M147.27,23.26c.36.29,1.08.65,1.44.65,1.22,0,2.16-1.8,3.17-1.8.5,0,.72.36.72.79,0,.29-.07.72-.22,1.22l-3.38,11.74c-.22.79-.65,1.15-1.22,1.15-.5,0-.72-.22-.72-1.15,0-8.71-4.25-15.05-10.58-15.05-11.45,0-29.52,18-29.52,36.94,0,9.94,4.75,16.42,12.53,16.42,11.59,0,21.03-9,21.03-20.09,0-5.83-3.02-9.29-7.56-9.29s-8.21,3.02-8.21,6.7c0,1.73.58,2.16,1.3,2.16.65,0,1.15-.58,1.87-.58.94,0,1.66,1.15,1.66,2.59,0,2.09-1.58,3.74-3.6,3.74-2.81,0-5.11-2.45-5.11-5.47,0-6.05,5.33-10.95,11.95-10.95s10.15,4.25,10.15,10.73c0,12.67-11.02,22.9-24.63,22.9-9.79,0-17.79-7.7-17.79-17.21,0-20.02,18.51-40.4,36.22-40.4,5.11,0,7.06,1.37,10.51,4.25Z"/>
    </g>
    <g>
      <g>
        <path className="cls-1" d="M49.12,42.99c0,.24.12.36.24.36.24,0,.6-.36.9-.66,3.54-3.66,7.02-5.1,9.54-5.1,2.04,0,3.84,1.5,3.84,3.3,0,2.22-2.04,6.06-3.54,9.54-2.16,4.98-3.36,7.5-3.36,8.52,0,.78.54,1.38,1.2,1.38.9,0,2.1-1.08,4.02-3,.3-.3.54-.42.66-.42.42,0,.72.3.72.72,0,.18-.12.6-.3.78-2.88,2.88-6.06,4.8-9.3,4.8-1.08,0-1.98-.78-1.98-1.74,0-1.26,2.82-7.02,4.86-12.12,1.14-2.82,2.46-5.28,2.46-7.26,0-1.08-.72-1.86-2.04-1.86-3.24,0-11.1,7.26-15.48,19.44-1.08,2.94-1.32,3.12-3,3.12-.96,0-1.62-.3-1.62-1.08,0-1.08,3.48-8.28,4.98-11.7,1.98-4.44,9.06-19.86,10.8-24.12.72-1.8.96-2.46.96-3.24,0-.72-.9-1.2-2.64-1.56-.36-.06-.66-.48-.66-.78,0-.42.3-.78.66-.78,2.1,0,2.52,0,3.9-.06,1.5-.06,2.52-.24,3.12-.24.9,0,1.08.18,1.08.84,0,.9-.72,1.98-1.2,3.06-1.92,4.2-5.88,12.84-8.7,19.14-.06.3-.12.54-.12.72Z"/>
        <path className="cls-1" d="M77.44,57.87c.24-.24.36-.36.6-.36.3,0,.72.48.72.78,0,.12-.06.24-.36.66-1.74,2.46-5.52,4.5-8.64,4.5s-4.8-2.4-4.8-5.58c0-9.9,9.12-20.46,16.56-20.46,2.22,0,3.06.96,3.06,3.24,0,4.92-5.16,9.18-13.26,10.08-.72.06-.9.18-1.2,1.2-.42,1.44-.84,3.72-.84,5.4,0,2.46.72,3.9,2.94,3.9,1.92,0,3.6-1.44,5.22-3.36ZM73.12,44.19c-1.02,1.68-1.74,3.9-1.74,4.8,0,.24.12.42.36.42s.54-.06,1.02-.18c5.28-1.5,8.04-4.98,8.04-7.44,0-1.44-.9-2.4-2.22-2.4-1.68,0-3.54,1.62-5.46,4.8Z"/>
      </g>
      <path className="cls-1" d="M22.25,16.43c-9.43,0-16.27,2.88-16.27,9.29,0,1.73.94,3.74,2.3,3.74.79,0,1.22-.58,2.23-.58,2.09,0,3.74,1.58,3.74,3.6,0,1.87-1.51,3.38-3.31,3.38-3.82,0-6.91-4.18-6.91-9.29,0-9.36,8.21-14.26,22.61-14.26,3.6,0,11.67.5,19.37,1.01,2.52.14,5.69.36,6.41.36,1.87,0,2.95-.43,2.95-1.51s-.36-1.22-.36-2.02.72-1.44,1.66-1.44c1.08,0,1.94.94,1.94,2.02,0,3.82-5.04,6.91-11.31,6.91-2.74,0-3.02-.22-6.05-.22-2.74,0-4.75,1.44-5.47,3.96l-10.22,35.57c-.14.5-.22,1.01-.22,1.44,0,1.58.94,2.52,2.66,2.52h3.67c.5,0,.79.22.79.94s-.29.86-.79.86H9.87c-.5,0-.65-.29-.65-.86,0-.72.14-.94.65-.94h3.1c2.45,0,4.75-1.58,5.4-3.96l10.44-36.44c.14-.58.22-1.08.22-1.51,0-1.51-.86-2.3-2.66-2.45-1.44-.14-2.81-.14-4.1-.14Z"/>
    </g>
  </g>
</svg>
);



// --- Typographic Helper: The Typesetter ---
const typeset = (text) => {
  if (!text) return text;
  if (Array.isArray(text)) return text.map(t => typeset(t));
  return text
    .replace(/(\W|^)"/g, '$1“').replace(/"/g, '”') // Smart Quotes
    .replace(/'/g, '’') // Smart Apostrophes
    .replace(/(\d)-(\d)/g, '$1–$2') // En-dashes for ranges
    .replace(/ - /g, ' — ') // Em-dashes for breaks
    .replace(/ \/ /g, ' · '); // ADDED: Slashes to Interpuncts
};

// --- Shared Components ---
const SectionHeader = ({ title, number }) => (
  <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#041E42] pb-8 mb-32 fade-in-element gap-4">
    <h2 className="text-6xl md:text-9xl font-serif text-[#041E42] tracking-tight leading-none [text-wrap:balance]">
      {typeset(title)}
    </h2>
    <span className="text-[11px] font-sans font-bold tracking-[0.1em] text-[#041E42]/60 uppercase md:mb-4">
      {number}
    </span>
  </div>
);

// --- Swiss System NavBar ---
const NavBar = ({ activePage, navigateTo, mobileMenuOpen, setMobileMenuOpen }) => {
  const NavButton = ({ page, children, mobile = false }) => (
    <button onClick={() => { navigateTo(page); if (mobile) setMobileMenuOpen(false); }} className={`${mobile ? 'block w-full text-center text-4xl font-serif py-6 text-[#041E42] border-b border-[#041E42]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D50032] focus-visible:ring-inset' : `h-full flex items-center text-[10px] font-bold tracking-[0.25em] uppercase transition-all duration-500 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D50032] focus-visible:ring-offset-4 ${activePage === page ? 'text-[#041E42]' : 'text-[#595959] hover:text-[#041E42]'}`}`}>
      {children}
      {!mobile && <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#041E42] transform origin-left transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${activePage === page ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>}
    </button>
  );
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#F4F4F3] border-b-2 border-[#041E42] h-20 md:h-24 px-6 md:px-12 transition-all duration-500">
        <div className="max-w-[1920px] mx-auto h-full flex justify-between items-center">
          <button className="flex items-center gap-4 cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D50032] focus-visible:ring-offset-4" onClick={() => navigateTo('home')}>
            <Logo className="h-6 w-auto text-[#041E42] group-hover:text-[#D50032] transition-colors duration-300" />
          </button>
          <div className="hidden lg:flex items-stretch h-full gap-12">
            {[{ id: 'agenda', label: 'Box Office' }, { id: 'discography', label: 'Listening Room' }, { id: 'store', label: 'Haberdasher' }, { id: 'philanthropy', label: 'Patronage' }, { id: 'backstage', label: 'Backstage' }].map((link) => (<NavButton key={link.id} page={link.id}>{link.label}</NavButton>))}
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-3 -mr-3 text-[#041E42] hover:text-[#D50032] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D50032]" aria-label="Toggle Menu">{mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}</button>
        </div>
      </nav>
       <div className={`fixed inset-0 z-40 bg-[#F4F4F3] px-6 md:px-12 pt-32 pb-12 overflow-y-auto transition-transform duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
         <div className="max-w-[1920px] mx-auto flex flex-col h-full justify-between">
           <div className="flex flex-col"><span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] mb-8 block uppercase border-b border-[#041E42]/20 pb-4">Directory</span>{[{ id: 'home', label: 'Home' }, { id: 'agenda', label: 'Box Office' }, { id: 'discography', label: 'Listening Room' }, { id: 'store', label: 'Haberdasher' }, { id: 'philanthropy', label: 'Patronage' }, { id: 'backstage', label: 'Backstage' }].map((link) => (<NavButton key={link.id} page={link.id} mobile={true}>{link.label}</NavButton>))}</div>
          <div className="mt-12 space-y-8"><div className="grid grid-cols-2 gap-8"><div><span className="text-[9px] font-sans font-bold tracking-[0.2em] text-[#041E42]/40 uppercase block mb-4">External</span><div className="flex flex-col gap-4"><a href="https://georgetownchimes.org" target="_blank" rel="noreferrer" className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42]">The Actives &#x2197;&#xFE0E;</a><a href="https://3611.georgetownchimes.org" target="_blank" rel="noreferrer" className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42]">The House &#x2197;&#xFE0E;</a></div></div></div><p className="text-[9px] font-sans font-bold tracking-[0.2em] text-[#041E42]/20 uppercase mb-12">© {new Date().getFullYear()} GCAA, Inc.</p></div>
        </div>
      </div>
    </>
  );
};

// --- Home View ---
const HomeView = ({ navigateTo, openAlbumBySlug, openEvent }) => {
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  useEffect(() => { setTimeout(() => setIsHeroVisible(true), 100); }, []);

  return (
    <>
      {/* --- SEO INTEGRATION --- */}
      <Helmet>
        <title>Georgetown Chimes Alumni Association</title>
        <meta name="description" content="Brotherhood, Harmony, History. The official home of the Georgetown Chimes Alumni Association." />
      </Helmet>
      {/* ----------------------- */}

      <div className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 border-b-2 border-[#041E42] bg-[#F4F4F3] overflow-hidden antialiased selection:bg-[#D50032] selection:text-white">
        <div 
          className={`absolute inset-0 z-0 w-full h-full bg-cover bg-center grayscale bg-[#041E42] bg-blend-screen mix-blend-multiply pointer-events-none transition-opacity duration-[2000ms] ease-in-out ${isHeroVisible ? 'opacity-15' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${IMG_CHERRY_TREE})` }}
        />
        <div className={`max-w-[1920px] mx-auto w-full flex flex-col items-center justify-center relative z-10 py-12 transition-all duration-[2000ms] ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
           <div className="flex flex-col items-center justify-center text-center select-none mb-24 leading-none text-[#041E42]">
            <h1 className="text-[12.5vw] font-serif leading-[0.75] tracking-tighter relative z-10">BROTHERHOOD</h1>
            <h1 className="text-[19vw] font-serif leading-[0.75] tracking-tighter opacity-40 italic -mt-[4vw] relative z-0 px-[0.2em]">HARMONY</h1>
            <h1 className="text-[18vw] font-serif leading-[0.75] tracking-tighter block -mt-[4.5vw] relative z-10">HISTORY</h1>
          </div>
          <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center z-20">
             <button onClick={() => openAlbumBySlug('desperate-chimes-desperate-measures')} className="group relative text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42] hover:text-[#D50032] transition-colors">
                Stream “And So It Goes”
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#041E42] group-hover:bg-[#D50032] transition-colors"></span>
             </button>
             <button onClick={() => openEvent(EVENTS_DATA[1])} className="group relative text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42] hover:text-[#D50032] transition-colors">
                Book Cherry Tree Tickets
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#041E42] group-hover:bg-[#D50032] transition-colors"></span>
             </button>
          </div>
        </div>
      </div>

      <section className="py-32 px-6 md:px-12 bg-[#F4F4F3] text-[#041E42] antialiased">
        <div className="max-w-[1920px] mx-auto border-t-2 border-[#041E42] pt-12 grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12">
             <div className="lg:col-span-4 flex flex-col justify-between">
                <div>
                    <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] uppercase block mb-8">01 — The Directory</span>
                    <h2 className="text-5xl md:text-7xl font-serif text-[#041E42] leading-[1.15] md:leading-[1.0] tracking-tighter mb-12">
                      Welcome the time, my boys: <span className="italic">we meet again.</span>
                    </h2>
                    <div className="w-12 h-[2px] bg-[#041E42]"></div>
                </div>
                <div className="hidden lg:block pt-24">
                    <button onClick={() => navigateTo('backstage')} className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42]/40 hover:text-[#041E42] transition-colors flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#041E42] rounded-full"></div>
                        Authorized Access
                    </button>
                </div>
             </div>
             <div className="lg:col-span-8 flex flex-col">
                {[
                  { sub: "Tickets & Gatherings", room: "Box Office", slug: 'events', id: "01" },
                  { sub: "The Recorded Archive", room: "Listening Room", slug: 'albums', id: "02" },
                  { sub: "Specially Commissioned", room: "Haberdashery", slug: 'store', id: "03" },
                  { sub: "Fund the Brotherhood", room: "Patronage", slug: 'philanthropy', id: "04" },
                ].map((item) => (
                  <div key={item.id} onClick={() => navigateTo(item.slug)} className="group flex flex-row items-baseline justify-between py-12 border-b border-[#041E42]/20 transition-all duration-500 hover:bg-white hover:pl-6 -ml-6 pl-6 pr-6 cursor-pointer">
                    <div className="flex items-baseline gap-12 md:gap-16">
                      <span className="text-[11px] font-sans font-bold tracking-[0.1em] text-[#041E42]/40 group-hover:text-[#D50032] transition-colors uppercase">{item.id}</span>
                      <span className="text-5xl md:text-6xl font-serif text-[#041E42] italic leading-none">{item.room}</span>
                    </div>
                    <div className="flex items-center gap-8">
                       <span className="hidden md:block text-[11px] font-sans font-bold tracking-[0.05em] uppercase text-[#041E42]/40">{item.sub}</span>
                       <span className="text-xl font-light text-[#041E42] group-hover:translate-x-2 transition-transform">→</span>
                    </div>
                  </div>
                ))}
                <div className="lg:hidden pt-12 flex justify-center">
                    <button onClick={() => navigateTo('backstage')} className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42]/40 hover:text-[#041E42] transition-colors flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#041E42] rounded-full"></div>
                        Authorized Access
                    </button>
                </div>
             </div>
        </div>
      </section>

      {/* FEATURED EVENT */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 border-t-2 border-[#041E42]">
        <div className="relative bg-[#E5E5E4] overflow-hidden group min-h-[50vh] md:min-h-auto">
             <div className="absolute inset-0 z-0">
                 <img src={IMG_CTM_BOND} alt="The Cherry Tree Massacre Event Poster" className="w-full h-full object-cover grayscale mix-blend-multiply group-hover:mix-blend-normal opacity-90 group-hover:scale-105 transition-all duration-[2s] ease-out" />
             </div>
             <div className="absolute top-6 left-6 md:hidden">
                <span className="bg-[#041E42] text-white px-3 py-1 text-[9px] font-sans font-bold tracking-[0.1em] uppercase">Upcoming</span>
             </div>
        </div>
        <div className="bg-[#F4F4F3] p-12 md:p-24 flex flex-col justify-center border-l-0 md:border-l border-[#041E42]">
            <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] mb-8 block uppercase">02 — Upcoming Concert</span>
            <h3 className="text-6xl md:text-8xl font-serif mb-12 text-[#041E42] leading-[1.15] md:leading-[1.0] tracking-tighter -ml-1">The Cherry Tree Massacre</h3>
            <div className="w-24 h-[2px] bg-[#041E42]/10 mb-12"></div>
            <div className="mb-16 max-w-md text-[#041E42]">
                <h4 className="text-2xl font-serif font-bold leading-tight mb-6">Most traditions fade. <br/> This one just gets louder.</h4>
                <p className="text-lg font-serif italic leading-relaxed opacity-80">In 1974, we sang for survival. In 2026, we sing for the legacy. Two nights. One historic setlist.</p>
            </div>
            {/* FEATURE LINK: Direct to CTM II instead of generic Agenda */}
            <button onClick={() => openEvent(EVENTS_DATA[1])} className="w-full md:w-auto flex items-center justify-between md:justify-start gap-8 py-5 border-t border-b border-[#041E42] md:border-0 hover:pl-4 transition-all duration-300 group/btn">
                <span className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42]">Event Details & Tickets</span>
                <span className="text-xl font-light group-hover/btn:translate-x-2 transition-transform">→</span>
            </button>
        </div>
      </section>
    </>
  );
};

// --- Agenda View ---
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
        {/* ... (Rest of AgendaView Logic remains unchanged) ... */}
        <div className="hidden md:grid grid-cols-12 gap-12 pb-4 mb-4 border-b-2 border-[#041E42] opacity-100">
            <span className="col-span-2 text-[10px] font-sans font-bold tracking-[0.1em] uppercase">Date</span>
            <span className="col-span-7 text-[10px] font-sans font-bold tracking-[0.1em] uppercase">Program</span>
            <span className="col-span-3 text-[10px] font-sans font-bold tracking-[0.1em] uppercase text-right">Logistics</span>
        </div>
        <div className="flex flex-col group/list border-t-2 md:border-t-0 border-[#041E42]">
          {EVENTS_DATA.map((event) => (
            <div key={event.id} role="button" tabIndex={0} onClick={() => openEvent(event)} className="group border-b border-[#041E42]/20 py-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-baseline relative cursor-pointer transition-all duration-500 hover:pl-4 -ml-4 pl-4 pr-4 group-hover/list:opacity-30 hover:!opacity-100 focus-visible:opacity-100 focus-visible:outline-none">
              <div className="md:col-span-2 flex flex-col">
                 <span className="text-[11px] font-sans font-bold tracking-[0.1em] text-[#041E42]/60 uppercase mb-2">{event.date.split(' ')[0]}</span>
                 <span className="text-4xl font-serif text-[#041E42] italic">{event.date.split(' ')[1].replace(',', '')}</span>
              </div>
              <div className="md:col-span-7">
                <span className="inline-block mb-6 text-[10px] font-sans font-bold tracking-[0.1em] uppercase text-[#D50032]">{event.type}</span>
                <h3 className="text-5xl md:text-7xl font-serif mb-6 text-[#041E42] leading-[1.15] md:leading-[1.0] tracking-tight group-hover:italic transition-all duration-500 [text-wrap:balance]">{typeset(event.title)}</h3>
                <p className="text-[#041E42] font-serif text-lg md:text-xl max-w-xl leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity duration-700">{Array.isArray(event.description) ? typeset(event.description[0]) : typeset(event.description)}</p>
              </div>
              <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between h-full gap-8">
                <div className="text-left mb:text-right">
                    <span className="block text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42] mb-1">{event.time}</span>
                    <span className="block text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42]/60">{event.location}</span>
                </div>
                <span className="flex items-center gap-4 text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[#041E42] group-hover:text-[#D50032] transition-colors"><span>Details</span><span className="text-lg font-light translate-y-[-1px]">→</span></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
);

// --- Event Detail View ---
const EventDetailView = ({ event, navigateTo }) => {
  if (!event) return null;

  // Helper to extract plain text for meta description
  const metaDescription = Array.isArray(event.description) 
    ? event.description[0] 
    : event.description;

  return (
    <div className="min-h-screen pt-40 px-6 md:px-12 pb-32 bg-[#F4F4F3] text-[#041E42] antialiased selection:bg-[#D50032] selection:text-white">
      {/* --- SEO INTEGRATION --- */}
      <Helmet>
        <title>{`${typeset(event.title)} | Georgetown Chimes Alumni Association`}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>
      {/* ----------------------- */}

      <div className="max-w-[1920px] mx-auto">
        <div className="flex justify-between items-end mb-12">
            <button onClick={() => navigateTo('agenda')} className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase flex items-center gap-4 hover:text-[#D50032] transition-colors opacity-60 hover:opacity-100 group py-4 -my-4">
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Return to the Box Office
            </button>
        </div>
        {/* ... (Rest of EventDetailView Logic remains unchanged) ... */}
        <div className="border-t-2 border-[#041E42] pt-12 grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12">
          <div className="lg:col-span-4">
             <div className="sticky top-32">
                 <div className="aspect-[3/4] w-full bg-[#E5E5E4] mb-12 relative overflow-hidden shadow-2xl shadow-[#041E42]/5">
                    {event.image ? (
                        <img src={event.image} alt={event.title} className="w-full h-full object-cover grayscale mix-blend-multiply group-hover:mix-blend-normal hover:grayscale-0 transition-all duration-[1.5s]" />
                    ) : <div className="w-full h-full bg-[#041E42]/5" />}
                </div>
                <div className="space-y-0 border-t border-[#041E42]">
                    <div className="flex justify-between items-baseline py-4 border-b border-[#041E42]/20"><span className="text-[11px] font-sans font-bold tracking-[0.05em] uppercase text-[#D50032]">Date</span><span className="text-lg font-sans font-bold tracking-tight">{event.date}</span></div>
                    <div className="flex justify-between items-baseline py-4 border-b border-[#041E42]/20"><span className="text-[11px] font-sans font-bold tracking-[0.05em] uppercase text-[#041E42]/60">Time</span><span className="text-lg font-sans font-bold tracking-tight">{event.time}</span></div>
                    <div className="flex justify-between items-baseline py-4 border-b border-[#041E42]/20"><span className="text-[11px] font-sans font-bold tracking-[0.05em] uppercase text-[#041E42]/60">Venue</span><span className="text-lg font-sans font-bold tracking-tight text-right max-w-[60%]">{event.location}</span></div>
                </div>
                <div className="mt-12 space-y-4">
                {event.actions ? event.actions.map((action, idx) => (
                    <a key={idx} href={action.link} target="_blank" rel="noopener noreferrer" className={`group w-full flex items-center justify-between border-t border-b py-5 px-6 transition-all duration-300 ${action.primary ? "border-[#041E42] bg-[#041E42] text-[#F4F4F3] hover:bg-[#D50032] hover:border-[#D50032]" : "border-[#041E42]/20 text-[#041E42] hover:bg-[#041E42] hover:text-[#F4F4F3] hover:border-[#041E42]"}`}><span className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase">{action.label}</span><span className="text-lg font-light group-hover:translate-x-2 transition-transform">→</span></a>
                )) : event.link && (
                    <a href={event.link} target="_blank" rel="noopener noreferrer" className="group w-full flex items-center justify-between border-t border-b border-[#041E42] bg-[#041E42] text-[#F4F4F3] py-5 px-6 hover:bg-[#D50032] hover:border-[#D50032] transition-colors"><span className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase">{event.type === 'CONCERT' ? 'Purchase Tickets' : 'Event Info'}</span><span className="text-lg font-light group-hover:translate-x-2 transition-transform">→</span></a>
                )}
                </div>
             </div>
          </div>
          <div className="lg:col-span-8">
            <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] mb-8 block uppercase">{event.eyebrow || event.type}</span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif mb-12 text-[#041E42] leading-[1.15] md:leading-[1.0] tracking-tighter [text-wrap:balance]">{typeset(event.title)}</h1>
            <div className="text-xl md:text-3xl font-serif italic text-[#041E42] mb-24 leading-relaxed max-w-[65ch] space-y-8 pl-6 border-l-2 border-[#041E42]/10">
                {Array.isArray(event.description) ? event.description.map((para, i) => <p key={i}>{typeset(para)}</p>) : <p>{typeset(event.description)}</p>}
            </div>
            {event.guestGroups && (
                <div className="mb-32 border-t-2 border-[#041E42] pt-12">
                    <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] mb-12 block uppercase">Guest Groups</span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                        {event.guestGroups.map((group, idx) => (
                           <div key={idx} className="border-b border-[#041E42]/10 pb-4"><h4 className="text-3xl font-serif text-[#041E42]">{typeset(group)}</h4></div>
                        ))}
                    </div>
                </div>
            )}
            {event.schedule && (
              <div className="mb-32 border-t-2 border-[#041E42] pt-12">
                <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] mb-12 block uppercase">Itinerary</span>
                {event.schedule.map((item, idx) => (
                    <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-[#041E42]/20 py-8 items-baseline">
                      <div className="md:col-span-3 text-[11px] font-sans font-bold tracking-[0.1em] text-[#041E42] uppercase">{item.time && <div className="block mb-2">{item.time}</div>}{item.location && <div className="block opacity-60 whitespace-pre-line">{item.location}</div>}</div>
                      <div className="md:col-span-9"><h4 className="text-3xl md:text-4xl font-serif text-[#041E42] mb-4 italic">{typeset(item.title)}</h4><p className="text-[#041E42] text-lg font-serif leading-relaxed max-w-xl opacity-80">{typeset(item.description)}</p></div>
                    </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Discography View ---
// --- Discography View ---
const DiscographyView = ({ openAlbum, navigateTo }) => {
  // 1. Simplified State: We only need the animation trigger now
  const [triggerAnim, setTriggerAnim] = useState(false);

  // 2. Trigger animation on mount (no waiting for images)
  useEffect(() => {
    setTimeout(() => setTriggerAnim(true), 100);
  }, []);

  // 3. Removed the "if (!imagesLoaded) return" block entirely

  return (
    <div className="min-h-screen pt-40 px-6 md:px-12 pb-32 bg-[#F4F4F3] text-[#041E42] antialiased selection:bg-[#D50032] selection:text-white">
      {/* --- SEO INTEGRATION --- */}
      <Helmet>
        <title>Listening Room | Georgetown Chimes Alumni Association</title>
        <meta name="description" content="Explore the recorded history of the Georgetown Chimes, featuring albums from 1958 to present." />
      </Helmet>
      {/* ----------------------- */}

      <div className="max-w-[1920px] mx-auto">
        <SectionHeader title="The Listening Room" number="Recorded Works" />
        
        {/* Preservation Section */}
        <div className="border-t-2 border-[#041E42] pt-12 pb-32 grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12">
            <div className="lg:col-span-4"><span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] uppercase block mb-4">01 — The Preservation</span></div>
            <div className="lg:col-span-8">
                <h3 className="text-5xl md:text-7xl font-serif leading-[1.15] md:leading-[1.0] text-[#041E42] tracking-tighter mb-12">A living record. Currently undergoing restoration.</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-[#041E42]/20 pt-8">
                    <p className="text-xl text-[#041E42] font-serif leading-relaxed">Our preservationists are currently digitizing master tapes from the 1960s and ’70s to high-fidelity standards.</p>
                    <div className="flex flex-col items-start gap-4">
                        <button onClick={() => window.open('https://thechimes.notion.site', '_blank')} className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase border-b border-[#041E42]/20 hover:text-[#D50032] hover:border-[#D50032] transition-colors pb-1">Explore the Rough Cuts &#x2197;&#xFE0E;</button>
                        <button onClick={() => navigateTo('philanthropy')} className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase border-b border-[#041E42]/20 hover:text-[#D50032] hover:border-[#D50032] transition-colors pb-1">Support Digitization</button>
                    </div>
                </div>
            </div>
        </div>

        {/* The Grid */}
        <div className="mb-48">
            <div className="flex items-end justify-between border-b-2 border-[#041E42] pb-4 mb-12"><span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#041E42] uppercase">02 — The Discography</span></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24">
            {ALBUMS_DATA.map((album, index) => (
                <div key={album.id} onClick={() => openAlbum(album)} className={`group cursor-pointer flex flex-col gap-6 transition-all duration-[1000ms] ${triggerAnim ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 50}ms` }}>
                <div className="relative aspect-square w-full bg-[#E5E5E4] overflow-hidden shadow-xl shadow-[#041E42]/5">
                    {album.image ? (
                        <img 
                            src={album.image} 
                            alt={album.title} 
                            loading="lazy" 
                            className="w-full h-full object-cover transition-all duration-[2s] grayscale mix-blend-multiply group-hover:mix-blend-normal group-hover:grayscale-0 group-hover:scale-105" 
                        />
                    ) : (
                        <div className={`w-full h-full ${album.cover}`}></div>
                    )}
                    {album.badge && <div className="absolute top-0 right-0 bg-[#D50032] text-[#F4F4F3] px-4 py-2 text-[10px] font-sans font-bold tracking-[0.1em] uppercase">{album.badge}</div>}
                </div>
                <div className="flex flex-col items-start border-t border-[#041E42]/20 pt-4">
                    <div className="flex justify-between w-full items-baseline mb-2"><span className="text-[11px] font-sans font-bold tracking-[0.1em] text-[#041E42]/40 uppercase tabular-nums">Issue {album.year}</span></div>
                    <h3 className="font-serif text-3xl md:text-4xl text-[#041E42] leading-[1.15] md:leading-[1.0] group-hover:italic transition-all duration-500">{typeset(album.title)}</h3>
                </div>
                </div>
            ))}
            </div>
        </div>
      </div>
    </div>
  );
};

// --- Album Detail View ---
const AlbumDetailView = ({ selectedAlbum, navigateTo }) => {
  if (!selectedAlbum) return null;
  return (
    <div className="min-h-screen pt-40 px-6 md:px-12 pb-32 bg-[#F4F4F3] text-[#041E42] antialiased selection:bg-[#D50032] selection:text-white">
      {/* --- SEO INTEGRATION --- */}
      <Helmet>
        <title>{`${typeset(selectedAlbum.title)} | Georgetown Chimes Alumni Association`}</title>
        <meta name="description" content={selectedAlbum.description || `Listen to ${selectedAlbum.title} (${selectedAlbum.year}) by the Georgetown Chimes.`} />
      </Helmet>
      {/* ----------------------- */}

      <div className="max-w-[1920px] mx-auto">
        <div className="flex justify-between items-end mb-12">
            <button onClick={() => navigateTo('discography')} className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase flex items-center gap-4 hover:text-[#D50032] transition-colors opacity-60 hover:opacity-100 group py-4 -my-4">
                <span className="group-hover:-translate-x-1 transition-transform">←</span> Return to the Listening Room
            </button>
        </div>
        
        {/* ... (Rest of AlbumDetailView Logic remains unchanged) ... */}
        
        <div className="border-t-2 border-[#041E42] pt-12 grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12">
          
          {/* Sidebar */}
          <div className="lg:col-span-4">
             <div className="sticky top-32">
                <div className="aspect-square w-full overflow-hidden bg-[#E5E5E4] mb-12 shadow-2xl shadow-[#041E42]/5">
                  {selectedAlbum.image ? (
                    <img src={selectedAlbum.image} alt={selectedAlbum.title} className="w-full h-full object-cover grayscale mix-blend-multiply transition-all duration-[2s] hover:grayscale-0 hover:mix-blend-normal" />
                  ) : (
                    <div className={`aspect-square w-full ${selectedAlbum.cover}`}></div>
                  )}
                </div>
                <div className="space-y-0 border-t border-[#041E42]">
                   <div className="flex justify-between items-baseline py-4 border-b border-[#041E42]/20">
                        <span className="text-[11px] font-sans font-bold tracking-[0.05em] uppercase text-[#D50032]">Issue</span>
                        <span className="text-xl font-serif italic tabular-nums">{selectedAlbum.year}</span>
                   </div>
                </div>
                {selectedAlbum.link && (
                    <button onClick={() => window.open(selectedAlbum.link, '_blank', 'noopener,noreferrer')} className="mt-12 w-full py-5 border border-[#041E42] bg-[#041E42] text-[#F4F4F3] text-[11px] font-sans font-bold tracking-[0.1em] uppercase hover:bg-[#D50032] hover:border-[#D50032] transition-all">
                        {selectedAlbum.ctaText || "Listen on Streaming"}
                    </button>
                )}
                {selectedAlbum.dedication && (
                    <div className="mt-12 pt-8 border-t border-[#041E42]/20 space-y-4">
                        <p className="text-[10px] opacity-60 uppercase tracking-[0.1em] font-sans font-bold text-[#041E42]">Dedication</p>
                        <p className="text-lg font-serif italic leading-relaxed text-[#041E42] opacity-90 pl-2 -ml-2">{typeset(selectedAlbum.dedication)}</p>
                    </div>
                )}
             </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[1.15] md:leading-[1.0] tracking-tighter mb-16 antialiased text-[#041E42] [text-wrap:balance] pt-2">
                {typeset(selectedAlbum.title)}
            </h1>
            
            {selectedAlbum.description && (
                <p className="text-xl md:text-3xl font-serif italic mb-24 leading-relaxed pl-8 border-l-2 border-[#D50032] text-[#041E42] max-w-[65ch]">
                    {typeset(selectedAlbum.description)}
                </p>
            )}

            {selectedAlbum.leadSingle && (
              <div className="border border-[#041E42]/10 p-12 mb-32 relative group/single bg-white shadow-sm">
                 <div className="absolute top-0 right-0 w-1 h-full bg-[#D50032] opacity-0 group-hover/single:opacity-100 transition-opacity"></div>
                 <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] uppercase mb-8 block">Featured Track</span>
                 <h3 className="text-5xl md:text-6xl font-serif text-[#041E42] mb-6 italic leading-none">{typeset(selectedAlbum.leadSingle.title)}</h3>
                 <div className="flex flex-col gap-2 mb-8">
                    {selectedAlbum.leadSingle.composer && <span className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42]/60">{selectedAlbum.leadSingle.composer}</span>}
                    {selectedAlbum.leadSingle.soloist && <span className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#D50032]">Feat. {selectedAlbum.leadSingle.soloist}</span>}
                 </div>
                 {selectedAlbum.leadSingle.link && <button onClick={() => window.open(selectedAlbum.leadSingle.link, '_blank', 'noopener,noreferrer')} className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase border-b border-[#041E42] pb-1 hover:text-[#D50032] hover:border-[#D50032] transition-all">Play Track &#x2197;&#xFE0E;</button>}
              </div>
            )}

            {/* REPERTOIRE SECTION */}
            <div className="mb-32 border-t-2 border-[#041E42] pt-12">
                <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] mb-12 block uppercase">Repertoire</span>
                <div>
                    {selectedAlbum.tracks.map((track, idx) => (
                        <div key={idx} className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 border-b border-[#041E42]/10 py-6 hover:bg-white hover:pl-4 -ml-4 pl-4 pr-4 transition-all duration-300 items-baseline">
                            
                            {/* Left Col: Index & Title (Spans 7 Cols) */}
                            <div className="md:col-span-7 flex items-baseline gap-8">
                                <span className="text-[11px] font-sans font-bold tracking-[0.1em] text-[#041E42]/40 tabular-nums w-8 flex-shrink-0">
                                    {String(idx + 1).padStart(2, '0')}
                                </span>
                                <div>
                                    <span className="font-serif text-2xl md:text-3xl text-[#041E42] group-hover:italic transition-all leading-tight pb-1 block [text-wrap:balance]">
                                        {typeset(track.title)}
                                    </span>
                                </div>
                            </div>

                            {/* Right Col: Metadata (Spans 5 Cols) */}
                            <div className="hidden md:block md:col-span-5 text-right opacity-40 group-hover:opacity-100 transition-opacity">
                                <span className="text-[10px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42] leading-tight block [text-wrap:balance]">
                                    {typeset(
                                        [
                                            track.composer, 
                                            track.group, 
                                            track.soloist ? `Feat. ${track.soloist}` : null
                                        ].filter(Boolean).join(" · ")
                                    )}
                                </span>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            {selectedAlbum.credits && (
                <div className="mb-32 border-t-2 border-[#041E42] pt-12">
                    <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] mb-12 block uppercase">Technical Specifications</span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                        {Object.entries(selectedAlbum.credits).map(([section, roles]) => (
                            <div key={section}>
                                <h5 className="font-sans font-bold text-[11px] uppercase tracking-[0.1em] text-[#041E42] mb-8 border-b border-[#041E42]/20 pb-2">{section}</h5>
                                <div className="space-y-6">
                                    {roles.map((role, idx) => (
                                        <div key={idx} className="flex flex-col">
                                            <span className="text-[9px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42]/40 mb-1">{role.role}</span>
                                            <span className="font-serif text-xl text-[#041E42] leading-tight [text-wrap:balance]">{typeset(role.name)}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {selectedAlbum.linerNotes && (
                <div className="mb-32 border-t-2 border-[#041E42] pt-12">
                    <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] mb-12 block uppercase">Album Notes</span>
                    <div className="space-y-16">
                        {selectedAlbum.linerNotes.map((note, idx) => (
                            <div key={idx} className="max-w-2xl">
                                {note.author && <h4 className="font-serif text-3xl mb-6 italic">{typeset(note.author)}</h4>}
                                <p className="leading-relaxed font-serif text-lg opacity-90 antialiased">{typeset(note.text)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {selectedAlbum.acknowledgements && (
                <div className="py-24 border-t border-[#041E42]/10 mb-24">
                    <h5 className="font-sans font-bold text-[11px] uppercase tracking-[0.1em] mb-12 text-[#041E42]/40">Acknowledgements</h5>
                    <div className="flex flex-wrap gap-x-8 gap-y-4 max-w-4xl">
                        {selectedAlbum.acknowledgements.map((name, i) => (
                            <span key={i} className="text-xl text-[#041E42] font-serif italic opacity-60 hover:opacity-100 transition-opacity cursor-default pl-2 -ml-2">{typeset(name)}</span>
                        ))}
                    </div>
                </div>
            )}

            <div className="pt-24 border-t border-[#041E42] opacity-40 text-left">
                <p className="text-[10px] font-sans font-bold tracking-[0.1em] uppercase">Transcribed from the Physical Liner Notes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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
              Commissioned for the Active group and curated for the Alumni. Woven in pure silk, these pieces are designed to replace the lost, the stained, and the borrowed.
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
        {STORE_DATA.map((item) => (
            <div key={item.id} className="group relative border-b border-[#041E42]/20 py-12 grid grid-cols-1 md:grid-cols-12 gap-y-8 gap-x-8 items-start transition-colors duration-500 hover:bg-white hover:pl-4 -ml-4 pl-4 pr-4">
                
                {/* Col 1: REF ID */}
                <div className="md:col-span-2 pt-2">
                    <span className="text-[11px] font-sans font-bold tracking-[0.1em] text-[#041E42]/40 uppercase group-hover:text-[#D50032] transition-colors">
                        Ref. {item.id}
                    </span>
                </div>

                {/* Col 2: THE IMAGE (The Artifact) */}
                <div className="md:col-span-3">
                    <div className="aspect-[3/4] bg-[#E5E5E4] overflow-hidden w-full max-w-[240px]">
                        <img 
                            src={item.img} 
                            alt={item.name} 
                            className="w-full h-full object-cover grayscale mix-blend-multiply group-hover:mix-blend-normal group-hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </div>

                {/* Col 3: TITLE & DETAILS */}
                <div className="md:col-span-5 flex flex-col justify-between h-full py-2">
                    <div>
                        <h4 className="text-5xl md:text-6xl font-serif text-[#041E42] italic leading-[1.15] md:leading-[1.0] mb-6">
                            {item.name}
                        </h4>
                        <p className="text-[#041E42] text-lg font-serif leading-tight opacity-60 [text-wrap:balance]">
                            {typeset(item.desc)}
                        </p>
                    </div>
                </div>

                {/* Col 4: PRICE & ACTION */}
                <div className="md:col-span-2 flex flex-col justify-between h-full py-2 items-start md:items-end">
                    <span className="text-xl font-sans font-bold text-[#041E42] tracking-wide tabular-nums block opacity-80">
                        ${item.price}
                    </span>
                    
                    <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[#041E42] group-hover:text-[#D50032] transition-colors mt-8 md:mt-0"
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

                return (
                    <div key={idx} className="group relative border-b border-[#041E42]/20 py-12 grid grid-cols-1 md:grid-cols-12 gap-y-6 gap-x-4 items-start transition-colors duration-500 hover:bg-white hover:pl-4 -ml-4 pl-4 pr-4">
                        
                        {/* Col 1: Level ID (Technical) */}
                        <div className="md:col-span-2 pt-2">
                            <span className="text-[11px] font-sans font-bold tracking-[0.1em] text-[#041E42]/40 uppercase group-hover:text-[#D50032] transition-colors">
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
                            <span className="text-[9px] font-sans font-bold tracking-[0.1em] text-[#041E42]/40 uppercase">
                                    per {frequency}
                            </span>
                        </div>

                        {/* Col 4: Action (The Input) */}
                        <div className="md:col-span-2 flex md:justify-end items-start pt-3">
                             <a 
                                href={tier.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[#041E42] group-hover:text-[#D50032] transition-colors"
                             >
                                <span>Join</span>
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

const NotFoundView = ({ navigateTo }) => (
    <div className="min-h-screen pt-40 px-6 md:px-12 flex flex-col items-center justify-center bg-[#F4F4F3] text-[#041E42] antialiased selection:bg-[#D50032] selection:text-white">
        {/* --- SEO INTEGRATION --- */}
        <Helmet>
            <title>404 | Georgetown Chimes Alumni Association</title>
            <meta name="description" content="Page not found." />
        </Helmet>
        {/* ----------------------- */}

        <div className="w-full max-w-3xl border-t-2 border-[#041E42] pt-12">
            
            {/* 1. Meta Label */}
            <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] uppercase block mb-8">
                Error 404 — Missing Record
            </span>
            
            {/* 2. Massive Serif Headline */}
            <h1 className="text-6xl md:text-9xl font-serif text-[#041E42] mb-12 italic leading-[1.15] md:leading-[1.0] tracking-tighter [text-wrap:balance]">
                Discordant note.
            </h1>
            
            {/* 3. The Explanation (Indented) */}
            <p className="text-xl md:text-2xl font-serif text-[#041E42] leading-relaxed mb-16 max-w-lg pl-8 border-l-2 border-[#041E42]/10">
                The page you requested cannot be found in our repertoire. It may have been moved, deleted, or never existed at all.
            </p>
            
            {/* 4. Primary Action */}
            <div className="flex flex-col items-start gap-8">
                <button 
                    onClick={() => navigateTo('home')} 
                    className="group flex items-center gap-4 text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42] hover:text-[#D50032] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D50032]"
                >
                    <span>Return to Harmony</span>
                    <span className="text-lg font-light group-hover:translate-x-2 transition-transform">→</span>
                </button>

                {/* 5. Concierge Links: Added Patronage */}
                <div className="flex flex-wrap gap-6 pt-8 border-t border-[#041E42]/10 w-full max-w-md opacity-60">
                    <button onClick={() => navigateTo('agenda')} className="text-[10px] font-bold tracking-[0.2em] uppercase hover:text-[#D50032] transition-colors">Box Office</button>
                    <button onClick={() => navigateTo('discography')} className="text-[10px] font-bold tracking-[0.2em] uppercase hover:text-[#D50032] transition-colors">Archive</button>
                    <button onClick={() => navigateTo('philanthropy')} className="text-[10px] font-bold tracking-[0.2em] uppercase hover:text-[#D50032] transition-colors">Patronage</button>
                </div>
            </div>

        </div>
    </div>
);

export default function App() {
  const getRouteFromPath = () => {
    const path = window.location.pathname;
    const cleanPath = path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path;
    if (cleanPath === '/' || cleanPath === '') return { view: 'home', slug: null };
    if (cleanPath === '/events') return { view: 'agenda', slug: null };
    if (cleanPath === '/albums') return { view: 'discography', slug: null };
    if (cleanPath === '/store') return { view: 'store', slug: null };
    if (cleanPath === '/give') return { view: 'philanthropy', slug: null };
    if (cleanPath === '/comms') return { view: 'backstage', slug: null };
    const eventMatch = cleanPath.match(/^\/event\/([\w-]+)$/);
    if (eventMatch) return { view: 'event', slug: eventMatch[1] };
    const albumMatch = cleanPath.match(/^\/album\/([\w-]+)$/);
    if (albumMatch) return { view: 'album', slug: albumMatch[1] };
    return { view: '404', slug: null };
  };

  const [route, setRoute] = useState(getRouteFromPath());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => { setRoute(getRouteFromPath()); setIsMenuOpen(false); window.scrollTo(0, 0); };
    window.addEventListener('popstate', handlePopState);
    return () => { window.removeEventListener('popstate', handlePopState); };
  }, []);

  const navigateTo = (view, slug = null) => {
    let path = '/';
    switch(view) {
        case 'home': path = '/'; break;
        case 'agenda': path = '/events'; break;
        case 'discography': path = '/albums'; break;
        case 'store': path = '/store'; break;
        case 'philanthropy': path = '/give'; break;
        case 'backstage': path = '/comms'; break;
        case 'event': path = `/event/${slug}`; break;
        case 'album': path = `/album/${slug}`; break;
        default: path = '/';
    }
    try { window.history.pushState({}, '', path); } catch (err) { console.log('History API not available'); }
    setRoute({ view, slug });
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "We meet again soon...";
      } else {
        document.title = "Georgetown Chimes Alumni Association";
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  const openAlbumBySlug = (slug) => navigateTo('album', slug);
  const openAlbum = (album) => navigateTo('album', album.slug);
  const openEvent = (event) => navigateTo('event', event.slug);

  const activePage = route.view;
  const selectedEvent = activePage === 'event' && route.slug ? EVENTS_DATA.find(e => e.slug === route.slug) : null;
  const selectedAlbum = activePage === 'album' && route.slug ? ALBUMS_DATA.find(a => a.slug === route.slug) : null;

  useEffect(() => {
    const typekitLink = document.createElement('link'); typekitLink.href = 'https://use.typekit.net/uzl4kqy.css'; typekitLink.rel = 'stylesheet'; document.head.appendChild(typekitLink);
    const googleLink = document.createElement('link'); googleLink.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Montserrat:wght@300;400;500;700&display=swap'; googleLink.rel = 'stylesheet'; document.head.appendChild(googleLink);
    return () => { if (document.head.contains(typekitLink)) document.head.removeChild(typekitLink); if (document.head.contains(googleLink)) document.head.removeChild(googleLink); };
  }, []);

  return (
    <div className="font-sans text-[#041E42] bg-[#F4F4F3] selection:bg-[#D50032] selection:text-[#F4F4F3]">
    <style>{`
      :root {
        color-scheme: light;
        --font-sans: "neue-haas-unica", sans-serif;
        --font-serif: "adobe-caslon-pro", serif;
      }
      body {
        margin: 0;
        padding: 0;
        background-color: #F4F4F3;
        overflow-x: hidden;
        font-family: "neue-haas-unica", sans-serif !important;
        
        /* LUXURY RENDERING SETTINGS */
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      .font-serif {
        font-family: "adobe-caslon-pro", "Cormorant Garamond", serif !important;
      }
      .font-sans {
        font-family: "neue-haas-unica", "Montserrat", sans-serif !important;
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .fade-in-element {
        animation: fadeIn 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
      }
      .bg-texture {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        
        /* CHANGE: Lower Z-Index so Navbar (z-50) sits on top */
        z-index: 40; 
        
        opacity: 0.4;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E");
      }
      @media print {
        /* Hide Navigation and UI */
        nav, footer, button, .bg-texture { 
          display: none !important; 
        }
        
        /* Reset Colors for Ink Saving */
        body, main, div { 
          background-color: white !important; 
          color: black !important; 
        }

        /* Expand Layouts */
        .grid-cols-12 { display: block !important; }
        .col-span-8 { width: 100% !important; }
        
        /* Show Links */
        a[href]:after {
          content: " (" attr(href) ")";
          font-size: 0.8em;
          font-weight: normal;
        }
      }
    `}</style>
    
    <div className="bg-texture"></div>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] px-6 py-4 bg-[#041E42] text-[#F4F4F3] text-xs font-bold uppercase tracking-widest border border-[#D50032]">Skip to main content</a>
      <NavBar activePage={activePage} navigateTo={navigateTo} mobileMenuOpen={isMenuOpen} setMobileMenuOpen={setIsMenuOpen} />
      <main id="main-content" className="min-h-screen">
        {activePage === 'home' && <HomeView navigateTo={navigateTo} openAlbumBySlug={openAlbumBySlug} openEvent={openEvent} />}
        {activePage === 'agenda' && <AgendaView navigateTo={navigateTo} openEvent={openEvent} />}
        {activePage === 'discography' && <DiscographyView openAlbum={openAlbum} navigateTo={navigateTo} />}
        {activePage === 'album' && <AlbumDetailView selectedAlbum={selectedAlbum} navigateTo={navigateTo} />}
        {activePage === 'event' && <EventDetailView event={selectedEvent} navigateTo={navigateTo} />}
        {activePage === 'philanthropy' && <PhilanthropyView />}
        {activePage === 'store' && <StoreView />}
        {activePage === 'backstage' && <BackstageView />}
        {activePage === '404' && <NotFoundView navigateTo={navigateTo} />}
      </main>
      <footer className="bg-[#F4F4F3] text-[#041E42] pt-32 pb-12 px-6 md:px-12 antialiased selection:bg-[#D50032] selection:text-white">
        <div className="max-w-[1920px] mx-auto">
          <div className="border-t-2 border-[#041E42] pt-12 grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-12">
            <div className="md:col-span-4 flex flex-col justify-between h-full"><div><Logo className="h-8 w-auto mb-12 text-[#041E42] opacity-80" /><div className="space-y-6 max-w-xs"><p className="text-[10px] font-sans font-bold tracking-[0.1em] uppercase leading-relaxed text-[#041E42]/60">Incorporated in Delaware<br/>501(c)(7) Non-Profit</p><p className="text-[10px] font-sans font-bold tracking-[0.1em] uppercase leading-relaxed text-[#041E42]/40">Kindly be advised that contributions are not tax-deductible.</p></div></div></div>
            <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
              <div className="flex flex-col gap-6"><span className="text-[11px] font-sans font-bold tracking-[0.05em] uppercase text-[#D50032] border-b border-[#041E42]/20 pb-4 block">Index</span>{[{ name: 'Box Office', slug: 'agenda' }, { name: 'Listening Room', slug: 'discography' }, { name: 'Haberdasher', slug: 'store' }, { name: 'Patronage', slug: 'philanthropy' }].map((item) => (<button key={item.name} onClick={() => navigateTo(item.slug)} className="text-left text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42] hover:text-[#D50032] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D50032] block py-2">{item.name}</button>))}</div>
              <div className="flex flex-col gap-6"><span className="text-[11px] font-sans font-bold tracking-[0.05em] uppercase text-[#041E42]/40 border-b border-[#041E42]/20 pb-4 block">Backstage</span><button onClick={() => navigateTo('backstage')} className="text-left text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42] hover:text-[#D50032] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D50032] block py-2">Database</button><button onClick={() => navigateTo('backstage')} className="text-left text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42] hover:text-[#D50032] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D50032] block py-2">Messaging</button></div>
              <div className="flex flex-col gap-6"><span className="text-[11px] font-sans font-bold tracking-[0.05em] uppercase text-[#041E42]/40 border-b border-[#041E42]/20 pb-4 block">External</span>{[{ name: 'The House', url: 'https://3611.georgetownchimes.org' }, { name: 'The Actives', url: 'https://georgetownchimes.org' }].map((site) => (<button key={site.name} onClick={() => window.open(site.url, '_blank', 'noopener,noreferrer')} className="group flex items-center gap-2 text-left text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42] hover:text-[#D50032] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D50032] block py-2">{site.name}<span className="text-lg font-light leading-none opacity-0 group-hover:opacity-100 transition-opacity translate-y-[-1px]">&#x2197;&#xFE0E;</span></button>))}</div>
            </div>
          </div>
        </div>
        <div className="max-w-[1920px] mx-auto mt-24 pt-6 border-t border-[#041E42]/10 flex flex-col md:flex-row justify-between items-center text-[9px] font-sans font-bold text-[#041E42]/40 uppercase tracking-[0.2em] gap-8"><span>© {new Date().getFullYear()} Georgetown Chimes Alumni Association, Inc.</span><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 group hover:text-[#D50032] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D50032]">Return to Top <span className="text-lg font-light leading-none rotate-180">↓</span></button></div>
      </footer>
    </div>
  );
}
