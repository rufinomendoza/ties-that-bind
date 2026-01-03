import React, { useState, useEffect, Suspense, startTransition } from 'react';
import { Helmet } from 'react-helmet-async';
import { Menu, X } from 'lucide-react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// Import Data
import { EVENTS_DATA, ALBUMS_DATA, STORE_DATA } from './data';
import Logo from './components/Logo';
import { typeset, isPast } from './utils/formatters';
import { NavBar } from './components/NavBar';
import SectionHeader from './components/SectionHeader';

import { AudioProvider } from './contexts/AudioContext';
import RestorationPlayer from './components/RestorationPlayer';


// Dynamically import each view
const HomeView = React.lazy(() => import('./views/HomeView'));
const StoreView = React.lazy(() => import('./views/StoreView'));
const BackstageView = React.lazy(() => import('./views/BackstageView'));
const NotFoundView = React.lazy(() => import('./views/NotFoundView'));
const PhilanthropyView = React.lazy(() => import('./views/PhilanthropyView'));
const AgendaView = React.lazy(() => import('./views/AgendaView'));
const EventDetailView = React.lazy(() => import('./views/EventDetailView'));
const DiscographyView = React.lazy(() => import('./views/DiscographyView'));
const AlbumDetailView = React.lazy(() => import('./views/AlbumDetailView'));

// --- NEW: SKEUMORPHIC LOADING SCREEN ---
const LoadingScreen = () => (
  <div className="h-screen w-full flex flex-col items-center justify-center bg-[#F4F4F3] text-[#041E42]">
    {/* The Pulsing Logo */}
    <div className="w-16 h-16 md:w-24 md:h-24 animate-pulse opacity-80">
       <Logo />
    </div>
    {/* The "Machine" Status - Monospaced, tiny, technical */}
    <span className="mt-8 text-[9px] font-mono font-bold tracking-[0.2em] uppercase opacity-40 animate-[fadeIn_2s_ease-in]">
       Retrieving Archive…
    </span>
  </div>
);

