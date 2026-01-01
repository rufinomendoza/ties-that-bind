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

// --- Swiss System NavBar ---
export const NavBar = ({ activePage, navigateTo, mobileMenuOpen, setMobileMenuOpen }) => {
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
          <button className="flex items-center gap-4 cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D50032] focus-visible:ring-offset-4" onClick={() => navigateTo('home')} aria-label="Home">
            <Logo className="h-6 w-auto text-[#041E42] group-hover:text-[#D50032] transition-colors duration-300" />
          </button>
          <div className="hidden lg:flex items-stretch h-full gap-12">
            {NAV_LINKS.map((link) => (
              <NavButton key={link.id} page={link.id}>
                {link.label}
              </NavButton>
            ))}
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-3 -mr-3 text-[#041E42] hover:text-[#D50032] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D50032]" aria-label="Toggle Menu">{mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}</button>
        </div>
      </nav>
       <div className={`fixed inset-0 z-40 bg-[#F4F4F3] px-6 md:px-12 pt-32 pb-12 overflow-y-auto transition-transform duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
         <div className="max-w-[1920px] mx-auto flex flex-col h-full justify-between">
           <div className="flex flex-col">
              <span className="text-[11px] font-sans font-bold tracking-[0.05em] text-[#D50032] mb-8 block uppercase border-b border-[#041E42]/20 pb-4">
                Directory
              </span>
              
              {/* Explicit "Home" link for Mobile Only */}
              <NavButton page="home" mobile={true}>Home</NavButton>
              
              {/* The rest of the links from your configuration */}
              {NAV_LINKS.map((link) => (
                <NavButton key={link.id} page={link.id} mobile={true}>
                  {link.label}
                </NavButton>
              ))}
            </div>
        <div className="mt-12 space-y-8"><div className="grid grid-cols-2 gap-8"><div><span className="text-[9px] font-sans font-bold tracking-[0.2em] text-[#041E42]/70 uppercase block mb-4">External</span><div className="flex flex-col gap-4"><a href="https://georgetownchimes.org" target="_blank" rel="noreferrer" className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42]">The Actives &#x2197;&#xFE0E;</a><a href="https://3611.georgetownchimes.org" target="_blank" rel="noreferrer" className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#041E42]">The House &#x2197;&#xFE0E;</a></div></div></div><p className="text-[9px] font-sans font-bold tracking-[0.2em] text-[#041E42]/70 uppercase mb-12">© {new Date().getFullYear()} GCAA, Inc.</p></div>
        </div>
      </div>
    </>
  );
};