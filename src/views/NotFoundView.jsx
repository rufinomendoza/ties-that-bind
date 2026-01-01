import React from 'react';
import { Helmet } from 'react-helmet-async';

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
                    aria-label="Home"
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

export default NotFoundView;