import React from 'react';
import { Helmet } from 'react-helmet-async';
import { typeset } from '../utils/formatters';
import ImageLoader from '../components/ImageLoader';

const AlbumDetailView = ({ selectedAlbum, navigateTo }) => {
  if (!selectedAlbum) return null;
  return (
    <div className="min-h-screen pt-40 px-6 md:px-12 pb-32 bg-[#F4F4F3] text-[#041E42] antialiased selection:bg-[#D50032] selection:text-white">
      <Helmet>
        <title>{`${typeset(selectedAlbum.title)} | Georgetown Chimes Alumni Association`}</title>
        <meta name="description" content={selectedAlbum.description || `Listen to ${selectedAlbum.title} (${selectedAlbum.year}) by the Georgetown Chimes.`} />
      </Helmet>

      <div className="max-w-[1920px] mx-auto">
        <div className="flex justify-between items-end mb-12">
            {/* Internal Navigation: Button is appropriate here for SPA routing */}
            <button 
                onClick={() => navigateTo('discography')} 
                className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase flex items-center gap-4 hover:text-[#D50032] transition-colors opacity-60 hover:opacity-100 group py-4 -my-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D50032] rounded-sm"
            >
                <span className="group-hover:-translate-x-1 transition-transform">←</span> Return to the Listening Room
            </button>
        </div>
        
        <div className="border-t-2 border-[#041E42] pt-12 grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12">
          
          {/* Sidebar */}
          <div className="lg:col-span-4">
             <div className="sticky top-32">
                <div className="aspect-square w-full overflow-hidden bg-[#E5E5E4] mb-12 shadow-2xl shadow-[#041E42]/5 group relative">
                  {selectedAlbum.image ? (
                    <ImageLoader 
                      src={selectedAlbum.image} 
                      alt={selectedAlbum.title} 
                      fetchPriority="high"
                      className="w-full h-full object-cover grayscale mix-blend-multiply transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] hover:grayscale-0 hover:mix-blend-normal" 
                      curtainClassName="absolute inset-0 bg-[#E5E5E4] transition-opacity duration-800 ease-[cubic-bezier(0.19,1,0.22,1)] pointer-events-none"
                    />
                  ) : (
                    <div className={`aspect-square w-full ${selectedAlbum.cover}`}></div>
                  )}
                </div>
                <div className="space-y-0 border-t border-[#041E42]">
                   <div className="flex justify-between items-baseline py-4 border-b border-[#041E42]/20">
                        <span className="text-[10px] font-mono font-bold tracking-[0.1em] uppercase text-[#D50032]">Issue</span>
                        <span className="text-l font-mono font-normal tabular-nums">{selectedAlbum.year}</span>
                   </div>
                </div>
                {selectedAlbum.link && (
                    /* ✅ SEMANTIC FIX: Converted button to anchor */
                    <a 
                        href={selectedAlbum.link}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mt-12 block w-full text-center py-5 border border-[#041E42] bg-[#041E42] text-[#F4F4F3] text-[11px] font-sans font-bold tracking-[0.1em] uppercase hover:bg-[#D50032] hover:border-[#D50032] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D50032] focus-visible:ring-offset-2"
                    >
                        {selectedAlbum.ctaText || "Listen on Streaming"}
                    </a>
                )}
                {selectedAlbum.dedication && (
                    <div className="mt-12 pt-8 border-t border-[#041E42]/20 space-y-4">
                        <p className="text-[10px] opacity-60 uppercase tracking-[0.1em] font-mono font-bold text-[#041E42]">Dedication</p>
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
                 <span className="text-[10px] font-mono font-bold tracking-[0.05em] text-[#D50032] uppercase mb-8 block">Featured Track</span>
                 <h3 className="text-5xl md:text-6xl font-serif text-[#041E42] mb-6 italic leading-none">{typeset(selectedAlbum.leadSingle.title)}</h3>
                 <div className="flex flex-col gap-2 mb-8">
                    {selectedAlbum.leadSingle.composer && <span className="text-[10px] font-mono font-bold tracking-[0.1em] uppercase text-[#041E42]/70">{selectedAlbum.leadSingle.composer}</span>}
                    {selectedAlbum.leadSingle.soloist && <span className="text-[10px] font-mono font-bold tracking-[0.1em] uppercase text-[#D50032]">Feat. {selectedAlbum.leadSingle.soloist}</span>}
                 </div>
                 {/* ✅ SEMANTIC FIX: Converted button to anchor */}
                 {selectedAlbum.leadSingle.link && (
                    <a 
                        href={selectedAlbum.leadSingle.link}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block text-[11px] font-sans font-bold tracking-[0.1em] uppercase border-b border-[#041E42] pb-1 hover:text-[#D50032] hover:border-[#D50032] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D50032] rounded-sm"
                    >
                        Play Track &#x2197;&#xFE0E;
                    </a>
                 )}
              </div>
            )}

            {/* REPERTOIRE SECTION */}
            <div className="mb-32 border-t-2 border-[#041E42] pt-12">
                <span className="text-[10px] font-mono font-bold tracking-[0.05em] text-[#D50032] mb-12 block uppercase">Repertoire</span>
                <div>
                    {selectedAlbum.tracks.map((track, idx) => (
                        <div key={idx} className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 border-b border-[#041E42]/10 py-6 hover:bg-white hover:pl-4 -ml-4 pl-4 pr-4 transition-all duration-300 items-baseline">
                            
                            {/* Left Col: Index & Title */}
                            <div className="md:col-span-7 flex items-baseline gap-8">
                                <span className="text-[11px] font-mono font-bold tracking-[0.1em] text-[#041E42]/70 tabular-nums w-8 flex-shrink-0">
                                    {String(idx + 1).padStart(2, '0')}
                                </span>
                                <div>
                                    <span className="font-serif text-2xl md:text-3xl text-[#041E42] group-hover:italic transition-all leading-tight pb-1 block [text-wrap:balance]">
                                        {typeset(track.title)}
                                    </span>
                                </div>
                            </div>

                            {/* Right Col: Metadata */}
                            <div className="hidden md:block md:col-span-5 text-right opacity-40 group-hover:opacity-100 transition-opacity">
                                <span className="text-[9px] font-mono font-bold tracking-[0.1em] uppercase text-[#041E42] leading-tight block [text-wrap:balance]">
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
                    <span className="text-[10px] font-mono font-bold tracking-[0.05em] text-[#D50032] mb-12 block uppercase">Technical Specifications</span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                        {Object.entries(selectedAlbum.credits).map(([section, roles]) => (
                            <div key={section}>
                                <h5 className="font-mono font-bold text-[10px] uppercase tracking-[0.1em] text-[#041E42] mb-8 border-b border-[#041E42]/20 pb-2">{section}</h5>
                                <div className="space-y-6">
                                    {roles.map((role, idx) => (
                                        <div key={idx} className="flex flex-col">
                                            <span className="text-[9px] font-mono font-bold tracking-[0.1em] uppercase text-[#041E42]/70 mb-1">{role.role}</span>
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
                    <span className="text-[10px] font-mono font-bold tracking-[0.05em] text-[#D50032] mb-12 block uppercase">Album Notes</span>
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
                    <h5 className="font-mono font-bold text-[10px] uppercase tracking-[0.1em] mb-12 text-[#041E42]/70">Acknowledgements</h5>
                    <div className="flex flex-wrap gap-x-8 gap-y-4 max-w-4xl">
                        {selectedAlbum.acknowledgements.map((name, i) => (
                            <span key={i} className="text-xl text-[#041E42] font-serif italic opacity-60 hover:opacity-100 transition-opacity cursor-default pl-2 -ml-2">{typeset(name)}</span>
                        ))}
                    </div>
                </div>
            )}

            <div className="pt-24 border-t border-[#041E42] opacity-40 text-left">
                <p className="text-[9px] font-mono font-bold tracking-[0.1em] uppercase">Transcribed from the Physical Liner Notes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumDetailView;