import React from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const NAV_LINKS = [
  { id: 'agenda', label: 'Box Office' },
  { id: 'discography', label: 'Listening Room' },
  { id: 'store', label: 'Haberdasher' },
  { id: 'philanthropy', label: 'Patronage' },
  { id: 'backstage', label: 'Backstage' }
];

// 1. Create a map of your lazy imports
const viewPrefetchMap = {
  home: () => import('../views/HomeView'), // Added home prefetch
  agenda: () => import('../views/AgendaView'),
  discography: () => import('../views/DiscographyView'),
  philanthropy: () => import('../views/PhilanthropyView'),
  store: () => import('../views/StoreView'),
  backstage: () => import('../views/BackstageView'),
};

// --- Swiss System NavBar ---
export const NavBar = ({ activePage, navigateTo, mobileMenuOpen, setMobileMenuOpen }) => {
  
  // Refactored NavButton to handle its own prefetching
  const NavButton = ({ page, children, mobile = false }) => {
    
    const handlePrefetch = () => {
      const prefetch = viewPrefetchMap[page];
      if (prefetch) {
        prefetch();
        // console.log(`⚡ Prefetching: ${page}`);
      }
    };

    return (
      <button 
        onClick={() => { 
          navigateTo(page); 
          if (mobile) setMobileMenuOpen(false); 
        }} 
        onMouseEnter={!mobile ? handlePrefetch : undefined} // Trigger on hover (desktop only)
        className={`${mobile ? 'block w-full text-center text-4xl font-serif py-6 text-[#041E42] border-b border-[#041E42]/5' : `h-full flex items-center text-[10px] font-bold tracking-[0.25em] uppercase transition-all duration-500 relative group ${activePage === page ? 'text-[#041E42]' : 'text-[#595959] hover:text-[#041E42]'}`}`}
      >
        {children}
        {!mobile && (
          <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#041E42] transform origin-left transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${activePage === page ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
        )}
      </button>
    );
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#F4F4F3] border-b-2 border-[#041E42] h-20 md:h-24 px-6 md:px-12 transition-all duration-500">
        <div className="max-w-[1920px] mx-auto h-full flex justify-between items-center">
          {/* Use NavButton for Home too to benefit from prefetching */}
          <NavButton page="home">
            <Logo className="h-6 w-auto text-[#041E42] group-hover:text-[#D50032] transition-colors duration-300" />
          </NavButton>

          <div className="hidden lg:flex items-stretch h-full gap-12">
            {NAV_LINKS.map((link) => (
              <NavButton key={link.id} page={link.id}>
                {link.label}
              </NavButton>
            ))}
          </div>
          {/* ... mobile toggle button ... */}
        </div>
      </nav>
      {/* ... mobile menu drawer ... */}
    </>
  );
};