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

const viewPrefetchMap = {
  home: () => import('../views/HomeView'),
  agenda: () => import('../views/AgendaView'),
  discography: () => import('../views/DiscographyView'),
  philanthropy: () => import('../views/PhilanthropyView'),
  store: () => import('../views/StoreView'),
  backstage: () => import('../views/BackstageView'),
};

export const NavBar = ({ activePage, navigateTo, mobileMenuOpen, setMobileMenuOpen }) => {
  
  const NavButton = ({ page, children, mobile = false, isLogo = false }) => {
    const handlePrefetch = () => {
      const prefetch = viewPrefetchMap[page];
      if (prefetch) prefetch();
    };

    const isActive = activePage === page;

    return (
      <button 
        onClick={() => { 
          navigateTo(page); 
          if (mobile) setMobileMenuOpen(false); 
        }} 
        onMouseEnter={!mobile ? handlePrefetch : undefined}
        // ✅ ACCESSIBILITY ADDITION 1: Indicate active page
        aria-current={isActive ? 'page' : undefined}
        // ✅ ACCESSIBILITY ADDITION 2: Explicit label for the Logo button
        aria-label={isLogo ? 'Go to Home Page' : undefined} 
        className={mobile 
          ? 'block w-full text-center text-4xl font-serif py-6 text-[#041E42] border-b border-[#041E42]/5' 
          : `h-full flex items-center transition-all duration-500 relative group ${isLogo ? '' : 'text-[10px] font-bold tracking-[0.25em] uppercase'} ${isActive ? 'text-[#041E42]' : 'text-[#595959] hover:text-[#041E42]'}`
        }
      >
        {children}
        {!mobile && !isLogo && (
          <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#041E42] transform origin-left transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
        )}
      </button>
    );
  };

  return (
    <>
      <nav 
        className="fixed top-0 left-0 w-full z-50 bg-[#F4F4F3] border-b-2 border-[#041E42] h-20 md:h-24 px-6 md:px-12"
        role="navigation" 
        aria-label="Main Navigation"
      >
        <div className="max-w-[1920px] mx-auto h-full flex justify-between items-center">
          
          {/* Logo / Home Button */}
          <NavButton page="home" isLogo={true}>
            {/* Note: aria-hidden here ensures screen readers ignore the graphic and read the button label instead */}
            <Logo className="h-6 w-auto text-[#041E42] group-hover:text-[#D50032] transition-colors duration-300" aria-hidden="true" />
          </NavButton>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-stretch h-full gap-12">
            {NAV_LINKS.map((link) => (
              <NavButton key={link.id} page={link.id}>
                {link.label}
              </NavButton>
            ))}
          </div>

          {/* Hamburger / Toggle Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="lg:hidden p-3 -mr-3 text-[#041E42] hover:text-[#D50032] transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            // ✅ ACCESSIBILITY ADDITION 3: Tell user state of menu
            aria-expanded={mobileMenuOpen} 
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} strokeWidth={1.5} aria-hidden="true" /> : <Menu size={24} strokeWidth={1.5} aria-hidden="true" />}
          </button>

        </div>
      </nav>

      {/* Mobile Drawer */}
      <div 
        id="mobile-menu" // Matches aria-controls above
        aria-hidden={!mobileMenuOpen}
        className={`fixed inset-0 z-40 bg-[#F4F4F3] px-6 pt-32 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] 
          ${mobileMenuOpen 
            ? 'translate-y-0 opacity-100 visible' 
            : '-translate-y-full opacity-0 invisible pointer-events-none'
          }`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          <NavButton page="home" mobile={true}>Home</NavButton>
          {NAV_LINKS.map((link) => (
            <NavButton key={link.id} page={link.id} mobile={true}>
              {link.label}
            </NavButton>
          ))}
          
          <div className="mt-auto pt-6 pb-12 opacity-60">
             <p className="text-[9px] font-sans font-bold tracking-[0.2em] uppercase">© {new Date().getFullYear()} GCAA, Inc.</p>
          </div>
        </div>
      </div>
    </>
  );
};