// App
export default function App() {
  const getRouteFromPath = () => {
    const path = window.location.pathname;
    
    // FIX: Handle subdirectory deployments (Vite Base URL)
    const base = import.meta.env.BASE_URL || '/';
    let relativePath = path;
    if (base !== '/' && path.startsWith(base)) {
        relativePath = path.slice(base.length - 1); 
    }

    const cleanPath = relativePath.length > 1 && relativePath.endsWith('/') ? relativePath.slice(0, -1) : relativePath;
    
    if (cleanPath === '/' || cleanPath === '') return { view: 'home', slug: null };
    if (cleanPath === '/events') return { view: 'agenda', slug: null };
    if (cleanPath === '/albums') return { view: 'discography', slug: null };
    if (cleanPath === '/store') return { view: 'store', slug: null };
    if (cleanPath === '/give') return { view: 'philanthropy', slug: null };
    if (cleanPath === '/comms') return { view: 'backstage', slug: null };
    
    const eventMatch = cleanPath.match(/^\/event\/([^/]+)$/);
    if (eventMatch) return { view: 'event', slug: decodeURIComponent(eventMatch[1]) };
    
    const albumMatch = cleanPath.match(/^\/album\/([^/]+)$/);
    if (albumMatch) return { view: 'album', slug: decodeURIComponent(albumMatch[1]) };
    
    return { view: '404', slug: null };
  };

  const [route, setRoute] = useState(getRouteFromPath());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => { 
        // FIX: Wrap in startTransition to prevent Suspense fallback from collapsing height
        // and breaking browser scroll restoration on "Back"
        startTransition(() => {
            setRoute(getRouteFromPath()); 
        });
        setIsMenuOpen(false); 
    };
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

    // FIX: Respect Base URL for pushState
    const base = import.meta.env.BASE_URL === '/' ? '' : (import.meta.env.BASE_URL || '');
    const fullPath = (base && path.startsWith('/')) ? (base.replace(/\/$/, '') + path) : path;

    try { window.history.pushState({}, '', fullPath); } catch (err) { console.log('History API not available'); }
    
    // FIX: Use startTransition to keep old UI visible while loading new one
    startTransition(() => {
        setRoute({ view, slug });
    });
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  // FIX: Removed conflicting SEO title logic. 
  // The previous useEffect here caused race conditions with Helmet.

  const openAlbumBySlug = (slug) => navigateTo('album', slug);
  const openAlbum = (album) => navigateTo('album', album.slug);
  const openEvent = (event) => navigateTo('event', event.slug);

  const activePage = route.view;
  const selectedEvent = activePage === 'event' && route.slug ? EVENTS_DATA.find(e => e.slug === route.slug) : null;
  const selectedAlbum = activePage === 'album' && route.slug ? ALBUMS_DATA.find(a => a.slug === route.slug) : null;

  const isMissingData = 
    (activePage === 'event' && !selectedEvent) || 
    (activePage === 'album' && !selectedAlbum);

  const effectiveView = isMissingData ? '404' : activePage;

  return (
    <div className="font-sans text-[#041E42] bg-[#F4F4F3] selection:bg-[#D50032] selection:text-[#F4F4F3]">
    <AudioProvider>
      <div className="bg-texture"></div>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] px-6 py-4 bg-[#041E42] text-[#F4F4F3] text-xs font-bold uppercase tracking-widest border border-[#D50032]">Skip to main content</a>
        <NavBar activePage={activePage} navigateTo={navigateTo} mobileMenuOpen={isMenuOpen} setMobileMenuOpen={setIsMenuOpen} />
        <main id="main-content" className="min-h-screen">
          <TransitionGroup className="page-wrapper">
            <CSSTransition
              key={route.view + (route.slug || '')}
              classNames="page"
              timeout={800} 
              unmountOnExit
            >
              <Suspense fallback={<LoadingScreen />}>
                {effectiveView === 'home' && <HomeView navigateTo={navigateTo} openAlbumBySlug={openAlbumBySlug} openEvent={openEvent} />}
                {effectiveView === 'agenda' && <AgendaView navigateTo={navigateTo} openEvent={openEvent} />}
                {effectiveView === 'discography' && <DiscographyView openAlbum={openAlbum} navigateTo={navigateTo} />}
                {effectiveView === 'album' && <AlbumDetailView selectedAlbum={selectedAlbum} navigateTo={navigateTo} />}
                {effectiveView === 'event' && <EventDetailView event={selectedEvent} navigateTo={navigateTo} />}
                {effectiveView === 'philanthropy' && <PhilanthropyView />}
                {effectiveView === 'store' && <StoreView />}
                {effectiveView === 'backstage' && <BackstageView />}
                {effectiveView === '404' && <NotFoundView navigateTo={navigateTo} />}
              </Suspense>
            </CSSTransition>
          </TransitionGroup>
        </main>
        <RestorationPlayer />
        <footer className="bg-[#F4F4F3] text-[#041E42] pt-32 pb-12 px-6 md:px-12 antialiased selection:bg-[#D50032] selection:text-white">
          <div className="max-w-[1920px] mx-auto">
            <div className="border-t-2 border-[#041E42] pt-12 grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-12">
              <div className="md:col-span-4 flex flex-col justify-between h-full"><div><Logo className="h-8 w-auto mb-12 text-[#041E42] opacity-80" /><div className="space-y-6 max-w-xs"><p className="text-[10px] font-sans font-bold tracking-[0.1em] uppercase leading-relaxed text-[#041E42]/70">Incorporated in Delaware<br/>501(c)(7) Non-Profit</p><p className="text-[10px] font-sans font-bold tracking-[0.1em] uppercase leading-relaxed text-[#041E42]/70">Kindly be advised that contributions are not tax-deductible.</p></div></div></div>
              <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
                <div className="flex flex-col gap-6"><span className="text-[11px] font-sans font-bold tracking-[0.05em] uppercase text-[#D50032] border-b border-[#041E42]/20 pb-4 block">Index</span>{[{ name: 'Box Office', slug: 'agenda' }, { name: 'Listening Room', slug: 'discography' }, { name: 'Haberdasher', slug: 'store' }, { name: 'Patronage', slug: 'philanthropy' }].map((item) => (<button key={item.name} onClick={() => navigateTo(item.slug)} className="text-left text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42] hover:text-[#D50032] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D50032] block py-2">{item.name}</button>))}</div>
                <div className="flex flex-col gap-6"><span className="text-[11px] font-sans font-bold tracking-[0.05em] uppercase text-[#041E42]/70 border-b border-[#041E42]/20 pb-4 block">Backstage</span><button onClick={() => navigateTo('backstage')} className="text-left text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42] hover:text-[#D50032] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D50032] block py-2">Database</button><button onClick={() => navigateTo('backstage')} className="text-left text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42] hover:text-[#D50032] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D50032] block py-2">Messaging</button></div>
                <div className="flex flex-col gap-6"><span className="text-[11px] font-sans font-bold tracking-[0.05em] uppercase text-[#041E42]/70 border-b border-[#041E42]/20 pb-4 block">External</span>{[{ name: 'The House', url: 'https://3611.georgetownchimes.org' }, { name: 'The Actives', url: 'https://georgetownchimes.org' }].map((site) => (<button key={site.name} onClick={() => window.open(site.url, '_blank', 'noopener,noreferrer')} className="group flex items-center gap-2 text-left text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42] hover:text-[#D50032] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D50032] block py-2">{site.name}<span className="text-lg font-light leading-none opacity-0 group-hover:opacity-100 transition-opacity translate-y-[-1px]">&#x2197;&#xFE0E;</span></button>))}</div>
              </div>
            </div>
          </div>
          <div className="max-w-[1920px] mx-auto mt-24 pt-6 border-t border-[#041E42]/10 flex flex-col md:flex-row justify-between items-center text-[9px] font-sans font-bold text-[#041E42]/70 uppercase tracking-[0.2em] gap-8"><span>© {new Date().getFullYear()} Georgetown Chimes Alumni Association, Inc.</span><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 group hover:text-[#D50032] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D50032]">Return to Top <span className="text-lg font-light leading-none rotate-180">↓</span></button></div>
        </footer>
      </AudioProvider>
    </div>
  );
}